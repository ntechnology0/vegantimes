"use client"
import React from "react"
import WYSIWYGEditorJS from "@editorjs/editorjs"
import styled from "styled-components"
import dynamic from "next/dynamic"
import { Recipe } from "@db/index"
import { recipeSchema } from "@app/validations/recipe"

const WYSIWYGEditorStyled = styled.div`
  .editor {
    width: 100%;
    &__block {
      min-height: calc(100vh - 100px);
      max-height: calc(100vh - 100px);
      height: calc(100vh - 100px);
    }
  }
`

const TextAreaSize = dynamic(() => import("react-textarea-autosize"))
const WYSIWYGEditorHeader = dynamic(() => import("@app/recipes/EditorHeader"))

type Props = {
  recipe?: Pick<Recipe, "id" | "title" | "content" | "published" | "reference" | "slug">
}

const WYSIWYGEditor: React.FC<Props> = ({ recipe }) => {
  const [mounted, setIsMounted] = React.useState<boolean>(false)
  const editorReference = React.useRef<WYSIWYGEditorJS>()

  const inialize = async () => {
    const WYSIWYGEditorJS = (await import("@editorjs/editorjs")).default
    const _header = (await import("@editorjs/header")).default
    const _table = (await import("@editorjs/table")).default
    const _list = (await import("@editorjs/list")).default
    const _linkTool = (await import("@editorjs/link")).default
    const _breakLine = (await import("editorjs-break-line")).default

    const body = recipe ? recipeSchema.parse(recipe) : { title: "", content: undefined }

    if (!editorReference.current) {
      const editor = new WYSIWYGEditorJS({
        holder: "editor",
        autofocus: true,
        onReady: () => {
          editorReference.current = editor
        },
        placeholder: "Type here to write your post",
        inlineToolbar: true,
        data: body.content,
        tools: {
          header: _header,
          table: _table,
          list: _list,
          linkTool: _linkTool,
          breakLine: _breakLine,
        },
      })
    }
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true)
    }
  }, [])

  React.useEffect(() => {
    if (mounted === true) {
      inialize()
      return () => {
        editorReference.current?.destroy()
      }
    }
  }, [mounted])

  if (mounted === false) return null
  return (
    <WYSIWYGEditorStyled className="flex flex-col justify-start items-center w-full">
      <WYSIWYGEditorHeader />
      <div className="w-full flex flex-col lg:flex-row container mx-auto">
        <div className="prose lg:w-1/2 prose-stone  prose-base editor__block">
          <TextAreaSize
            autoFocus
            name="title"
            id="title"
            defaultValue={recipe ? recipe.title : ""}
            placeholder="Recipe title"
            maxRows={3}
            className="w-full resize-none px-3 lg:px-0 appearance-none border-0 fonts__poppins_regular overflow-hidden text-xl font-semibold focus:ring-0 focus:outline-none"
          />
          <div id="editor" className="h-full px-3 lg:px-0" />
        </div>
      </div>
    </WYSIWYGEditorStyled>
  )
}

export default WYSIWYGEditor
