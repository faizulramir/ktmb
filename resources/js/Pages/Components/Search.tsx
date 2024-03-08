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
import { useEffect } from "react"
import { Label } from "@/Components/ui/label"


export function Search(props:any) {
  let title:string = ''
  let contents:any[] = []

  contents = props.contents
  
  title = "Select " + props.title

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <div>
      <p className="text-center md:text-left lg:text-left font-bold">{props.title.charAt(0).toUpperCase() + props.title.slice(1)}</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
            disabled={props.disabled}
          >
            {value
              ? contents.find((content) => content.value === value)?.label
              : `${title} ...`}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-dvh p-0">
          <Command>
            <CommandInput placeholder={`Search ${props.title}...`} />
            <CommandEmpty>Not found.</CommandEmpty>
            <CommandGroup className="h-[100px] overflow-auto">
              {contents.map((content, i) => (
                <CommandItem
                  key={i}
                  value={content.label}
                  disabled={content.disabled}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : content.value)
                    
                    if (props.title === 'lines') {
                      props.setLines(currentValue === value ? "" : content.value)
                    } else if (props.title === 'station') {
                      props.setTo(currentValue === value ? "" : content.value)
                    }

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
    </div>
    
  )
}
