import React from "react"
import { FiSearch } from "react-icons/fi"
import styled from "styled-components"

const HeaderInputStyled = styled.div``

const HeaderInput: React.FC = () => {
  return (
    <HeaderInputStyled className="flex flex-row justify-start w-full lg:w-1/2 space-x-2 px-3 items-center">
      <FiSearch size={17} strokeWidth={3} className="text-slate-600" />
      <input
        type={"text"}
        className="block w-full focus:ring-0 fonts__inter_regular font-medium focus:border-b-2 text-xs border-0 focus:outline-none focus:border-primary"
        placeholder="Search."
      />
    </HeaderInputStyled>
  )
}

export default HeaderInput
