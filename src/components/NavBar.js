import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const NavLinks = links.map(link => {
    return <a key={link} href = {`#${link}`}>{link}</a>
  })


  return <nav>
            {NavLinks}
         </nav>;
}

export default NavBar;
