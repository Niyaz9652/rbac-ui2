import React, { createContext, useContext, useState } from 'react';

const RBACContext = createContext();

export const RBACProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <RBACContext.Provider value={{ roles, setRoles, users, setUsers }}>
      {children}
    </RBACContext.Provider>
  );
};

export const useRBAC = () => {
  return useContext(RBACContext);
};
