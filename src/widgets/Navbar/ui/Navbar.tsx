import { FC } from 'react';

import { clsNames } from '@/shared/lib';
import cls from './Navbar.module.scss';

import { CustomLink } from '@/shared/uiKit';

interface INavbarProps  {
	className?: string;
	children?: React.ReactNode;
};

export const Navbar: FC<INavbarProps> = (props) => {
	const { 
		className,
		children
	 } = props;

	return (
		<div className={clsNames(cls.navbar, {}, [className])}>
			<div>
				{children}
			</div>
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