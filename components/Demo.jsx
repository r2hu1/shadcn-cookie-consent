"use client";
import { useState } from "react";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "./ui/button";

export default function Demo() {
  const [demo, setDemo] = useState(0);

  return (
    <div className="flex gap-2 flex-wrap">
      <Button
        onClick={() => {
          setDemo((prv) => (prv === 1 ? 0 : 1));
        }}
      >
        {demo === 1 ? "Viewing Variant 1" : "Variant 1"}
      </Button>
      <Button
        onClick={() => {
          setDemo((prv) => (prv === 2 ? 0 : 2));
        }}
      >
        {demo === 2 ? "Viewing Variant 2" : "Variant 2"}
      </Button>
      <Button
        onClick={() => {
          setDemo((prv) => (prv === 3 ? 0 : 3));
        }}
      >
        {demo === 3 ? "Viewing Variant 3" : "Variant 3"}
      </Button>
      {demo === 1 && (
        <CookieConsent
          demo={true}
          onAcceptCallback={() => {
            setDemo(0);
          }}
          onDeclineCallback={() => {
            setDemo(0);
          }}
        />
      )}
      {demo === 2 && (
        <CookieConsent
          demo={true}
          variant={"small"}
          onAcceptCallback={() => {
            setDemo(0);
          }}
          onDeclineCallback={() => {
            setDemo(0);
          }}
        />
      )}
      {demo === 3 && (
        <CookieConsent
          demo={true}
          variant={"mini"}
          onAcceptCallback={() => {
            setDemo(0);
          }}
          onDeclineCallback={() => {
            setDemo(0);
          }}
        />
      )}
    </div>
  );
}
