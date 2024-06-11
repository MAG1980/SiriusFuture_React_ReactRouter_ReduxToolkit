import { FC } from "react";
import { LoginForm } from "@components/LoginForm.tsx";
import logo from "@assets/logo/Logomark_1_.svg"

export const LoginPage:FC = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-[340px] w-[535px]">
      <img src={logo} alt="logo"/>
      <h1 className="font-sans">Вход в Sirius Future</h1>
      <LoginForm />
    </div>
  )
}