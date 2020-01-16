/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const wrapRootElement = ({ element }) => {
  const client = new ApolloClient({
    uri: `https://dev-gatsby-and-wordpress.pantheonsite.io/graphql`,
    fetch,
  })

  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
