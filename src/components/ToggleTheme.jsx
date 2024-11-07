import { useState } from "react";

const ToggleTheme = () => {

    const [isDarktheme, setIsDarkTheme] = useState(false);

    // toggle theme handler
    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    }

  return (
    <>
        <div className={isDarktheme ? "app dark-theme" :"app light-theme" }>
            <div className="card">
                <h2>Theme Toggle Card</h2>
                <p>This Card change color based on the Theme.</p>
                <button className='card-button'onClick={toggleTheme}>{isDarktheme ? "Light" : "Dark"} Theme</button>
            </div>
        </div>
    </>
  )
}

export default ToggleTheme;
