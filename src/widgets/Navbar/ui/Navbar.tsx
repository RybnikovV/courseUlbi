import { FC } from 'react';

import { clsNames } from '@/shared/lib';
import cls from './Navbar.module.scss';

import IconThemeDark from '@/shared/assets/svg/iconThemeDark.svg';
import IconThemeLight from '@/shared/assets/svg/iconThemeLight.svg';

import { EThemes } from '@/shared/config/theme';

import { CustomLink, Button, EButtonTheme } from '@/shared/uiKit';

interface INavbarProps  {
	className?: string;
	children?: React.ReactNode;
	theme: EThemes;
	changeTheme: () => void;
};

export const Navbar: FC<INavbarProps> = (props) => {
	const { 
		className,
		changeTheme,
		theme
	 } = props;

	return (
		<div className={clsNames(cls.navbar, {}, [className])}>
			<Button onClick={changeTheme} theme={EButtonTheme.TEXT}>
			 {EThemes.DARK === theme ? <IconThemeDark/> : <IconThemeLight/>}
			</Button>
			<div className={cls.navbar__links}>
				<CustomLink to={'/'} className={cls['navbar__link-item']}>
					Главная
				</CustomLink>
				<CustomLink to={'/about'} className={cls['navbar__link-item']}>
					О нас
				</CustomLink>
			</div>
		</div>
	);
};