import { ChangeEvent } from "react";

interface InputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    className?: string;
    value: string | number;
}

export function InputMeteorologia({ onChange, type, className, value }: InputProps) {

    return (
        <input
            className={className}
            onChange={onChange}
            type={type}
            value={value}
        />
    )
}