import React from "react"
import styled from "styled-components"

const MarkdownStyled = styled.div``

const Callout_Type = {
  note: {
    color: "#8792a2",
  },
  caution: {
    color: "#d97917",
  },
  check: {
    color: "#000000",
  },
  warning: {
    color: "#ed5f74",
  },
}

type Props = {
  children: React.ReactNode
  type: string
  title: string
}

const MarkdownCallout: React.FC<Props> = ({ children, type, title }) => {
  return (
    <MarkdownStyled
      className="callout"
      style={{
        backgroundColor: Callout_Type[type].color,
      }}
    >
      <h3>{title}</h3>
      {children}
    </MarkdownStyled>
  )
}

export default MarkdownCallout
