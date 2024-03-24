import React, { FC, useState } from 'react';
import { clsNames } from '@/shared/lib';

import { Button, EButtonTheme } from '@/shared/uiKit';

import { EThemes, useTheme } from '@/shared/config/theme';

import IconThemeDark from '@/shared/assets/svg/iconThemeDark.svg';
import IconThemeLight from '@/shared/assets/svg/iconThemeLight.svg';

import { LangSwitcher } from '@/features/LangSwitcher';

import cls from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';

interface ISidebarProps {
	className?: string;
	children?: React.ReactNode;
};

export const Sidebar: FC<ISidebarProps> = (props) => {
	const { 
		className, 
		children,
		...otherProps
	 } = props;
	const [isSidebarOpened, setSidebarOpened] = useState(false);
	const { theme, changeTheme } = useTheme();
	const { t } = useTranslation();

	const onToggle = () => {
		setSidebarOpened(isSidebarOpened => !isSidebarOpened);
	}
	
	return (
		<div
			className={clsNames(cls.sidebar, {[cls.sidebar_opened]: isSidebarOpened}, [className])}
			{...otherProps}>
				<div>
					<Button 
						onClick={onToggle}
						theme={EButtonTheme.PRIMARY}>
							{isSidebarOpened ? t('закрыть') : t('открыть')}
					</Button>
					{children}
				</div>
				<div className={cls.sidebar__controllers}>
					<Button onClick={changeTheme} theme={EButtonTheme.TEXT}>
						{EThemes.DARK === theme ? <IconThemeDark/> : <IconThemeLight/>}
					</Button>
					<LangSwitcher/>
				</div>
		</div>
	);
};