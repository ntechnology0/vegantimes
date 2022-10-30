import styled from "styled-components"
import dynamic from "next/dynamic"

const Button = dynamic(() => import("@app/core/components/Button"))
const Image = dynamic(() => import("@app/core/components/Image"))

const IntroductionStyled = styled.div``

const Introduction: React.FC = () => {
  return (
    <IntroductionStyled className="flex min-h-[70vh] flex-col lg:flex-row px-1 lg:px-0 lg:justify-center py-6 items-center w-full">
      <div className="w-full lg:w-1/2 space-y-3.5 flex flex-col justify-center h-full items-start"></div>
      <div className="w-full lg:w-1/2 hidden lg:flex flex-col justify-center h-full items-center"></div>
    </IntroductionStyled>
  )
}

export default Introduction
