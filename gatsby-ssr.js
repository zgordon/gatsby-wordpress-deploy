/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
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
