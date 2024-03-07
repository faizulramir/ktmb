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
          <SheetTitle>Train in schedule.</SheetTitle>
          <DetailData moreDetail={props.moreDetail} key={resetKey}/>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}