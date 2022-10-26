import useWindowSize from "@app/core/hooks/useWindowSize"
import React from "react"
import styled from "styled-components"

type GuidesSize = {
  height: number | undefined
}

const GuidesStyle = styled.div<GuidesSize>`
  display: grid;
  grid: 1fr / repeat(4, 1fr);
  position: absolute;
  height: ${(p) => (p.height ? `${p.height}px` : "100vh")};
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-content: center;
  grid-auto-flow: column;
  .guide {
    width: 1px;
    height: ${(p) => (p.height ? `${p.height}px` : "100vh")};
    background: linear-gradient(
      180deg,
      rgba(66, 71, 112, 0.09),
      rgba(66, 71, 112, 0.09) 50%,
      transparent 0,
      transparent
    );
    background-size: 1px 8px;
    &:first-child {
      width: 0px !important;
    }
  }
`

type Props = {
  useSize?: boolean
}

const Guides: React.FC<Props> = ({ useSize }) => {
  const { height } = useWindowSize()

  return (
    <GuidesStyle
      height={useSize ? height : undefined}
      className="absolute w-screen left-0 right-0 z-20 h-full top-0 bg-transparent"
    >
      <div className="guide"></div>
      <div className="guide"></div>
      <div className="guide"></div>
      <div className="guide"></div>
    </GuidesStyle>
  )
}

export default Guides
