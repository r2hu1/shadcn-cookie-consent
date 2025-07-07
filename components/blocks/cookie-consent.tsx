"use client";

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

// Define prop types
interface CookieConsentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "small" | "mini";
  demo?: boolean;
  onAcceptCallback?: () => void;
  onDeclineCallback?: () => void;
  description?: string;
  learnMoreHref?: string;
}

const CookieConsent = React.forwardRef<HTMLDivElement, CookieConsentProps>(
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
        if (document.cookie.includes("cookieConsent=true") && !demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
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

    const commonWrapperProps = {
      ref,
      className: cn(
        containerClasses,
        variant === "mini"
          ? "left-0 right-0 sm:left-4 bottom-4 w-full sm:max-w-3xl"
          : "bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md",
      ),
      ...props,
    };

    if (variant === "default") {
      return (
        <div {...commonWrapperProps}>
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
        <div {...commonWrapperProps}>
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
        <div {...commonWrapperProps}>
          <Card className="mx-3 p-0 py-3 shadow-lg">
            <CardContent className="sm:flex grid gap-4 p-0 px-3.5">
              <CardDescription className="text-xs sm:text-sm flex-1">
                {description}
              </CardDescription>
              <div className="flex items-center gap-2 justify-end sm:gap-3">
                <Button
                  onClick={handleDecline}
                  size="sm"
                  variant="secondary"
                  className="text-xs h-7"
                >
                  Decline
                  <span className="sr-only sm:hidden">Decline</span>
                </Button>
                <Button
                  onClick={handleAccept}
                  size="sm"
                  className="text-xs h-7"
                >
                  Accept
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
