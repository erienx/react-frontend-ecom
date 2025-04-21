
type FormType = {
    error?: { message?: string };
  };

const FormError = ({ error }: FormType) => {
    return (
        error && <div className="text-red-500">{error.message}</div>
    )
}

export default FormError