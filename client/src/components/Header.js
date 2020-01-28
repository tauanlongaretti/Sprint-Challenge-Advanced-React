import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    };

    return(
        <div className="header">
            <h1>Women's World Cup Players</h1>
            <h2>ranked by search interest from Google Trends</h2>
            <div className="dark-mode__toggle">
                <button id="button" data-testid="button" 
                  onClick={toggleMode}
                  className={darkMode ? 'toggle toggled' : 'toggle'}> 
                Change Mode</button>
            </div>
        </div>
    )
}

export default Header;