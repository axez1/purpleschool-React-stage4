import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from 'react';

interface User {
  name: string;
  isLogined: boolean;
}

interface UserContextType {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const loadUser = useCallback(() => {
    try {
      const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const activeUser = (savedUsers as User[]).find((u) => u.isLogined);
      if (activeUser) setUser(activeUser);
    } catch (error) {
      console.error('Error loading user:', error);
      localStorage.removeItem('users');
    }
  }, [user]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const login = useCallback((name: string) => {
    try {
      const savedUsers: User[] = JSON.parse(
        localStorage.getItem('users') || '[]'
      );
      const updatedUsers = savedUsers.map((u) => ({ ...u, isLogined: false }));

      const existingUserIndex = updatedUsers.findIndex((u) => u.name === name);
      const userData: User = { name, isLogined: true };

      if (existingUserIndex >= 0) {
        updatedUsers[existingUserIndex] = userData;
      } else {
        updatedUsers.push(userData);
      }

      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setUser(userData);
    } catch (error) {
      console.error('Login error:', error);
    }
  }, []);

  const logout = useCallback(() => {
    try {
      const savedUsers: User[] = JSON.parse(
        localStorage.getItem('users') || '[]'
      );
      const updatedUsers = savedUsers.map((u) => ({ ...u, isLogined: false }));
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
