"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";

function Nav() {
  const [isMenuopen, setIsMenuopen] = useState(false);

  function toggle() {
    setIsMenuopen(!isMenuopen);
  }
  useEffect(() => {
    const sidebar = document.querySelector(".nav2") as HTMLElement;
    if (sidebar) {
      if (isMenuopen) {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
    }
  }, [isMenuopen]);

  return (
    <div style={{height:"50px"}}>
      <div  className="main">
        <h1 id="heading">Portfolio</h1>

        {/* Nav 1 */}

        <ul className="nav1">
          <li>
            <Link href={"/"} className="logo">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="logo">
              About
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="logo">
              Contact
            </Link>
          </li>
        </ul>

        {/* Nav 1 */}

        <ul className="nav2">
          <li>
            <Link href={"/"} className="logo">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="logo">
              About
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="logo">
              Contact
            </Link>
          </li>
        </ul>

        {/* menu icon */}
        <li onClick={toggle} id="menu-icon">
          <CiMenuFries />
        </li>
      </div>
    </div>
  );
}

export default Nav;
