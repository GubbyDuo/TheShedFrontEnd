import React, { Children, createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [data, setData] = useState(null);

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
