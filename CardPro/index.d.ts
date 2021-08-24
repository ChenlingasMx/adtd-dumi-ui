import React from 'react';
import { CardProps } from 'antd';
import './index.css';
interface CardProProps extends CardProps {
    children?: React.ReactNode;
    className?: string;
}
declare const CardPro: (props: CardProProps) => JSX.Element;
export default CardPro;
