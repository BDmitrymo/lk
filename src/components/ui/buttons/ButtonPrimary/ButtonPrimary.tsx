import React from 'react';
import {Button, Carousel} from 'antd';
import './ButtonPrimary.scss';

export const ButtonPrimary = ({banners}: { banners: React.ReactNode[] }) => {
  return (
    <Button type="primary">Primary Button</Button>
  );
};