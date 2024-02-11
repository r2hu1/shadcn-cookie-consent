"use client"
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { CookieIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [demo, setDemo] = useState(false);

  return (
    <main className="px-6 md:px-20 lg:px-32 py-20">
      <div className="sm:max-w-2xl mx-auto text-center grid gap-2">
        <h1 className="text-3xl md:text-4xl font-bold">Shadcn Cookie Consent</h1>
        <p className="text-base md:text-lg opacity-80 font-normal">Beautifully designed, customizable cookie consent for web built on top of shadcn-ui and tailwind-css!</p>
        <div className="flex mt-4 items-center justify-center gap-2">
          <Button onClick={() => { setDemo(!demo) }}>{demo ? "Viewing Demo" : "Live Demo" }</Button>
          <Button variant="secondary">Install</Button>
        </div>
      </div>
      <div className="mt-20">
        <div className="w-full sm:max-w-xl mx-auto select-none pointer-events-none" role="img">
          <div className="bg-secondary/80 rounded-md">
            <div className="grid gap-2">
              <div className="border-b border-border h-14 flex items-center justify-between p-4">
                <h1 className="text-lg font-medium">We use cookies</h1>
                <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
              </div>
              <div className="p-4">
                <p className="text-sm font-normal">
                  We use cookies to ensure you get the best experience on our website. For more information on how we use cookies, please see our cookie policy.
                  <br />
                  <br />
                  <span className="text-xs">By clicking "<span className="font-medium opacity-80">Accept</span>", you agree to our use of cookies.</span>
                  <br />
                  <a href="#" className="text-xs underline">Learn more.</a>
                </p>
              </div>
              <div className="flex gap-2 p-4 py-5 border-t border-border bg-background/20">
                <Button className="w-full cursor-pointer">Accept</Button>
                <Button className="w-full" variant="secondary">Decline</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {demo && (<CookieConsent demo={true} onAcceptCallback={() => {setDemo(false)}} onDeclineCallback={() => {setDemo(false)}}/>)}
    </main>
  );
}