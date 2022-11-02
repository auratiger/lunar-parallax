import React from "react"
import type { HeadFC } from "gatsby"
import { App, Header } from "@common"

const IndexPage = () => {
   return (
      <App>
         <Header />
         <main></main>
      </App>
   )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
