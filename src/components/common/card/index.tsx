import React from 'react';
import c from 'classnames';
import s from './card.module.scss';

interface Properties {
  className?: string;
  stretch?: boolean;
}

const Card: React.FC<Properties> = ({ className, stretch, children }) => (
  <div className={c(s.root, className, { [s.stretch]: stretch })}>
    {children}
  </div>
);

export default Card;
