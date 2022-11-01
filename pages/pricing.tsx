import Layout from "app/core/layouts/Layout"
import styled from "styled-components"
import dynamic from "next/dynamic"
import { BlitzPage } from "@blitzjs/next"
import GradientAnimation from "@app/home/GradientAnimation"

const PricingStyled = styled.div``
const Header = dynamic(() => import("@app/home/Header"))
const Banner = dynamic(() => import("@app/home/Banner"))
const Introduction = dynamic(() => import("@app/home/Introduction"))
const Footer = dynamic(() => import("@app/home/Footer"))
const Guides = dynamic(() => import("@app/core/layouts/Guides"), {
  ssr: false,
})

const Pricing: BlitzPage = () => {
  return (
    <PricingStyled className="flex flex-col justify-start items-start min-h-screen">
      <Guides useSize={true} size={1.7} />
      <Layout>
        <div className="w-full px-5 lg:px-0 lg:max-w-[1080px] mx-auto h-full flex flex-col justify-start items-center">
          <Header />
          <Footer />
        </div>
      </Layout>
    </PricingStyled>
  )
}

export default Pricing
