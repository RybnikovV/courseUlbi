import { FC } from 'react';

import { clsNames } from '@/shared/lib';
import cls from './Navbar.module.scss';

import { CustomLink } from '@/shared/uiKit';

import { routerPaths } from '@/shared/config/routerPaths/routerPaths';
import { useTranslation } from 'react-i18next';

interface INavbarProps  {
	className?: string;
	children?: React.ReactNode;
};

export const Navbar: FC<INavbarProps> = (props) => {
	const { 
		className,
		children
	 } = props;
	const { t } = useTranslation();

	return (
		<div className={clsNames(cls.navbar, {}, [className])}>
			<div>
				{children}
			</div>
			<div className={cls.navbar__links}>
				{
					Object.values(routerPaths).map(routerPath => {
						return <CustomLink 
							className={cls['navbar__link-item']}
							to={routerPath.path}>
								{t(routerPath.children)}
							</CustomLink>
					})
				}
			</div>
		</div>
	);
};