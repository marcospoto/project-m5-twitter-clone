import React, { useEffect, useContext, createContext, useState } from "react";

export const CurrentUserContext = createContext(null);

export const useCurrentUser = () => {
  return useContext(CurrentUserContext);
};

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [status, setStatus] = React.useState("loading");
  const profileHandle = "treasurymog";

  // Fetch the user data from the API (/me/profile)
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`

  useEffect(() => {
    fetch(`/api/${profileHandle}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.profile);
        setStatus("idle");
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status, setStatus }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
