import { FC, ButtonHTMLAttributes } from 'react';
import { clsNames } from '@/shared/lib';

import cls from './Button.module.scss';

export const enum EButtonTheme {
	PRIMARY = 'btn_primary',
	SECONDARY = 'btn_secondary',
	TEXT = 'btn_text'
};

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string;
	theme?: EButtonTheme;
};

export const Button: FC<IButtonProps> = (props) => {
	const { 
		className, 
		children,
		theme = '',
		...otherProps
	 } = props;

	return (
		<button
			className={clsNames(cls.btn, {}, [className, cls[theme]])}
			{...otherProps}>
			{children}
		</button>
	);
};