export interface User {
  name: string;
  isLogined: boolean;
}

export type Item = User;

export interface HeaderProps {
  user: User | null;
  onLogout: () => void;
}

export interface LoginFormProps {
  onSubmit: (name: string) => void;
}
