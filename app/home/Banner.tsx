import React from "react"
import dynamic from "next/dynamic"
import styled from "styled-components"
import { FiChevronRight } from "react-icons/fi"
import { RiChromeFill, RiEdgeFill, RiFirefoxFill, RiOperaFill } from "react-icons/ri"
import Link from "next/link"

const Button = dynamic(() => import("@app/core/components/Button"))

const BannerStyled = styled.div``

const Banner: React.FC = () => {
  return (
    <BannerStyled className="flex min-h-[70vh] flex-col lg:flex-row px-1 lg:px-0 lg:justify-center py-6 items-center w-full">
      <div className="w-full lg:w-1/2 space-y-3.5 flex flex-col justify-center h-full items-start">
        <h1 className="fonts__poppins_regular font-semibold text-6xl">The vegan diet made easy</h1>
        <p className="text-md fonts__inter_regular font-medium text-slate-400">
          Every day, we'll notify you a new recipe and grocery list that's perfect for your
          lifestyle. You can skip or reschedule the recipes you don't want, and we'll remind you
          when it's time to shop.
        </p>
        <div className="w-full flex flex-row justify-start items-center space-x-3">
          <Link href={"/auth/signup"}>
            <Button type="primary" className="text-xs font-medium fonts__inter_regular">
              <span>Get started for free</span>
              <FiChevronRight size={17} strokeWidth={3} />
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button type="transparent" className="text-xs font-medium fonts__inter_regular">
              <span>Contact sales</span>
              <FiChevronRight size={17} strokeWidth={3} />
            </Button>
          </Link>
        </div>
        <div className="w-full flex flex-row space-x-2 justify-start items-center">
          <span className="fonts__inter_regular font-medium text-xs">Compatible with</span>
          <RiFirefoxFill size={20} className="text-slate-400" />
          <RiChromeFill size={20} className="text-slate-400" />
          <RiOperaFill size={20} className="text-slate-400" />
          <RiEdgeFill size={20} className="text-slate-400" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center h-full items-center"></div>
    </BannerStyled>
  )
}

export default Banner