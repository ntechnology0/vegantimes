import styled from "styled-components"
import dynamic from "next/dynamic"
import { BlitzPage } from "@blitzjs/next"
import React from "react"

const Layout = dynamic(() => import("@app/core/layouts/Layout"))

const CategoriesNewStyled = styled.div`
  .content {
    &__block {
      min-height: calc(100vh - 52px);
      max-height: calc(100vh - 52px);
      height: calc(100vh - 52px);
    }
  }
  .react-tabs {
    &__tab-panel--selected {
      width: 100%;
    }
  }
`

const CategoriesNew: BlitzPage = () => {
  return (
    <CategoriesNewStyled className="flex flex-col justify-start items-start min-h-screen">
      <Layout>
        <section className="w-screen min-h-screen flex lg:flex-row flex-col justify-start items-start">
          <div className="flex flex-col justify-start items-start w-full"></div>
        </section>
      </Layout>
    </CategoriesNewStyled>
  )
}

CategoriesNew.authenticate = true

export default CategoriesNew
