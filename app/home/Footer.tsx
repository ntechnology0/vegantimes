import React from "react"
import dynamic from "next/dynamic"
import styled from "styled-components"
import Link from "next/link"

const PrimaryLogo = dynamic(() => import("@app/core/components/PrimaryLogo"))
const LocationArrow = dynamic(() => import("react-icons/fa").then((r) => r.FaLocationArrow))
const MessageRound = dynamic(() => import("react-icons/ai").then((r) => r.AiTwotoneMessage))
const FiInstagram = dynamic(() => import("react-icons/fi").then((r) => r.FiInstagram))
const FiTiktok = dynamic(() => import("react-icons/fa").then((r) => r.FaTiktok))
const FiYoutube = dynamic(() => import("react-icons/fa").then((r) => r.FaYoutube))

const FooterStyled = styled.div``

const Footer: React.FC = () => {
  return (
    <FooterStyled className="w-screen flex flex-col bg-slate-50 justify-center items-center px-10 lg:px-0 lg:min-h-[40vh] py-4">
      <div className="container max-w-[1080px] flex flex-col lg:flex-row justify-between items-start">
        <div className="flex flex-col justify-start items-start">
          <Link href={"/"}>
            <PrimaryLogo
              viewBox="0 0 1000 500"
              className="cursor-pointer"
              height={70}
              width={150}
              color={"#000"}
            />
          </Link>
          <p className="text-sm text-slate-500 max-w-xs -mt-4 mb-4 px-1.5 fonts__inter_regular font-medium">
            The world is crying out for more plant-based food, and we've got the recipe.
          </p>
          <div className="flex flex-col justify-start items-start space-y-1.5 px-1 w-full">
            <div className="w-full flex flex-row justify-start items-center space-x-3">
              <LocationArrow className="text-primary" size={12} />
              <span className="text-sm fonts__inter_regular font-medium text-primary">
                United States
              </span>
            </div>
            <div className="w-full flex flex-row justify-start items-center space-x-3">
              <MessageRound className="text-primary" size={14} />
              <span className="text-sm fonts__inter_regular font-medium text-primary">
                English ( United States )
              </span>
            </div>
          </div>
          <div className="w-full flex flex-row justify-start space-x-5 items-center py-2.5 px-1">
            <a href={"https://www.instagram.com/vegantimes.app/"} target="_blank">
              <FiInstagram size={18} className="text-slate-500" />
            </a>
            <a href={"https://www.tiktok.com/@vegantimes.app"} target="_blank">
              <FiTiktok size={16} className="text-slate-500" />
            </a>
            <a href={"https://www.youtube.com/channel/UCkGCHipQcYwOPPLJmbzJAKQ"} target="_blank">
              <FiYoutube size={20} className="text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer
