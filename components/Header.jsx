import { Button } from "./ui/button";
import { FaCodeFork, FaGithub } from "react-icons/fa6";

export default function Header() {
    return (
        <header className="py-5 px-6 md:px-20 lg:px-32 flex items-center justify-between">
            <div>

            </div>
            <div className="flex items-center gap-2">
                <Button size="icon" asChild><a href="https://github.com/r2hu1/shadcn-cookie-consent"><FaGithub className="h-[1.1rem] w-[1.1rem]"/></a></Button>
                <Button size="icon" variant="secondary" asChild><a href="https://github.com/r2hu1/shadcn-cookie-consent/fork"><FaCodeFork className="h-[1.1rem] w-[1.1rem]"/></a></Button>
            </div>
        </header>
    )
}