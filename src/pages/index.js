import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Projects from "../components/Projects"
import About from "../components/about"
import Skills from "../components/skills"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Education from "../components/Education"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Header></Header>
    <Experience></Experience>
    <Education></Education>
    <Projects></Projects>
    <About></About>
    <Skills></Skills>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
