import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();

  return <div>{t('главная')}</div>;
};

export default Main;
