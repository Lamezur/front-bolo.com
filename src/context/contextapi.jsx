import React, { createContext, useState, useEffect } from "react";

const defaultState = {
    mode: "light",
    setMode: () => { },
};

export const Context = createContext(defaultState);

export const AppContextProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light";
        } 
        return "light";
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const queryParams = new URLSearchParams(window.location.search);
            const themeQueryParam = queryParams.get("theme");
            
            if (themeQueryParam === "2") {
                setMode("dark");
            } else if (themeQueryParam === "1") {
                setMode("light");
            }
        }
    }, []);

    useEffect(() => {
        document.querySelector("body")?.setAttribute("class", mode === "dark" ? "layout-dark" : "layout-light");
        localStorage.setItem("theme", mode);
    }, [mode]); 

    const contextValue = {
        mode,
        setMode,
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
