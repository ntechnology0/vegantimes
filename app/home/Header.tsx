import Link from "next/link"
import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { FiChevronRight } from "react-icons/fi"

const Button = dynamic(() => import("@components/Button"))
const MenuItem = dynamic(() => import("@app/home/MenuItem"))
const PrimaryLogo = dynamic(() => import("@app/core/components/PrimaryLogo"))

const HeaderStyle = styled.div`
  max-width: 1080px;
  min-height: 68px;
`

const Header: React.FC = () => {
  return (
    <HeaderStyle className="flex flex-row px-1 lg:px-0 justify-between py-2 items-center w-full">
      <Link href={"/"}>
        <PrimaryLogo
          viewBox="0 0 1000 500"
          className="cursor-pointer"
          height={70}
          width={150}
          color={"#000"}
        />
      </Link>
      <motion.div className="flex-row justify-center space-x-0 items-center hidden lg:flex">
        <Link href={"/pricing"}>
          <div>
            <MenuItem text="Pricing" noMenu></MenuItem>
          </div>
        </Link>
      </motion.div>
      <div className="flex flex-row justify-start items-center">
        <Link href={"/auth/login"}>
          <div>
            <Button type="primary" className="space-x-2">
              <span className="text-xs font-medium fonts__inter_regular">My account</span>
              <FiChevronRight size={17} color="#FFF" />
            </Button>
          </div>
        </Link>
      </div>
    </HeaderStyle>
  )
}

export default Header
