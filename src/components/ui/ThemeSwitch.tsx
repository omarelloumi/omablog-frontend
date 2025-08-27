import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitch({
                                checked,
                                onCheckedChange,
                            }: { checked: boolean; onCheckedChange: (v: boolean) => void }) {
    return (
        <div className="relative inline-flex items-center">
            <Switch checked={checked} onCheckedChange={onCheckedChange} />
            {/* Icons on the track (left/right) */}
            <Sun  className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 opacity-100 transition-opacity peer-data-[state=checked]:opacity-0" />
            <Moon className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 opacity-0 transition-opacity peer-data-[state=checked]:opacity-100" />
        </div>
    );
}
