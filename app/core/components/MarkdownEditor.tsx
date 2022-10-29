"use client"
import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import { Recipe } from "@db/index"
import { languages } from "@codemirror/language-data"
import { markdown, markdownLanguage } from "@codemirror/lang-markdown"
import { dracula } from "@uiw/codemirror-theme-dracula"

const MarkdownEditorStyled = styled.div`
  .cm-editor {
    min-height: calc(100vh - 50px);
    max-height: calc(100vh - 50px);
    .cm-content {
      &::focus {
        outline: none !important;
      }
    }
  }
  .editor {
    width: 100%;
    &__block {
      min-height: calc(100vh - 100px);
      max-height: calc(100vh - 100px);
    }
  }
`

const CodeEditor = dynamic(() => import("@uiw/react-codemirror"))
const MarkdownEditorHeader = dynamic(() => import("@app/recipes/EditorHeader"))
const MarkdownPreview = dynamic(() => import("@app/core/components/MarkdownPreview"))

type Props = {
  recipe?: Pick<Recipe, "id" | "title" | "content" | "published" | "reference" | "slug">
}

const MarkdownEditor: React.FC<Props> = ({ recipe }) => {
  const [codeEntered, setCodeEntered] = React.useState("")

  return (
    <MarkdownEditorStyled className="flex bg-dark flex-col justify-start items-center w-full h-screen">
      <MarkdownEditorHeader />
      <div className="w-screen flex flex-col h-full lg:flex-row justify-start items-start">
        <div className="w-full lg:w-1/2 editor__block">
          <CodeEditor
            extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
            className="editor__block flex-1 bg-transparent focus:outline-none"
            onChange={(v) => setCodeEntered(v)}
            theme={dracula}
            height="100%"
          />
        </div>
        <div className="w-full lg:w-1/2 h-full">
          <MarkdownPreview codeEntered={codeEntered} />
        </div>
      </div>
    </MarkdownEditorStyled>
  )
}

export default MarkdownEditor
