import React, { FC } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

import { clsNames } from '@/shared/lib';
import cls from './CustomLink.module.scss';

interface ICustomLinkProps extends LinkProps {
	className?: string;
	children: React.ReactNode;
};

export const CustomLink: FC<ICustomLinkProps> = (props) => {
	const { 
		className, 
		children,
		...otherProps
	 } = props;

	return (
		<div >
			<NavLink
				className={
					({isActive}) => {
						return clsNames(cls.customlink, {[cls['customlink_active']]: isActive}, [className])
					}
				}
				{...otherProps}>
				{children}
			</NavLink>
		</div>
	);
};