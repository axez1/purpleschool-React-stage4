import { MouseEvent } from 'react';

export interface HeaderProps {
  user: {
    name: string;
    isLogined?: boolean;
    email?: string;
  } | null;
  onLogout: (event: MouseEvent<HTMLAnchorElement>) => void;
}
