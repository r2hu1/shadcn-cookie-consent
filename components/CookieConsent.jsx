"use client";

import { CookieIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Check } from "lucide-react";

export default function CookieConsent({
  variant = "default",
  demo = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
    onAcceptCallback();
  };

  const decline = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
    }, 700);
    onDeclineCallback();
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true")) {
        if (!demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch (e) {
      // console.log("Error: ", e);
    }
  }, []);

  return variant == "default" ? (
    <div
      className={cn(
        "fixed transition-all z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
        !isOpen ? "translate-y-42 opacity-0" : "translate-y-0 opacity-100",
        hide && "hidden",
      )}
    >
      <div className="bg-card rounded-md m-3 border shadow-lg">
        <div className="grid gap-2">
          <div className="border-b border-border h-14 flex items-center justify-between p-4">
            <h1 className="text-lg font-medium">We use cookies</h1>
            <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
          </div>
          <div className="p-4">
            <p className="text-sm font-normal text-start">
              We use cookies to ensure you get the best experience on our
              website. For more information on how we use cookies, please see
              our cookie policy.
              <br />
              <br />
              <span className="text-xs">
                By clicking "
                <span className="font-medium opacity-80">Accept</span>", you
                agree to our use of cookies.
              </span>
              <br />
              <a href="#" className="text-xs underline">
                Learn more.
              </a>
            </p>
          </div>
          <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
            <Button onClick={decline} className="w-full" variant="secondary">
              Decline
            </Button>
            <Button onClick={accept} className="w-full">
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : variant == "small" ? (
    <div
      className={cn(
        "fixed transition-all z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
        !isOpen ? "translate-y-42 opacity-0" : "translate-y-0 opacity-100",
        hide && "hidden",
      )}
    >
      <div className="m-3 bg-card shadow-lg border rounded-lg">
        <div className="flex items-center justify-between p-3">
          <h1 className="text-lg font-medium">We use cookies</h1>
          <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
        </div>
        <div className="p-3 -mt-2">
          <p className="text-sm text-left text-muted-foreground">
            We use cookies to ensure you get the best experience on our website.
            For more information on how we use cookies, please see our cookie
            policy.
          </p>
        </div>
        <div className="p-3 flex items-center gap-2 mt-2 border-t">
          <Button
            onClick={decline}
            className="w-full h-9 rounded-full"
            variant="secondary"
          >
            decline
          </Button>
          <Button onClick={accept} className="w-full h-9 rounded-full">
            accept
          </Button>
        </div>
      </div>
    </div>
  ) : (
    variant === "mini" && (
      <div
        className={cn(
          "fixed transition-all z-[200] shadow-lg left-4 bottom-0 sm:bottom-4 w-full duration-800 flex items-center justify-between w-full gap-4 bg-card border-t border-border sm:border sm:rounded-lg px-3 py-3 sm:py-2 max-w-3xl",
          !isOpen ? "translate-y-32 opacity-0" : "translate-y-0 opacity-100",
          hide && "hidden",
        )}
      >
        <p className="text-sm text-foreground/80 text-left">
          We use cookies to ensure you get the best experience on our website.
          For more information on how we use cookies, please see our cookie
          policy.
        </p>
        <div className="grid sm:flex items-center gap-2 sm:gap-3">
          <Button
            onClick={decline}
            size="sm"
            variant="secondary"
            className="text-xs"
          >
            <span className="sm:block hidden">Decline</span>
            <X className="h-3 w-3 sm:hidden block" />
          </Button>
          <Button onClick={accept} size="sm" className="text-xs">
            <span className="sm:block hidden">Accept</span>
            <Check className="h-3 w-3 sm:hidden block" />
          </Button>
        </div>
      </div>
    )
  );
}
