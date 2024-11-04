"use client";
import { createContext, useContext, ReactNode } from "react";
import { IUser } from "../models/userModel";

type UserContextType = IUser;

const UserContext = createContext<UserContextType | null>(null);

function UserProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: UserContextType;
}) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context as NonNullable<typeof context>;
}

export { UserProvider, UserContext, useUser };
export type { UserContextType };
