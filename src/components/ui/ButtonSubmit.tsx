type SubmitType = {
    isSubmitting: boolean
}

const ButtonSubmit = ({ isSubmitting }: SubmitType) => {
    return (
        <button disabled={isSubmitting} type="submit" className={`${isSubmitting ? "bg-slate-500" : "bg-accent1 hover:bg-accent1-hover"} p-3 rounded-xl text-white cursor-pointer transition-colors duration-150 `}>
            {isSubmitting ? "Loading..." : "Submit"}</button>
    )
}

export default ButtonSubmit