import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const activeUser = savedUsers.find(u => u.isLogined);
    if (activeUser) setUser(activeUser);
  }, []);

  const login = (name) => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = savedUsers.map(u => ({ ...u, isLogined: false }));

    const existingUser = updatedUsers.find(u => u.name === name);
    const userData = { name, isLogined: true };

    if (existingUser) {
      Object.assign(existingUser, userData);
    } else {
      updatedUsers.push(userData);
    }

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUser(userData);
  };

  const logout = () => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = savedUsers.map(u => ({ ...u, isLogined: false }));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);