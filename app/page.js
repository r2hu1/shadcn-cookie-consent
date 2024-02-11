import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="px-6 md:px-20 lg:px-32 py-20">
      <div className="sm:max-w-2xl mx-auto text-center grid gap-2">
        <h1 className="text-3xl md:text-4xl font-bold">Shadcn Cookie Consent</h1>
        <p className="text-base md:text-lg opacity-80 font-normal">Beautifully designed, customizable cookie consent for web built on top of shadcn-ui!</p>
        <div className="flex mt-4 items-center justify-center gap-2">
          <Button>Live Demo</Button>
          <Button variant="secondary">Contribute</Button>
        </div>
      </div>
    </main>
  );
}