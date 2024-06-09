"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxWithTextProps {
    value: string;
    onClick: (value: string) => void;
}

export function CheckboxWithText({ value, onClick }: CheckboxWithTextProps) {
    const handleCheckboxClick = () => {
        onClick(value);
    };

    return (
        <div className="items-top flex space-x-2 mb-2">
            <Checkbox id="terms1" onClick={handleCheckboxClick} />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {value}
                </label>
            </div>
        </div>
    );
}
