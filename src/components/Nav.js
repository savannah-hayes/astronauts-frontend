import React from "react";

// Active Astronauts, Management Astronauts, Former Astronauts

const navCategories = ["Astronaut Homepage", "Search Astronauts", "Astronauts by Status", "Astronauts by Year"];

const Nav = () => {
  return (
    <aside>
      <ul>
        {navCategories.map((category) => (
          <div key={category}>
            <li>{category}</li>
          </div>
        ))}
      </ul>
    </aside>
  );
};

export default Nav;