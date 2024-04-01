import { type FC } from 'react';
import { clsNames } from '@/shared/lib';
import { Button, EButtonTheme } from '@/shared/uiKit';
import { useTranslation } from 'react-i18next';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = (props) => {
  const { className = '' } = props;
  const { t, i18n } = useTranslation();

  const onTranslateToggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    console.log(
      'asdfffffffffffffffffffffffffffffsadffffffffffffffffffffffffffffdassssfasdfasdfasdfasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    );
  };

  return (
    <Button
      theme={EButtonTheme.TEXT}
      className={clsNames('cls.lang__switcher', {}, [className])}
      onClick={onTranslateToggle}
    >
      {t('язык')}
    </Button>
  );
};
