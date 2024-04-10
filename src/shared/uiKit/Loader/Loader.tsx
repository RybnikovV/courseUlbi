import { type FC } from 'react';

import cls from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader: FC<ILoaderProps> = (props) => {
  return <div className={cls.loader}></div>;
};
