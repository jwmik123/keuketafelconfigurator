import { createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [legs, setLegs] = useState(0);
  const [legsColor, setLegsColor] = useState("#777777");
  const [tableWidth, setTableWidth] = useState(100);

  const [closetWidth, setClosetWidth] = useState(60);

  return (
    <ConfiguratorContext.Provider
      value={{
        legs,
        setLegs,
        legsColor,
        setLegsColor,
        tableWidth,
        setTableWidth,
        closetWidth,
        setClosetWidth,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
