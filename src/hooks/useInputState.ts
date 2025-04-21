import { FieldError } from "react-hook-form";

type InputState = {
    color: string;
    focus: string;
};

const useInputState = (value: string | undefined, error: FieldError | undefined): InputState => {
    if (error) return { color: "accent2", focus: "focus:border-red-700" };
    if (value?.length) return { color: "accent1", focus: "focus:border-blue-600" };
    return { color: "slate-400", focus: "focus:border-slate-800" };
}

export default useInputState;