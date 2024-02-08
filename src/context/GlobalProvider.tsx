// Need to make editing state global
// to the entire app so user can click
// anywhere to exit

import React from "react";

interface NoteProviderProps {
  children: React.ReactNode;
}
interface NoteContextType {
  isEditting: boolean;
  setIsEditting: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = React.createContext<NoteContextType>(
  {} as NoteContextType
);

function GlobalProvider({ children }: NoteProviderProps) {
  // Editting state is global to allow user to only edit one thing at a time
  const [isEditting, setIsEditting] = React.useState(false);

  // Enter and escape keys disable the editing state
  React.useEffect(
    function () {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === "Escape") {
          setIsEditting(false);
        }
      });
    },
    [setIsEditting]
  );

  const value = {
    isEditting,
    setIsEditting,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };
