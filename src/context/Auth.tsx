import { useContext, createContext, FC, useState } from "react";

interface User {
  userName: string;
  password: string;
  isAuthenticated: boolean;
}

interface AuthContextValue {
  user: User;
  login: (userName: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: {
    userName: "",
    password: "",
    isAuthenticated: false,
  },
  login: () => {},
  logout: () => {},
});

export const AuthProvider: FC = ({ children }: any) => {
  const [user, setUser] = useState<User>({
    userName: "",
    password: "",
    isAuthenticated: false,
  });

  const login = (userName: string, password: string) => {
    setUser({
      userName,
      password,
      isAuthenticated: true,
    });
  };
  const logout = () => {
    setUser({
      userName: "",
      password: "",
      isAuthenticated: false,
    });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
