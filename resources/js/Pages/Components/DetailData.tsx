import * as React from "react"
 
import { ScrollArea } from "@/Components/ui/scroll-area"
import { Separator } from "@/Components/ui/separator"
 
export function DetailData(props:any) {
  const paragraphRef = React.useRef<HTMLInputElement>(null);
  
  React.useEffect(() => {
    if (paragraphRef.current) {
      paragraphRef.current.scrollIntoView();
    }
  }, []);

  return (
    <ScrollArea className="h-screen w-full rounded-md border pb-40">
      <div className="p-4">
        <div className="grid grid-cols-3 font-bold">
          <div>Trip No</div>
          <div>Train No</div>
          <div>Arrival Time</div>
        </div>
        <Separator className="my-2" />
      {
        props.moreDetail.map((train:any) => (
          <div key={train.trainNo} ref={train.color ? paragraphRef : null}>
            <div className={ train.color ? "grid grid-cols-3 bg-lime-300" : "grid grid-cols-3"}>
              <div className={ !train.now ? "text-gray-400" : ""}>{train.tripNo}</div>
              <div className={ !train.now ? "text-gray-400" : ""}>{train.trainNo}</div>
              <div className={ !train.now ? "text-gray-400" : ""}>{train.timer}</div>
            </div>
            <Separator className="my-2" />
          </div>
        ))
      }
      </div>
    </ScrollArea>
  )
}