import React from 'react';
import c from 'classnames';
import s from './typography.module.scss';

type TypographySize = 'm' | 'l';

interface Properties {
  className?: string;
  size?: TypographySize;
  semiBold?: boolean;
  children: string;
}

const Typography: React.FC<Properties> = ({ className, children, size, semiBold }) => (
  <div className={c(s.root, [
    size && s[size],
    semiBold && s.semiBold
  ], className)}>{children}</div>
);

export default Typography;
