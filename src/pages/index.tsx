import Header from "../components/Header";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  if (ExecutionEnvironment.canUseDOM) {
    //@ts-ignore
    if (window.netlifyIdentity) {
      //@ts-ignore
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          //@ts-ignore
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }
  return (
    <>
      <header className={clsx("hero hero--primary")}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Docusaurus Tutorial - 5min ⏱️
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <h1>test</h1>
      </main>
    </Layout>
  );
}
