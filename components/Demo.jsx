"use client"
import { useState } from "react";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "./ui/button";

export default function Demo() {
    const [demo, setDemo] = useState(false);
    const [demo2, setDemo2] = useState(false);

    return (
        <div className="flex gap-2">
            <Button onClick={() => { setDemo(!demo) }}>{demo ? "Viewing Demo 1" : "Demo 1"}</Button>
            <Button onClick={() => { setDemo2(!demo2) }}>{demo2 ? "Viewing Demo 2" : "Demo 2"}</Button>
            {demo && (<CookieConsent demo={true} onAcceptCallback={() => { setDemo(false) }} onDeclineCallback={() => { setDemo(false) }} />)}
            {demo2 && (<CookieConsent demo={true} variant={"small"} onAcceptCallback={() => { setDemo2(false) }} onDeclineCallback={() => { setDemo2(false) }} />)}
        </div>
    )
}