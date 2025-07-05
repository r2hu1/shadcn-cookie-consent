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

export default function Demo() {
  const [activeVariant, setActiveVariant] = useState(null);

  const handleVariantToggle = (variant) => {
    setActiveVariant((current) => (current === variant ? null : variant));
  };

  const handleHide = () => {
    setTimeout(() => {
      setActiveVariant(null);
    }, 500);
  };

  const variants = [
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
    <div className="bg-background p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Cookie Consent Component
              <Badge variant="secondary">Demo</Badge>
            </CardTitle>
            <CardDescription>
              Click the buttons below to preview different variants of the
              cookie consent banner. The banner will appear at the bottom of the
              screen.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
            </div>
          </CardContent>
        </Card>

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
