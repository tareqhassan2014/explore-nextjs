type InputProps = {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
};

const Input = ({ label, name, placeholder, type = "text" }: InputProps) => {
    return (
        <div>
            <label htmlFor={name} className="mb-1 inline-block">
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full border p-2"
            />
        </div>
    );
};

export default Input;
