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

export function Search(props:any) {
  let title:string = ''
  let contents:any[] = []

  contents = props.contents
  
  if (props.title === 'lines') {
    title = "Select " + props.title
  } else if (props.title === 'from') {
    title = "From station"
  } else if (props.title === 'to') {
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
          disabled={props.disabled}
        >
          {value
            ? contents.find((content) => content.value === value)?.label
            : `${title} ...`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] md:[300px] lg:w-[300px] p-0">
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
                    props.setFrom("")
                  } else if (props.title === 'from') {
                    props.setFrom(currentValue === value ? "" : content.value)
                    props.setTo("")
                  } else if (props.title === 'to') {
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
  )
}
