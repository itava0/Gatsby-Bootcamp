import React from "react"
import Layout from "../components/layout"

const Home = () => {
  // I could pass content dirctly to a component using the props.children.
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Ivan, a full-stack developer living in charlotte NC.</h2>
    </Layout>
  )
}

export default Home
