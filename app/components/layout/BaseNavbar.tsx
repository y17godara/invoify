import { useMemo } from "react";

// ShadCn
import { Card } from "@/components/ui/card";

// Components
import { DevDebug, LanguageSelector, ThemeSwitcher } from "@/app/components";

const BaseNavbar = () => {
    const devEnv = useMemo(() => {
        return process.env.NODE_ENV === "development";
    }, []);

    return (
        <header className="lg:container z-[99]">
            <nav>
                <Card className="flex flex-row items-center justify-between w-full gap-5 px-5">
            <DevDebug />
                    <ThemeSwitcher />
                </Card>
            </nav>
        </header>
    );
};

export default BaseNavbar;
