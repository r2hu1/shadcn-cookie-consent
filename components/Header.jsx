import { CookieIcon } from "lucide-react";
import { Button } from "./ui/button";
import { FaCodeFork, FaGithub } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
    return (
        <header className="py-5 px-6 md:px-20 lg:px-32 flex items-center justify-between">
            <div>
                <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
            </div>
            <div className="flex items-center gap-2">
                <Button size="icon" asChild><a href="https://github.com/r2hu1/shadcn-cookie-consent"><FaGithub className="h-4 w-4" /></a></Button>
                <Button size="icon" variant="secondary" asChild><a href="https://github.com/r2hu1/shadcn-cookie-consent/fork"><FaCodeFork className="h-4 w-4" /></a></Button>
                <ModeToggle/>
            </div>
        </header>
    )
}