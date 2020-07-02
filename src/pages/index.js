import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={clsx("button button--outline button--secondary button--lg", styles.getStarted)} to={useBaseUrl("docs/")}>
              <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/logo/logo.png" alt="JavaScript Boilerplate" width="150" />
            </Link>
          </div>
        </div>
      </header>
      <main>
        <p className={styles.logos} align="center">
          <Link to={useBaseUrl("docs/")}>
            <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/spa.png" alt="JavaScript Boilerplate" width="150" />
          </Link>
          <Link to={useBaseUrl("docs/vue")}>
            <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/vue.png" alt="Vue Boilerplate" width="150" />
          </Link>
          <Link to={useBaseUrl("docs/react")}>
            <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/react.png" alt="React Boilerplate" width="150" />
          </Link>
          <Link to={useBaseUrl("docs/ts")}>
            <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/ts.png" alt="TypeScript Boilerplate" width="150" />
          </Link>
          <Link to={useBaseUrl("docs/phaser")}>
            <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/phaser.png" alt="Phaser Boilerplate" width="150" />
          </Link>
          <Link to={useBaseUrl("docs/cypress")}>
            <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/cypress.png" alt="Cypress Boilerplate" width="150" />
          </Link>
          <Link to={useBaseUrl("docs/nuxt")}>
            <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/nuxt.png" alt="Nuxt Boilerplate" width="150" />
          </Link>
          <Link to={useBaseUrl("docs/node-ts")}>
            <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/nodets.png" alt="Node and TS Boilerplate" width="150" />
          </Link>
        </p>
      </main>
    </Layout>
  );
}

export default Home;
