import * as React from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
 
import { Button } from "@/Components/ui/button"
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
 
export function Result(props:any) {
  const [nowTrain, setNowTrain] = React.useState(300)
  const [nextTrain, setNextTrain] = React.useState(320)
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    props.setDetail(true)
    setOpen(false)
  }
  
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