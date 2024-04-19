import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet"
import React, { useEffect } from "react";
import { DetailData } from "./DetailData";
import { Separator } from "@/Components/ui/separator"

export function Detail(props:any) {
  const [open, setOpen] = React.useState(props.openDetail);
  const [resetKey, setResetKey] = React.useState(1);

  useEffect(() => {
    if (open === false) {
        props.setDetail(false)
        setResetKey(0)
    }
}, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Train schedule.</SheetTitle>
          <Separator className="my-2" />
          <div className="grid grid-cols-3 font-bold">
            <div>Trip No</div>
            <div>Train No</div>
            <div>Arrival Time</div>
          </div>
          <Separator className="my-2" />
          <DetailData moreDetail={props.moreDetail} key={resetKey}/>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}