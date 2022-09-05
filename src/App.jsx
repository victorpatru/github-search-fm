/* 
Your users should be able to:

[X] View the optimal layout for the app depending on their device's screen size
[] See hover states for all interactive elements on the page
[] Search for GitHub users by their username
[] See relevant user information based on their search
[X] Switch between light and dark themes
[] **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Expected behaviour

[] On first load, show the profile information for Octocat.
[] Display an error message (as shown in the design) if no user is found when a new search is made.
[] If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
[] If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
[] If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
[] Website, twitter, and company information should all be links to those resaources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.

*/

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Triggering Dark / Light Mode
    if (document.querySelector(":root").classList.contains("light")) {
      document.querySelector(":root").classList.add("dark");
      document.querySelector(":root").classList.remove("light");
    } else if (document.querySelector(":root").classList.contains("dark")) {
      document.querySelector(":root").classList.add("light");
      document.querySelector(":root").classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-lightGrayishBlue text-monospace dark:bg-darkDarkBlue">
      <section className="max-w-4xl mx-20">
        <Header handleThemeChange={handleThemeChange} theme={theme} />
        <Search />
        <Card />
      </section>
    </div>
  );
}

export default App;
