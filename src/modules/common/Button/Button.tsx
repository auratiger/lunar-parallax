import { COLORS } from "@constants";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
   outlined?: boolean;
   text: string;
   other?: any;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ text, outlined, ...other }, ref) => {
   const Button = styled.button`

      display: inline-block;
      text-decoration: none;
      font-size: 1.5em;
      padding: 1rem 30px;
      border-radius: 40px;
      background: white;
      color: #2b1055;
      z-index: 9;
      cursor: pointer;
  `;

   return <Button ref={ref} {...other}>{text}</Button>;
})

export default Button;
