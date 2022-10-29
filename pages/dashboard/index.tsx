import Layout from "app/core/layouts/Layout"
import styled from "styled-components"
import dynamic from "next/dynamic"
import { BlitzPage } from "@blitzjs/next"
import React from "react"

const Header = dynamic(() => import("@app/dashboard/Header"))
const Sidebar = dynamic(() => import("@app/dashboard/Sidebar"))

const DashboardStyled = styled.div``

const Dashboard: BlitzPage = () => {
  return (
    <DashboardStyled className="flex flex-col justify-start items-start min-h-screen">
      <Layout>
        <section className="w-screen min-h-screen flex lg:flex-row flex-col justify-start items-start">
          <Sidebar />
          <div className="flex flex-col justify-start items-start w-full">
            <React.Suspense>
              <Header />
            </React.Suspense>
          </div>
        </section>
      </Layout>
    </DashboardStyled>
  )
}

Dashboard.authenticate = true

export default Dashboard
