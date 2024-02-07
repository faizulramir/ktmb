"use client"

import { Search } from "../Components/Search"

export default function FindingForm() {
    return (
        <>
            <Search title="lines" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-8 mt-2">
                <Search title="from" />
                <Search title="to" />
            </div>
        </>
    )
}