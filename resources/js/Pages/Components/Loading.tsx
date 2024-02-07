"use client"

import * as React from "react"

import { Progress } from "@/Components/ui/progress"

export function Loading({setParentLoad}:any) {
  const [progress, setProgress] = React.useState(13)
  
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 1500)
    return () => {
      setTimeout(() => setParentLoad(true), 1500)
      clearTimeout(timer)
    }
  }, [progress])

  return <Progress value={progress} className="w-full" />
}
