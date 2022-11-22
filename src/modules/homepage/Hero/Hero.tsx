import React, { useEffect, useRef } from "react";

import Stars from "../../../images/stars.png";
import Moon from "../../../images/moon.png";
import MountainsBehind from "../../../images/mountains_behind.png";
import MountainsFront from "../../../images/mountains_front.png";

import styled from 'styled-components';
import { Button } from "@common";

const Section = () => {

   const stars = useRef<any>(null);
   const moon = useRef<any>(null);
   const mountainsBehind = useRef<any>(null);
   const mountainsFront = useRef<any>(null);
   const heading = useRef<any>(null);
   const btn = useRef<any>(null);

   useEffect(() => {

      window.addEventListener("scroll", () => {
         const value = window.scrollY;

         stars.current.style.left = value * 0.25 + "px";

         moon.current.style.top = value * 1.05 + "px";
         moon.current.style.left = value * 0.5 + "px";

         mountainsBehind.current.style.top = value * 0.5 + "px";
         mountainsFront.current.style.top = value * 0 + "px";

         heading.current.style.opacity = 1;
         heading.current.style.marginRight = value * 4 + "px";
         heading.current.style.marginTop = value * .5 + "px";

         btn.current.style.marginTop = value * 2.5 + "px";
      });

   }, []);

   return (
      <HeroWrapper>
         <img ref={stars} className="parallax" src={Stars} id="stars" alt="stars" />
         <img ref={moon} className="parallax" src={Moon} id="moon" alt="moon" />
         <img
            ref={mountainsBehind}
            className="parallax"
            src={MountainsBehind}
            id="mountains_behind"
            alt="mountains behind"
         />

         <Heading ref={heading}>Moon Light</Heading>

         <Button ref={btn} text="Scroll down" />

         <img
            ref={mountainsFront}
            className="parallax"
            src={MountainsFront}
            id="mountains_front"
            alt="mountains front"
         />
      </HeroWrapper>
   );
};

const HeroWrapper = styled.section`

   position: relative;
   overflow: hidden;
   width: 100%;
   height: 100vh;
   padding: 100px;

   display: flex;
   justify-content: center;
   align-items: center;

   &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, #1c0522, 15%, transparent);
      z-index: 1000;
   }

   .parallax {
      position: absolute;
      width: 100%;
      inset: 0;
      object-fit: cover;
      pointer-events: none;
   }

   #moon {
      mix-blend-mode: screen;
   }

   #mountains_front {
      z-index: 10;
   }
`

const Heading = styled.h1`
   opacity: 0;
   position: absolute;
   right: -20%;
   top: 40%;
   color: white;
   white-space: nowrap;
   font-size: 7.5vw;
   z-index: 9;
`

export default Section;
