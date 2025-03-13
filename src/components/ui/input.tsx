import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return (
        <div className="flex flex-col">
            {label && <label className="text-gray-400 mb-1">{label}</label>}
            <input
                className="bg-white/5 text-white p-3 rounded-md border border-white/20 focus:outline-none"
                {...props}
            />
        </div>
    );
};

export default Input;