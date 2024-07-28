import Demo from "@/components/Demo";
import { Button } from "@/components/ui/button";
import { CookieIcon } from "lucide-react";


export default function Home() {

  return (
    <main className="md:px-20 lg:px-32 py-20">
      <div className="px-6 sm:max-w-2xl mx-auto text-center grid gap-2">
        <h1 className="text-3xl md:text-4xl font-bold">Shadcn Cookie Consent</h1>
        <p className="text-base md:text-lg opacity-80 font-normal">Beautifully designed, customizable cookie consent for web built on top of shadcn-ui and tailwind-css!</p>
        <div className="flex mt-4 items-center justify-center gap-2">
          <Demo />
          <Button variant="secondary" asChild><a href="https://github.com/r2hu1/shadcn-cookie-consent/blob/master/components/CookieConsent.jsx">Install</a></Button>
        </div>
      </div>
      <div className="mt-20 mb-5 px-3">
        <div className="w-full sm:max-w-xl mx-auto select-none pointer-events-none" role="img">
          <div className="bg-background rounded-md border border-border">
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
      <div className="w-full sm:max-w-xl mx-auto select-none pointer-events-none" role="img">
        <div className="m-3 dark:bg-card bg-background border border-border rounded-lg">
          <div className="flex items-center justify-between p-3">
            <h1 className="text-lg font-medium">We use cookies</h1>
            <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
          </div>
          <div className="p-3 -mt-2">
            <p className="text-sm text-left text-muted-foreground">
              We use cookies to ensure you get the best experience on our website. For more information on how we use cookies, please see our cookie policy.
            </p>
          </div>
          <div className="p-3 flex items-center gap-2 mt-2 border-t">
            <Button className="w-full h-9 rounded-full">accept</Button>
            <Button className="w-full h-9 rounded-full" variant="outline">decline</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
