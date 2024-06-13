"use client";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

interface CheckboxWithTextProps {
    value: string;
    onClick: (value: string) => void;
    isChecked?: boolean; // Add isChecked prop
}

export function CheckboxWithText({ value, onClick, isChecked }: CheckboxWithTextProps) {
    const handleCheckboxClick = () => {
        onClick(value);
    };

    return (
        <div className="items-top flex space-x-2 mb-2">
            <Checkbox id="terms1" onClick={handleCheckboxClick} checked={isChecked} />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor="terms1"
                    className={`text-sm font-medium leading-none ${isChecked ? 'text-blue-600' : 'text-gray-700'}`}
                >
                    {value}
                </label>
            </div>
        </div>
    );
}
