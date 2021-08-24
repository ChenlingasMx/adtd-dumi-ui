import React from 'react';
import classNames from 'classnames';
import { Card, CardProps } from 'antd';
import './index.css';

interface CardProProps extends CardProps {
  children?: React.ReactNode;
  className?: string;
}
const CardPro = (props: CardProProps) => {
  const { children, className, ...otherProps } = props;
  return (
    <Card className={classNames(className, 'antdp-KCardPro')} {...otherProps}>
      {children}
    </Card>
  );
};

export default CardPro;
