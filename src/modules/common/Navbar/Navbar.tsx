import { COLORS } from "@constants";
import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';

const links = [
   {
      name: "home",
      id: "home",
   },
   {
      name: "about",
      id: "about",
   },
   {
      name: "work",
      id: "work",
   },
   {
      name: "contact",
      id: "contact",
   },
];

const Header = () => {
   return (
      <HeaderWrapper>
         <Link to="/" className="logo">
            Lunar
         </Link>

         <nav>
            <ul className="nav-menu">
               {links.map((link) => (
                  <li className="nav-item">
                     <a href="/" className="nav-link">
                        {link.name}
                     </a>
                  </li>
               ))}
            </ul>
         </nav>

      </HeaderWrapper>
   );
};

const HeaderWrapper = styled.header`

   position: absolute;
   width: 100%;
   padding: 2rem 8rem;

   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   .logo {
      color: ${COLORS.primaryText};
      font-weight: 700;
      text-decoration: none;
      font-size: 2em;
      text-transform: uppercase;
      letter-spacing: 2px;
   }

   .nav-menu {
      display: flex;
      align-items: center;
      z-index: 1000;
      list-style: none;
   }

   .nav-item {
      margin-left: 3rem;
      list-style: none;
   }

   .nav-link {
      text-decoration: none;
      text-transform: capitalize;
      cursor: pointer;
      padding: 6px 15px;
      color: ${COLORS.primaryText};
      border-radius: 20px;
      z-index: 1000;
   }

   li.nav-link:hover {
      background: white;
      color: ${COLORS.primary};
   }

   .nav-link.active {
      background: white;
      color: ${COLORS.primary};
      z-index: 1000;
   }
`

export default Header;
