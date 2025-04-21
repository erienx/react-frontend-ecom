import { Link } from "react-router-dom"
import AuthHeader from "../components/ui/AuthHeader"
import RegisterForm from "../components/RegisterForm"

const RegisterPage = () => {
  return (
    <>
      <AuthHeader text1="Let's get started" text2="Create a new account" />
      <RegisterForm />
      <p className="text-dark mt-4 font-light">Already have an account?
        <Link to='/login' className="text-accent1 hover:text-accent1-hover font-semibold"> Login</Link></p>
    </>
  )
}

export default RegisterPage