import { FC, SyntheticEvent, useState } from 'react';
import { LoginForm } from '@components/LoginForm.tsx';
import styles from './login.page.module.css';


export const LoginPage: FC = () => {
	const [language, setLanguage] = useState<'eng' | 'ru'>('ru');
	const selectLanguage = (e: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.target as HTMLParagraphElement;
		target.dataset.lang === 'eng' ? setLanguage('eng') : setLanguage('ru');
	};
	return (
		<div className="min-w-full min-h-full flex flex-col  items-center justify-center p-2">
			<div className="grow"></div>
			<LoginForm />
			<div className="grow flex items-center justify-center">
				<div className="flex justify-between items-center w-16" onClick={(e) => selectLanguage(e)}>
					<p className={`${styles.language} ${language === 'ru' ? styles['language-active'] : ''}`}	data-lang="ru">RU</p>
					<p className={`${styles.language} ${language === 'eng' ? styles['language-active'] : ''}`} data-lang="eng">EN</p></div>
			</div>
		</div>
	);
};