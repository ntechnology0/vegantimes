import React from "react"
import styled from "styled-components"
import clsx from "clsx"

const BannerStyled = styled.div``

const Banner: React.FC = () => {
  return (
    <BannerStyled className="flex min-h-[78vh] flex-col px-1 lg:px-0 lg:justify-start py-6 items-start w-full">
      <div className="relative mx-auto w-full py-10 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight max-w-md text-black fonts__poppins_bold sm:text-5xl">
          <span className="block lg:inline">
            Time to get your vegan plan.
            <br />
          </span>
        </h1>
        <p className="mt-4 text-md text-gray-400 fonts__inter_regular">
          Everything you need, nothing you don't. <br />
          Pick a plan that best suits your business.
        </p>
      </div>
    </BannerStyled>
  )
}

export default Banner
