import { MouseEvent } from 'react';

export interface NavHeaderProps {
  user: {
    name: string;
    isLogined?: boolean;
    email?: string;
  } | null;
  onLogout: (event: MouseEvent<HTMLAnchorElement>) => void;
}
