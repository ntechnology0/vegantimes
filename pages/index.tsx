import Layout from "app/core/layouts/Layout"
import styled from "styled-components"
import dynamic from "next/dynamic"
import { BlitzPage } from "@blitzjs/next"

const HomeStyled = styled.div``
const Header = dynamic(() => import("@app/home/Header"))
const Guides = dynamic(() => import("@app/core/layouts/Guides"), {
  ssr: false,
})

const Home: BlitzPage = () => {
  return (
    <HomeStyled className="flex flex-col justify-start items-start min-h-screen">
      <Guides />
      <Layout>
        <div className="w-full px-5 lg:px-0 lg:max-w-[1080px] mx-auto h-full flex flex-col justify-start items-center">
          <Header />
        </div>
      </Layout>
    </HomeStyled>
  )
}

export default Home
