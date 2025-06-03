import { SubmitHandler, useForm } from "react-hook-form";
import EmailIcon from "../assets/email-icon.svg?react"
import PasswordIcon from "../assets/password-icon.svg?react"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormError from "../components/ui/FormError";
import ButtonSubmit from "../components/ui/ButtonSubmit";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/providers/AuthContext";
import {CredentialResponse, GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";


const schema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, { message: "Password must have at least 8 characters" }),
});

type FormFields = z.infer<typeof schema>;
export const LoginForm = () => {
    const { register, handleSubmit, setError, watch, reset, formState: { errors, isSubmitting } } = useForm<FormFields>({
        defaultValues: {
            // email: "text@gmail.com",
        },
        resolver: zodResolver(schema),
    });
    const emailValue = watch("email");
    const passwordValue = watch("password");

    const navigate = useNavigate();

    const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID;

    const { handleLogin, handleLoginViaGoogle } = useAuth();

    const handleGoogleLogin = async (response: CredentialResponse) => {
        if(!response.credential){
            setError("root", { message: "Error login via google" });
            return;
        }

        const idToken = response.credential;
        try {
            await handleLoginViaGoogle(idToken);
            reset();
            navigate("/");
        } catch {
            setError("root", { message: "Error login via google" });
        }
    };

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
          await handleLogin(data.email, data.password);
          reset();
          navigate("/");
        } catch {
          setError("root", { message: "Invalid email or password" });
        }
      };

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



            <ButtonSubmit isSubmitting={isSubmitting} btnText="Log in" />
            <FormError error={errors.root} />

            <GoogleOAuthProvider clientId={clientId}>
                <div>
                    <GoogleLogin onSuccess={handleGoogleLogin}
                                 onError={() => {setError("root", { message: "Error login via google" });}}/>
                </div>
            </GoogleOAuthProvider>
        </form>
    )
}