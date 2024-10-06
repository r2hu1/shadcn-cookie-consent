# Shadcn Cookie Consent

This repository contains a implementation of a cookie consent banner using Shadcn UI and TailwindCSS. This solution aims to provide a user-friendly way to comply with cookie consent regulations while maintaining a visually appealing design.

## Variant 1 - Small

![preview](/public/preview2.png)

## Variant 2 - Default

![preview](/public/preview.png)

## How To Use

-   Create a component named CookieConsent.jsx
-   Make it a client component

```json
"use client"
```

-   Import the following components from shadcn, react and react-icons

```jsx
import { CookieIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
```

-   Add this code the component

```jsx
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

    return variant != "small" ? (
        <div
            className={cn(
                "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
                !isOpen
                    ? "transition-[opacity,transform] translate-y-8 opacity-0"
                    : "transition-[opacity,transform] translate-y-0 opacity-100",
                hide && "hidden"
            )}
        >
            <div className="dark:bg-card bg-background rounded-md m-3 border border-border shadow-lg">
                <div className="grid gap-2">
                    <div className="border-b border-border h-14 flex items-center justify-between p-4">
                        <h1 className="text-lg font-medium">We use cookies</h1>
                        <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm font-normal text-start">
                            We use cookies to ensure you get the best experience
                            on our website. For more information on how we use
                            cookies, please see our cookie policy.
                            <br />
                            <br />
                            <span className="text-xs">
                                By clicking "
                                <span className="font-medium opacity-80">
                                    Accept
                                </span>
                                ", you agree to our use of cookies.
                            </span>
                            <br />
                            <a href="#" className="text-xs underline">
                                Learn more.
                            </a>
                        </p>
                    </div>
                    <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
                        <Button onClick={accept} className="w-full">
                            Accept
                        </Button>
                        <Button
                            onClick={decline}
                            className="w-full"
                            variant="secondary"
                        >
                            Decline
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div
            className={cn(
                "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
                !isOpen
                    ? "transition-[opacity,transform] translate-y-8 opacity-0"
                    : "transition-[opacity,transform] translate-y-0 opacity-100",
                hide && "hidden"
            )}
        >
            <div className="m-3 dark:bg-card bg-background border border-border rounded-lg">
                <div className="flex items-center justify-between p-3">
                    <h1 className="text-lg font-medium">We use cookies</h1>
                    <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                </div>
                <div className="p-3 -mt-2">
                    <p className="text-sm text-left text-muted-foreground">
                        We use cookies to ensure you get the best experience on
                        our website. For more information on how we use cookies,
                        please see our cookie policy.
                    </p>
                </div>
                <div className="p-3 flex items-center gap-2 mt-2 border-t">
                    <Button
                        onClick={accept}
                        className="w-full h-9 rounded-full"
                    >
                        accept
                    </Button>
                    <Button
                        onClick={decline}
                        className="w-full h-9 rounded-full"
                        variant="outline"
                    >
                        decline
                    </Button>
                </div>
            </div>
        </div>
    );
}
```

## Variants

there are two variants one is default that is big and second is small

```jsx
<CookieConsent variant="small"/>
<CookieConsent variant="default"/>
```

## Callbacks

by default, these callbacks will be called when the user accepts or declines the cookie consent.

-   onAcceptCallback
-   onDeclineCallback

```jsx
onAcceptCallback={() => {
    // code here
}}
onDeclineCallback={() => {
    // code here
}}
```

## Customizing

-   Add your own CSS
-   Add your own TailwindCSS config
-   Add your own shadcn theme

do whatever you want.

## Contributing

-   Fork the repo
-   Add your feature
-   Fix any issues
-   Create a Pull Request

## Demo

-   [Live demo](https://shadcn-cookie-consent.vercel.app)
