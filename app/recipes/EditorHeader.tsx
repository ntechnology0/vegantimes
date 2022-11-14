import Link from "next/link"
import React from "react"
import dynamic from "next/dynamic"
import styled from "styled-components"

const ChevronLeft = dynamic(() => import("react-icons/fi").then((f) => f.FiChevronLeft))
const PlusIcon = dynamic(() => import("react-icons/fi").then((f) => f.FiSave))
const Button = dynamic(() => import("@app/core/components/Button"))

const EditorHeaderStyled = styled.div``

const EditorHeader: React.FC = () => {
  return (
    <EditorHeaderStyled className="w-[250px] relative py-2 px-2 bg-slate-50 border-r border-slate-100 h-screen text-black flex flex-col justify-between space-x-5 items-center">
      <Link href="/recipes">
        <button
          className="flex flex-row justify-start items-center space-x-1 bg-transparent focus:outline-none appearance-none"
          type="button"
        >
          <ChevronLeft size={17} strokeWidth={2.5} className="text-black" />
          <span className="font-semibold fonts__inter_regular text-xs">Back</span>
        </button>
      </Link>
      <Button className="flex flex-row justify-start items-center" type="primary">
        <PlusIcon size={17} strokeWidth={2.5} className="text-white" />
        <span className="text-xs font-normal fonts__inter_regular">Save</span>
      </Button>
    </EditorHeaderStyled>
  )
}

export default EditorHeader
