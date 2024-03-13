import { FC } from 'react';

import { clsNames } from '@/shared/lib';
import cls from './Navbar.module.scss';

import { CustomLink } from '@/shared/uiKit';

interface INavbarProps  {
	className?: string;
	children?: React.ReactNode;
	changeTheme: () => void;
};

export const Navbar: FC<INavbarProps> = (props) => {
	const { 
		className,
		changeTheme,
	 } = props;

	return (
		<div className={clsNames(cls.navbar, {}, [className])}>
			<button onClick={changeTheme}>toggleTheme</button>
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