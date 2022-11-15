import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"

const ApplicationHome = dynamic(() => import("@app/home/ApplicationHome"))

const ApplicationStyled = styled.div``

const Application: React.FC = () => {
  return (
    <ApplicationStyled className="flex flex-1 flex-col justify-between relative -top-7 h-[104.5%] items-start bg-white">
      <ApplicationHome />
    </ApplicationStyled>
  )
}

export default Application
