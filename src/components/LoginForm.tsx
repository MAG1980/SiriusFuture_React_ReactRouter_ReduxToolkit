import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import logo from '@assets/logo/Logomark_1_.svg';

export const LoginForm = () => {

	return (
		<div className="flex-grow flex items-center justify-center">
			<div className="w-[340px] h-[535px] flex flex-col justify-between">
				<div className="flex justify-center"><img className="w-[80px]" src={logo} alt="logo" /></div>
				<div className="h-[423px] grid gap-y-8">
					<h1 className="text-[40px] leading-[35px]">Вход в Sirius Future</h1>
					<div className="h-[372px]">
						<div className="h-[250px]">
							<form className="h-[124px] grid gap-y-4">
								<input className={styles.input} type="email" placeholder="E-mail" name="email" />
								<input className={styles.input} type="password" placeholder="Пароль" name="password" />
								<div className="flex flex-row">
									<input type="checkbox" name="rememberMe" />
									<label htmlFor="rememberMe">Запомнить меня</label>
								</div>
							</form>
							<div className="h-[94px] flex flex-col justify-between">
								<button className="text-fifth bg-primary-accent py-[10px] px-[86px] rounded-[30px]" type="button">Войти
								</button>
								<div className="flex justify-between">
									<Link className={`${styles.link} ${styles.middle}`} to="/forgot-password">Я забыл пароль</Link>
									<Link className={`${styles.link} ${styles.middle}`} to="/login-as-trainer">Войти как тренер</Link>
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-center items-center">
							<p className="leading-[21.6px]">Нет аккаунта? </p>
							<Link className={`${styles.link} ${styles.bottom}`} to="/register">Зарегистрироваться</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};