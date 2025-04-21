import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";
import FormError from "./ui/FormError";
import useInputState from "../hooks/useInputState";
import { useState } from "react";
import PasswordToggle from "./ui/PasswordToggle";

type FormInputProps = {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    type: string;
    placeholder: string;
    register: UseFormRegisterReturn;
    value?: string;
    error?: FieldError;
    showToggle?: boolean;
}

const FormInput = ({ Icon, type, placeholder, register, value, error, showToggle = false }: FormInputProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const state = useInputState(value, error);

    return (
        <>
            <div className="relative group">
                <Icon
                    className={clsx(
                        "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-150",
                        {
                            "text-accent1": state.color === "accent1",
                            "text-accent2": state.color === "accent2",
                            "text-slate-400": state.color === "slate-400",
                            "group-focus-within:text-blue-800": state.color === "accent1",
                            "group-focus-within:text-red-800": state.color === "accent2",
                        }
                    )}
                />
                <input
                    {...register}
                    type={showPassword ? "text" : type}
                    placeholder={placeholder}
                    className={clsx(
                        "pl-10 pr-4 py-2 border rounded-md w-full outline-none",
                        showToggle ? "pr-10" : "pr-4",
                        {
                            "border-accent1": state.color === "accent1",
                            "border-accent2": state.color === "accent2",
                            "border-slate-400": state.color === "slate-400",
                        },
                        state.focus,
                    )}
                />
                {isPassword && showToggle && (
                    <PasswordToggle show={showPassword} toggle={() => setShowPassword((prev) => !prev)} />
                )}
            </div>
            <FormError error={error} />
        </>
    );
};

export default FormInput;
