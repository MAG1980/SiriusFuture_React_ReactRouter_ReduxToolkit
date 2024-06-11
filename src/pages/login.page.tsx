import { FC } from 'react';
import { LoginForm } from '@components/LoginForm.tsx';


export const LoginPage: FC = () => {
	return (
		<div className="min-w-full min-h-full flex items-center justify-center">
			<LoginForm />
		</div>
	);
};