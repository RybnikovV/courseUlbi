import { type FC } from 'react';
import { clsNames } from '@/shared/lib';
import { Loader } from '@/shared/uiKit/Loader/Loader';

import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: FC<IPageLoaderProps> = (props) => {
  const { className = '' } = props;

  return (
    <div className={clsNames(cls['page-loader'], {}, [className])}>
      <Loader />
    </div>
  );
};
