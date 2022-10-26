import React from "react"
import styled from "styled-components"

const AnimationStyled = styled.canvas`
  --gradient-color-1: #379237;
  --gradient-color-2: #54b435;
  --gradient-color-3: #82cd47;
  --gradient-color-4: #f3ff65;
`

const GradientAnimation: React.FC = () => {
  return <AnimationStyled className="w-screen h-[70px]" id="gradient"></AnimationStyled>
}

export default GradientAnimation
