import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"

const FiPlus = dynamic(() => import("react-icons/fi").then((r) => r.FiPlus))
const Button = dynamic(() => import("@app/core/components/Button"))

const RecipeStyled = styled.div``

const RecipeTab: React.FC = () => {
  return (
    <RecipeStyled className="w-full flex flex-col justify-start items-start py-3 px-6 lg:px-0">
      <div className="w-full flex flex-row lg:flex-row justify-between items-start lg:space-y-0 lg:pr-4">
        <h1 className="fonts__poppins_regular font-semibold text-xl">Recipes</h1>
        <div className="flex flex-row justify-start items-center space-x-2">
          <Button
            type="primary"
            className="text-xs font-medium fonts__inter_regular flex flex-row justify-start items-center space-x-1"
          >
            <FiPlus size={17} color={"text-white"} />
            <span className="text-white text-xs">Add a recipe</span>
          </Button>
        </div>
      </div>
    </RecipeStyled>
  )
}

export default RecipeTab
