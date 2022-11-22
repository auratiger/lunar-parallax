import React from "react"
import type { HeadFC } from "gatsby"
import { App, Header } from "@common"
import styled from 'styled-components';
import { Hero } from "@homepage";

const IndexPage = () => {
   return (
      <App>
         <Header />
         <Main>
            <Hero />
            <section className="fill"></section>
         </Main>
      </App>
   )
}

export default IndexPage

const Main = styled.main`
   .fill {
      height: 100vh;
   }

`

export const Head: HeadFC = () => <title>Home Page</title>
