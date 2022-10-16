import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <main className="w-screen absolute top-0 bg-transparent z-30">
      <Head>
        <title>{title || "VeganTimes - Plant based diet planner"}</title>
        <meta
          property="og:title"
          content={title || "VeganTimes - Plant based diet planner"}
          key="title"
        />
        <meta
          name="description"
          content="Tasty diet for you according to preferences. Personalized 30-day meal plan to lose weight. Don't start strict diets"
        />
        <meta
          property="og:description"
          content="Tasty diet for you according to preferences. Personalized 30-day meal plan to lose weight. Don't start strict diets"
        />
        <meta property="og:title" content="VeganTimes - Plant based diet planner" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vegantimes.app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      {children}
    </main>
  )
}

export default Layout
