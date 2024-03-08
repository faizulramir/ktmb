"use client"

import { useEffect, useState } from "react"
import { Search } from "../Components/Search"
import { Button } from "@/Components/ui/button"
import getStations from "@/api/services/getData"
import { Result } from "../Components/Result"
import { Detail } from "../Components/Detail"

const initialState = ""

export default function FindingForm(props:any) {
    const [disabled, setDisabled] = useState(props.searchDisabled)
    const [lines, setLines] = useState("")
    const [to, setTo] = useState("")
    const [loadingData, setLoadingData] = useState(false)
    const [toStations, setToStations] = useState<any[]>([])
    const [allStations, setAllStations] = useState("")
    const [toKey, setToKey] = useState(1)
    const [linesKey, setLinesKey] = useState(20)
    const [detail, setDetail] = useState(false)
    const [moreDetail, setMoreDetail] = useState<any[]>([])

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
            setToStations(stationsArray)
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    };

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
            <Search 
                title="lines" 
                initial={initialState} 
                lines={lines} 
                contents={roadlines} 
                setLines={setLines} 
            />
            <div className="mt-2">
                <Search 
                    title="station" 
                    key={toKey} 
                    contents={toStations} 
                    setTo={setTo} 
                    disabled={disabled} 
                    setDisabled={setDisabled}
                />
            </div>
            <div className="text-center mt-4">
                <Result 
                    disabled={to && lines ? false  : true} 
                    to={to}
                    lines={lines}
                    allStations={allStations}
                    setDetail={setDetail}
                    setMoreDetail={setMoreDetail}
                />

                { detail && <Detail openDetail={true} setDetail={setDetail} moreDetail={moreDetail} /> }
            </div>
        </>
    )
}