import { ChangeEvent, forwardRef } from "react";

interface InputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    className?: string;
    // ref: UseFormRegisterReturn<string>;
}

export function InputMeteorologia({ onChange, type, className, }: InputProps) {

    return (
        <input
            className={className}
            onChange={onChange}
            type={type}
        />
    )
}