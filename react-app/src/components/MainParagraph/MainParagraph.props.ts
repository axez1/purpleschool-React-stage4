import { HTMLAttributes, ReactNode } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  text: ReactNode;
  customSize?: ReactNode;
}
