import React, { createContext, useContext, useState } from "react";

const SessionContext = createContext<any>(null);

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState(null);

  const signIn = (data: any) => {
    setSession(data);
  };

  const signOut = () => {
    setSession(null);
  };

  return (
    <SessionContext.Provider value={{ session, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
};
