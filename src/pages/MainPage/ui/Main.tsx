import { useTranslation } from 'react-i18next'

const Main = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div>{t('главная')}</div>
  )
}

export default Main