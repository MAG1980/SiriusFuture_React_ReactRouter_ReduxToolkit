import { Link } from "react-router-dom";

export const LoginForm = () => {

  return (
    <>
      <form className="flex flex-col">
        <input type="email" placeholder="E-mail" name="email"/>
        <input type="password" placeholder="Пароль" name="password"/>
        <div className="flex flex-row">
          <input className="justify-self-start" type="checkbox" name="rememberMe"/>
          <label htmlFor="rememberMe">Запомнить меня</label>
        </div>
        <button className="bg-primary-accent-color" type="button">Войти</button>
      </form>
      <div className="flex justify-between">
        <Link className="font-sans" to="/forgot-password">Я забыл пароль</Link>
        <Link to="/login-as-trainer">Войти как тренер</Link>
      </div>
    </>
  )
}