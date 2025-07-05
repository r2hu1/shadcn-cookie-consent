# Shadcn Cookie Consent (updated to shadcn@latest, next@latest, tailwindcss@latest)

This repository contains a implementation of a cookie consent banner using Shadcn UI and TailwindCSS. This solution aims to provide a user-friendly way to comply with cookie consent regulations while maintaining a visually appealing design.

## Preview

![preview](/public/preview.png)

## How To Use

-   Create a component named CookieConsent.jsx
-   Make it a client component

```json
"use client"
```

-   Import the following components from shadcn, react and lucide-react

```jsx
import * as React from "react";
import { Check, Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
```

-   Add this code the component

```jsx
const CookieConsent = React.forwardRef(
  (
    {
      variant = "default",
      demo = false,
      onAcceptCallback = () => {},
      onDeclineCallback = () => {},
      className,
      description = "We use cookies to ensure you get the best experience on our website. For more information on how we use cookies, please see our cookie policy.",
      learnMoreHref = "#",
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [hide, setHide] = React.useState(false);

    const handleAccept = React.useCallback(() => {
      setIsOpen(false);
      document.cookie =
        "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
      setTimeout(() => {
        setHide(true);
      }, 700);
      onAcceptCallback();
    }, [onAcceptCallback]);

    const handleDecline = React.useCallback(() => {
      setIsOpen(false);
      setTimeout(() => {
        setHide(true);
      }, 700);
      onDeclineCallback();
    }, [onDeclineCallback]);

    React.useEffect(() => {
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
      } catch (error) {
        console.warn("Cookie consent error:", error);
      }
    }, [demo]);

    if (hide) return null;

    const containerClasses = cn(
      "fixed z-50 transition-all duration-700",
      !isOpen ? "translate-y-full opacity-0" : "translate-y-0 opacity-100",
      className,
    );

    if (variant === "default") {
      return (
        <div
          ref={ref}
          className={cn(
            containerClasses,
            "bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md",
          )}
          {...props}
        >
          <Card className="m-3 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg">We use cookies</CardTitle>
              <Cookie className="h-5 w-5" />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardDescription className="text-sm">
                {description}
              </CardDescription>
              <p className="text-xs text-muted-foreground">
                By clicking <span className="font-medium">"Accept"</span>, you
                agree to our use of cookies.
              </p>
              <a
                href={learnMoreHref}
                className="text-xs text-primary underline underline-offset-4 hover:no-underline"
              >
                Learn more
              </a>
            </CardContent>
            <CardFooter className="flex gap-2 pt-2">
              <Button
                onClick={handleDecline}
                variant="secondary"
                className="flex-1"
              >
                Decline
              </Button>
              <Button onClick={handleAccept} className="flex-1">
                Accept
              </Button>
            </CardFooter>
          </Card>
        </div>
      );
    }

    if (variant === "small") {
      return (
        <div
          ref={ref}
          className={cn(
            containerClasses,
            "bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md",
          )}
          {...props}
        >
          <Card className="m-3 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 h-0 px-4">
              <CardTitle className="text-base">We use cookies</CardTitle>
              <Cookie className="h-4 w-4" />
            </CardHeader>
            <CardContent className="pt-0 pb-2 px-4">
              <CardDescription className="text-sm">
                {description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex gap-2 h-0 py-2 px-4">
              <Button
                onClick={handleDecline}
                variant="secondary"
                size="sm"
                className="flex-1 rounded-full"
              >
                Decline
              </Button>
              <Button
                onClick={handleAccept}
                size="sm"
                className="flex-1 rounded-full"
              >
                Accept
              </Button>
            </CardFooter>
          </Card>
        </div>
      );
    }

    if (variant === "mini") {
      return (
        <div
          ref={ref}
          className={cn(
            containerClasses,
            "left-0 right-0 sm:left-4 bottom-4 w-full sm:max-w-3xl",
          )}
          {...props}
        >
          <Card className="mx-3 p-0 py-3 shadow-lg">
            <CardContent className="flex items-center justify-between gap-5 p-0 px-3.5">
              <CardDescription className="text-sm flex-1">
                {description}
              </CardDescription>
              <div className="flex items-center gap-2 sm:gap-3">
                <Button
                  onClick={handleDecline}
                  size="sm"
                  variant="secondary"
                  className="text-xs"
                >
                  <span className="hidden sm:block">Decline</span>
                  <X className="h-3 w-3 sm:hidden" />
                  <span className="sr-only sm:hidden">Decline</span>
                </Button>
                <Button onClick={handleAccept} size="sm" className="text-xs">
                  <span className="hidden sm:block">Accept</span>
                  <Check className="h-3 w-3 sm:hidden" />
                  <span className="sr-only sm:hidden">Accept</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return null;
  },
);

CookieConsent.displayName = "CookieConsent";

export { CookieConsent };
export default CookieConsent;

```

## Variants

there are three variants `default` , `small`, and `mini`

```jsx
<CookieConsent variant="default"/>
<CookieConsent variant="small"/>
<CookieConsent variant="mini"/>
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

example:

```jsx
<CookieConsent variant="default" onAcceptCallback={() => console.log('Accepted')} onDeclineCallback={() => console.log('Declined')}/>
`

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
