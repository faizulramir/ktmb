import * as React from "react"
 
import { ScrollArea } from "@/Components/ui/scroll-area"
import { Separator } from "@/Components/ui/separator"
 
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
 
export function DetailData(props:any) {
  return (
    <ScrollArea className="h-screen w-full rounded-md border">
      <div className="p-4">
        <div className="grid grid-cols-3">
          <div className="font-bold">Trip No</div>
          <div className="font-bold">Train No</div>
          <div className="font-bold">Arrival Time</div>
        </div>
        <Separator className="my-2" />
        {props.moreDetail.map((train:any, index:number) => (
          <div key={train.trainNo}>
            <div className={ index === 0 ? "grid grid-cols-3 bg-lime-300" : "grid grid-cols-3"}>
              <div>{train.tripNo}</div>
              <div>{train.trainNo}</div>
              <div>{train.timer}</div>
            </div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}