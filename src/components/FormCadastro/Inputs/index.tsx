interface InputProps {
    onChange: (e: any) => void;
    type: string;
    className?: string;
}

export function InputMeteorologia({ onChange, type, className }: InputProps) {

    return (
        <input
            className={className}
            onChange={onChange}
            type={type}
        />
    )
}