import { CookieIcon } from "lucide-react";
import { Button } from "./ui/button";
import { FaCodeFork, FaGithub } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";
import { Inspect } from "lucide-react";

export default function Header() {
  return (
    <header className="py-5 px-6 max-w-5xl md:px-14 mx-auto flex items-center justify-between">
      <div>
        <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" asChild className="rounded-xl">
          <a
            className="flex items-center gap-2"
            href="https://github.com/r2hu1/shadcn-cookie-consent/blob/master/README.md"
          >
            <Inspect className="h-4 w-4" />
            Installation
          </a>
        </Button>
        <Button size="sm" variant="secondary" asChild className="rounded-xl">
          <a
            className="flex items-center gap-2"
            href="https://github.com/r2hu1/shadcn-cookie-consent"
          >
            <FaGithub className="h-4 w-4" />
            Repository
          </a>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
