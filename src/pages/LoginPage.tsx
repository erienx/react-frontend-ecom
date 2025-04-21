import { SubmitHandler, useForm } from "react-hook-form";
import EmailIcon from "../assets/email-icon.svg?react"
import PasswordIcon from "../assets/password-icon.svg?react"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormError from "../components/ui/FormError";
import ButtonSubmit from "../components/ui/ButtonSubmit";
import FormInput from "../components/FormInput";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;


const LoginPage = () => {
    const { register, handleSubmit, setError, watch, reset, formState: { errors, isSubmitting } } = useForm<FormFields>({
        defaultValues: {
            // email: "text@gmail.com",
        },
        resolver: zodResolver(schema),
    });
    const emailValue = watch("email");
    const passwordValue = watch("password");


    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            // request to backend here
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);


            reset(); //if successful
        }
        catch {
            setError("root", { message: "Given email is already taken", });
        }
    }

    return (
        <form className="flex flex-col gap-y-3 rounded-2xl min-w-[200px] xs:min-w-[400px] text-blue" onSubmit={handleSubmit(onSubmit)}>

            <FormInput
                Icon={EmailIcon}
                type="text"
                placeholder="Email"
                register={register("email")}
                value={emailValue}
                error={errors.email}
            />
            <FormInput
                Icon={PasswordIcon}
                type="password"
                placeholder="Password"
                register={register("password")}
                value={passwordValue}
                error={errors.password}
                showToggle
            />



            <ButtonSubmit isSubmitting={isSubmitting} />
            <FormError error={errors.root} />
        </form>
    )
}

export default LoginPage