import * as React from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { Button } from "@/Components/ui/button"
import moment from 'moment'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/Components/ui/drawer"
import { count } from "console"
 
export function Result(props:any) {
  const [nowTrain, setNowTrain] = React.useState(300)
  const [nextTrain, setNextTrain] = React.useState(320)
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    props.setDetail(true)
    setOpen(false)
  }

  // function countDownIncoming(timer:any) {
  //   var timeleft = 10;
  //   var downloadTimer = setInterval(function(){
  //     if(timeleft <= 0){
  //       clearInterval(downloadTimer);
  //     }
  //     // document.getElementById("progressBar").value = 10 - timeleft;
  //     console.log(timeleft)
  //     timeleft -= 1;
  //   }, 1000);
  // }

  React.useEffect(() => {
    if (!props.disabled && open) {
      var currentDate = new Date();
      var hour = currentDate.getHours();
      var minute = currentDate.getMinutes();
      var time = hour + ":" + minute
  
      var stations:any = []
      props.allStations.forEach((station:any) => {
        var stationTo = station[props.to];
        if (stationTo.length < 5 && stationTo !== "") {
          stationTo = "0" + stationTo
        }
  
        if (stationTo > time && stationTo !== "") stations.push({
          trainNo: station['Nombor Tren'],
          tripNo: station['Nombor Trip'],
          timer: stationTo
        })
      });

      let timeNow1 = moment(stations[0].timer, "HH:mm");
      let timeNow2 = moment(time, "HH:mm");

      var nowTrainTimer = moment.duration(timeNow1.diff(timeNow2));
      setNowTrain(nowTrainTimer.asMinutes())

      let timeNext1 = moment(stations[1].timer, "HH:mm");
      let timeNext2 = moment(time, "HH:mm");

      var nextTrainTimer = moment.duration(timeNext1.diff(timeNext2));
      setNextTrain(nextTrainTimer.asMinutes())

      props.setMoreDetail(stations)
    }
  }, [open])

  

    
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button disabled={props.disabled}>Route Me!</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Routes</DrawerTitle>
            <DrawerDescription>Plan your routes.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center">
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Incoming Train in
                </div>
                <div className="text-base font-bold tracking-tighter">
                  <span className="text-7xl">{nowTrain}</span> Minutes
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="flex-1 text-center">
                  <div className="text-base font-bold tracking-tighter">
                    <span className="text-4xl">{nextTrain}</span> Minutes
                  </div>
                  <div className="text-[0.70rem] uppercase text-muted-foreground">
                    Next Train In
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={handleClick}>More Detail</Button>
            <DrawerClose asChild>
              <Button variant="outline">Got it!</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}