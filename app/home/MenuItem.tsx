import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import MenuContainer from "./MenuContainer"

type Props = {
  text: string
  children?: React.ReactNode
  noMenu?: boolean
}

const MenuItemStyled = styled(motion.div)``

const Underline: React.FC = () => {
  return (
    <motion.div
      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded bg-black"
      layoutId="underline"
      layout
    ></motion.div>
  )
}

const MenuItem: React.FC<Props> = ({ text, children, noMenu = false }) => {
  const [isBeingHovered, setIsBeingHovered] = React.useState(false)

  return (
    <MenuItemStyled
      className="px-5 relative cursor-pointer"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span className="relative hover:opacity-60 fonts__poppins_regular text-sm font-medium text-black">
        {text}
        {isBeingHovered && <Underline />}
      </span>
      {isBeingHovered && !noMenu && <MenuContainer>{children}</MenuContainer>}
    </MenuItemStyled>
  )
}

export default MenuItem
