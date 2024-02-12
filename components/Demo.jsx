"use client"
import { useState } from "react";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "./ui/button";

export default function Demo() {
    const [demo, setDemo] = useState(false);
    return (
        <div>
            <Button onClick={() => { setDemo(!demo) }}>{demo ? "Viewing Demo" : "Live Demo"}</Button>
            {demo && (<CookieConsent demo={true} onAcceptCallback={() => { setDemo(false) }} onDeclineCallback={() => { setDemo(false) }} />)}
        </div>
    )
}