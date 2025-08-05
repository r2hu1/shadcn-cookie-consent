"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CookieConsent from "./CookieConsent";
import { Check, Copy } from "lucide-react";
import { AnimateInView } from "./AnimateInView";

type VariantType = "default" | "small" | "mini" | null;

export default function Demo() {
  const [activeVariant, setActiveVariant] = useState<VariantType>(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleVariantToggle = (variant: VariantType) => {
    setActiveVariant((current) => (current === variant ? null : variant));
  };

  const handleHide = () => {
    setTimeout(() => {
      setActiveVariant(null);
    }, 500);
  };

  const variants: { key: VariantType; label: string; description: string }[] = [
    {
      key: "default",
      label: "Default",
      description: "Full-featured banner with header and detailed content",
    },
    {
      key: "small",
      label: "Small",
      description: "Compact version with rounded buttons",
    },
    {
      key: "mini",
      label: "Mini",
      description: "Minimal inline banner for subtle notifications",
    },
  ];

  return (
    <div className=" p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        <AnimateInView>
        <Card>
          <CardHeader>
            <AnimateInView animationType="fadeLeft">
            <CardTitle className="flex items-center gap-2">
              Cookie Consent Component
              <Badge variant="secondary">Demo</Badge>
            </CardTitle>
            <CardDescription>
              Click the buttons below to preview different variants of the
              cookie consent banner. The banner will appear at the bottom of the
              screen.
            </CardDescription>
            </AnimateInView>
          </CardHeader>
          <CardContent>
            <AnimateInView animationType="fadeRight">
              <div className="grid gap-3 sm:grid-cols-3">

                {variants.map((variant) => (
                  <Button
                    key={variant.key}
                    onClick={() => handleVariantToggle(variant.key)}
                    variant={
                      activeVariant === variant.key ? "default" : "outline"
                    }
                    className="h-auto flex-col items-start gap-1 py-3 rounded-xl"
                  >
                    <span className="font-medium">
                      {activeVariant === variant.key
                        ? `Hide ${variant.label}`
                        : `Show ${variant.label}`}
                    </span>
                    <span className="text-xs opacity-70 text-left text-wrap">
                      {variant.description}
                    </span>
                  </Button>
                ))}

              </div></AnimateInView>
          </CardContent>
        </Card>
</AnimateInView>
<AnimateInView>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Installation
              <Badge variant="outline">CLI</Badge>
            </CardTitle>
            <CardDescription>
              Install the cookie consent component using the shadcn CLI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <div className="rounded-lg bg-muted p-4 pr-12">
                <AnimateInView animationType="zoomIn">
                <code className="text-sm font-mono">
                  npx shadcn@latest add
                  http://shadcn-cookies.vercel.app/r/cookie-consent.json
                </code>
                </AnimateInView>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-2 top-2 h-8 w-8 p-0"
                onClick={() =>
                  copyToClipboard(
                    "npx shadcn@latest add https://shadcn-cookie-consent.vercel.app/r/cookie-consent.json"
                  )
                }
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span className="sr-only">Copy command</span>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              This will add the cookie consent component to your project with
              all necessary dependencies.
            </p>
          </CardContent>
        </Card>
</AnimateInView>
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <code className="text-sm">
                {`<CookieConsent variant="${activeVariant || "default"}" onAcceptCallback={() => console.log('Accepted')} onDeclineCallback={() => console.log('Declined')}/>`}
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              {activeVariant
                ? `Currently showing the "${activeVariant}" variant. Check the bottom of the screen!`
                : "Select a variant above to see the cookie consent banner in action."}
            </p>
          </CardContent>
        </Card>
      </div>

      {activeVariant && (
        <CookieConsent
          key={activeVariant}
          demo={true}
          variant={activeVariant}
          onAcceptCallback={handleHide}
          onDeclineCallback={handleHide}
        />
      )}
    </div>
  );
}
