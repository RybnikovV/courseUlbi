import { type FC } from 'react';
import { clsNames } from '@/shared/lib';

// import cls from './404.module.scss';
import { useTranslation } from 'react-i18next';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={clsNames('', {})}>
      <div>{t('404 страница не найдена')}</div>
    </div>
  );
};
