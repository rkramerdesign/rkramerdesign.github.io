import React from 'react';
import { Button } from 'carbon-components-react';

export default {
  title: 'Carbon/Buttons',
  component: Button,
};

export const Default = () => <Button>Default</Button>;
export const Primary = () => <Button kind="primary">Primary</Button>;
export const Secondary = () => <Button kind="secondary">Secondary</Button>;
export const Danger = () => <Button kind="danger">Danger</Button>; 
export const Ghost = () => <Button kind="ghost">Ghost</Button>;
export const Link = () => <Button kind="link">Link</Button>;
