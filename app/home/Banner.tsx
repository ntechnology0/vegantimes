import React from "react"
import dynamic from "next/dynamic"
import styled from "styled-components"
import { FiChevronRight } from "react-icons/fi"
import { RiChromeFill, RiEdgeFill, RiFirefoxFill, RiOperaFill } from "react-icons/ri"

const Button = dynamic(() => import("@app/core/components/Button"))
const Illustration = dynamic(() => import("@app/home/Illustration"))
const Phone = dynamic(() => import("@app/home/Phone"))
const Image = dynamic(() => import("@app/core/components/Image"))
const Application = dynamic(() => import("@app/home/Application"))
const Link = dynamic(() => import("next/link"))

const BannerStyled = styled.div``

const Banner: React.FC = () => {
  return (
    <BannerStyled className="flex min-h-[78vh] flex-col lg:flex-row px-1 lg:px-0 lg:justify-center py-6 items-center w-full">
      <div className="w-full lg:w-1/2 relative z-[100] space-y-3.5 flex flex-col justify-center h-full items-start">
        <h1 className="fonts__poppins_regular font-semibold text-6xl">The vegan diet made easy</h1>
        <p className="text-md fonts__inter_regular font-medium text-slate-600">
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
        <div className="w-full flex flex-row justify-start items-center">
          <Link href={"https://www.scaleway.com/en"}>
            <Image
              url="https://imagedelivery.net/RftBCAD9WIDjY7t0O7Pe4A/8480604b-084d-4d7e-a8ef-b0a622940300/public"
              width={120}
              height={50}
              alt="Scaleway partner"
            />
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 hidden lg:flex flex-col justify-center h-full items-center">
        <Illustration className="absolute left-1/2 top-4 h-[900px] w-[900px] -translate-x-1/3 stroke-gray-300/70 opacity-40 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:top-14 lg:ml-12 xl:top-20 xl:ml-0" />
        <div className="-mx-4 h-[448px] lg:h-[700px] absolute px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:px-0 lg:pt-10 xl:-bottom-32">
          <Phone className="mx-auto max-w-[366px] absolute z-[-1000] top-24 left-[366px]" priority>
            <Application />
          </Phone>
        </div>
      </div>
    </BannerStyled>
  )
}

export default Banner
