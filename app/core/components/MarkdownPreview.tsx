import React from "react"
import styled from "styled-components"
import Markdoc, { RenderableTreeNode } from "@markdoc/markdoc"
import dynamic from "next/dynamic"

const MarkdownStyled = styled.div`
  min-height: calc(100vh - 46px);
  max-height: calc(100vh - 46px);
  height: calc(100vh - 46px);
  overflow-y: scroll !important;
`

type Props = {
  codeEntered: string
}

const MarkdownCallout = dynamic(() => import("@app/core/components/MarkdownCallout"))

const MarkdownPreview: React.FC<Props> = ({ codeEntered }) => {
  const [renderContent, setRenderContent] = React.useState<RenderableTreeNode>(null)

  React.useEffect(() => {
    const content = Markdoc.parse(codeEntered)
    const transformed = Markdoc.transform(content)
    setRenderContent(transformed)
  }, [codeEntered])

  return (
    <MarkdownStyled className="w-full px-2 prose prose-strone bg-white">
      {Markdoc.renderers.react(renderContent, React, { components: { Callout: MarkdownCallout } })}
    </MarkdownStyled>
  )
}

export default MarkdownPreview
