import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Hello! My name is Srujan Bethi, and I'm a Full-Stack JavaScript Software Engineer based in Boulder, Colorado.
          </h2>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}
          <h3 id="dynamic-styles">Technologies</h3>
          <p>
            My programming language of choice is JavaScript for its flexibility, widespread use in web development,
            and simplicity. I use JS, HTML/CSS, and React for my Frontend work, and Node/Express for Backend work. 
            I love being able to build complete Full-Stack applications with only one programming language. I'm 
            currently working on learning React Native for mobile development. I'm also working on learning Python
            as my second language.
          </p>
          <p>
            <h4>Complete list of technologies I've worked with: </h4>
            <ul>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/javascript" target="_blank">JavaScript</a></li>
              <li><a href="https://www.typescriptlang.org/docs/" target="_blank">TypeScript</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML</a></li>
              <li><a href="https://css-tricks.com/" target="_blank">CSS</a></li>
              <li><a href="https://reactjs.org/" target="_blank">React</a></li>
              <li><a href="https://redux.js.org/" target="_blank">Redux</a></li>
              <li><a href="https://nodejs.org/en/docs/" target="_blank">Node</a></li>
              <li><a href="https://expressjs.com/" target="_blank">Express</a></li>
              <li><a href="https://www.w3schools.com/sql/sql_quickref.asp" target="_blank">SQL</a></li>
              <li><a href="https://dev.mysql.com/doc/" target="_blank">MySQL</a></li>
              <li><a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a></li>
              <li><a href="https://www.mongodb.com/" target="_blank">MongoDB</a></li>
              <li><a href="https://redis.io/documentation" target="_blank">Redis</a></li>
              <li><a href="https://docs.github.com/en" target="_blank">Git</a></li>
              <li><a href="https://docs.docker.com/" target="_blank">Docker</a></li>
              <li><a href="https://restfulapi.net/" target="_blank">REST</a></li>
              <li><a href="https://circleci.com/" target="_blank">CircleCI</a></li>
              <li><a href="https://docs.aws.amazon.com/index.html?nc2=h_ql_doc_do" target="_blank">Amazon Web Services</a></li>
              <li><a href="https://sass-lang.com/documentation" target="_blank">SASS(CSS)</a></li>
              <li><a href="https://styled-components.com/docs" target="_blank">Styled Components</a></li>
              <li><a href="https://api.jquery.com/" target="_blank">jQuery</a></li>
              <li><a href="https://jestjs.io/docs/en/getting-started" target="_blank">Jest(React Testing Suite)</a></li>
              <li><a href="https://enzymejs.github.io/enzyme/" target="_blank">Enzyme(React Testing Suite)</a></li>
            </ul>
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
