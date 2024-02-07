"use client"

import { useEffect, useState } from "react"
import { Search } from "../Components/Search"
import { Button } from "@/Components/ui/button"
import getStations from "@/api/services/getData"
import { Result } from "../Components/Result"

const initialState = ""

export default function FindingForm(props:any) {
    const [disabled, setDisabled] = useState(props.searchDisabled)
    const [lines, setLines] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [loadingData, setLoadingData] = useState(false)
    const [fromStations, setFromStations] = useState<any[]>([])
    const [toStations, setToStations] = useState<any[]>([])
    const [allStations, setAllStations] = useState("")
    const [toKey, setToKey] = useState(1)
    const [linesKey, setLinesKey] = useState(20)

    const roadlines = [
        {
          value: "",
          label: "Please Select",
          disabled: false
        },
        {
          value: "bc",
          label: "Bt Caves - Tampin",
          disabled: false
        },
        {
          value: "tm",
          label: "Tg Malim - Pel Klang",
          disabled: false
        },
    ]

    const getAllStations = async () => {
        setLoadingData(true);

        const response = await getStations(lines);

        setLoadingData(false);

        if (!response) return;

        const { data: data } = response;

        if (data && data.length) {
            setAllStations(data)

            let stationsArray:any = []
            Object.keys(data[0]).forEach(key => {
                if (key !== 'Nombor Trip' && key !== 'Nombor Tren') {
                    stationsArray.push({
                        value: key,
                        label: key,
                        disabled: false
                    })
                }
            })
            setFromStations(stationsArray)
            setToStations(stationsArray)
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    };
      
    useEffect(() => {
        if (from !== "") {
            let stationIndex = toStations.findIndex(station => station.value === from)
            setToStations([...toStations.map((station, index) => {
                if (index > stationIndex) {
                    return {
                       ...station,
                        disabled: false
                    }
                } else {
                    return {
                        ...station,
                        disabled: true
                     }
                }
            })])

            setToKey(toKey + 1)
        }
    }, [from])

    useEffect(() => {
        if (lines !== "") {
            getAllStations()
            setLinesKey(linesKey + 2)
        } else {
            setDisabled(true)
        }
    }, [lines])

    return (
        <>
            <Search title="lines" initial={initialState} lines={lines} contents={roadlines} setLines={setLines} setFrom={setFrom}/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-8 mt-2">
                <Search title="from" key={lines ? linesKey : 20} contents={fromStations} setFrom={setFrom} from={from} setTo={setTo} disabled={disabled} setDisabled={setDisabled}/>
                <Search title="to" key={from ? toKey : 1} contents={toStations} setTo={setTo} disabled={disabled} setDisabled={setDisabled}/>
            </div>
            <div className="text-center mt-4">
                <Result disabled={from && to && lines ? false  : true}/>
            </div>
        </>
    )
}