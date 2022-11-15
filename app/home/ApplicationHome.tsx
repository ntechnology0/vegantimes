import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"

const Link = dynamic(() => import("next/link"))
const Image = dynamic(() => import("@app/core/components/Image"))
const BsBatteryHalf = dynamic(() => import("react-icons/bs").then((b) => b.BsBatteryHalf))
const MdOutlineAddBox = dynamic(() => import("react-icons/cg").then((m) => m.CgAddR))
const BiSend = dynamic(() => import("react-icons/bi").then((b) => b.BiSend))
const BiHeart = dynamic(() => import("react-icons/bi").then((b) => b.BiHeart))
const FiSearch = dynamic(() => import("react-icons/fi").then((f) => f.FiSearch))
const PrimaryLogo = dynamic(() => import("@app/core/components/PrimaryLogo"))

const ApplicationHomeStyled = styled.div``

const ApplicationHome: React.FC = () => {
  return (
    <ApplicationHomeStyled className="w-full flex flex-col justify-start items-start px-5 py-2">
      <div className="w-full flex flex-col justify-start items-start">
        <div className="w-full flex flex-row justify-between px-0.5 items-center py-0.5">
          <div className="flex flex-row justify-start items-center">
            <span className="fonts__inter_regular font-medium text-xs">12:47</span>
          </div>
          <div className="flex flex-row justify-start space-x-2 items-center">
            <BsBatteryHalf size={20} color={"#000"} />
          </div>
        </div>
        <div className="w-full flex flex-row pb-2 justify-between items-center">
          <PrimaryLogo
            viewBox="0 0 1000 290"
            className="cursor-pointer"
            height={40}
            width={110}
            color={"#000"}
          />
          <div className="flex flex-row justify-start items-center space-x-3">
            <Link href={"/"}>
              <MdOutlineAddBox size={20} className="mt-5 cursor-pointer" />
            </Link>
            <Link href="/">
              <BiHeart size={23} className="mt-5 cursor-pointer" />
            </Link>
            <Link href={"/"}>
              <BiSend size={21} className="mt-5 cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center py-1 px-1 bg-slate-100 rounded-lg items-center w-full border-0 focus:outline-none">
            <FiSearch size={20} />
            <input
              type={"text"}
              className="bg-transparent focus:outline-none text-xs fonts__inter_regular font-medium focus:border-0 appearance-none border-0 h-6 w-full"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="w-full space-x-2 flex py-2 flex-row justify-start items-center">
          <div className="flex flex-col justify-center space-y-1 items-center">
            <div className="bg-gradient-to-tr from-primary to-blue-600 p-0.5 rounded-full">
              <Image
                className="h-12 w-12 cursor-pointer rounded-full"
                url="https://faces-img.xcdn.link/image-lorem-face-2818.jpg"
                alt="vegantimes application demo usage"
                width={100}
                height={100}
              />
            </div>
            <span className="fonts__inter_regular text-xs font-semibold text-black -ml-0.5">
              Jane
            </span>
          </div>
          <div className="flex flex-col justify-center space-y-1 items-center">
            <div className="bg-gradient-to-tr from-primary to-blue-600 p-0.5 rounded-full">
              <Image
                className="h-12 w-12 cursor-pointer rounded-full"
                url="https://faces-img.xcdn.link/thumb-lorem-face-5770_thumb.jpg"
                alt="vegantimes application demo usage"
                width={100}
                height={100}
              />
            </div>
            <span className="fonts__inter_regular text-xs font-semibold text-black -ml-0.5">
              John
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-start items-center px-5 py-5 bg-white"></div>
    </ApplicationHomeStyled>
  )
}

export default ApplicationHome
