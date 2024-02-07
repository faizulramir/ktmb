"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/Components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/Components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover"

const lines = [
  {
    value: "btc-t",
    label: "Bt Caves - Tampin",
  },
  {
    value: "tm-pk",
    label: "Tg Malim - Pel Klang",
  },
]

const stations = [
  {
    value: "1",
    label: "Bt Caves",
  },
  {
    value: "21",
    label: "Gombak",
  },
  {
    value: "3",
    label: "Shah Alam",
  },
]

export function Search(data:any) {
  let title:string = ''
  let contents = lines

  if (data.title === 'lines') {
    contents = lines
    title = "Select " + data.title
  } else if (data.title === 'from') {
    contents = stations
    title = "From station"
  } else if (data.title === 'to') {
    contents = stations
    title = "To station"
  }

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? contents.find((content) => content.value === value)?.label
            : `${title} ...`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={`Search ${data.title}...`} />
          <CommandEmpty>Not found.</CommandEmpty>
          <CommandGroup>
            {contents.map((content) => (
              <CommandItem
                key={content.value}
                value={content.label}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : content.value)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === content.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {content.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
