import styled from "styled-components"
import dynamic from "next/dynamic"

const Button = dynamic(() => import("@app/core/components/Button"))
const Image = dynamic(() => import("@app/core/components/Image"))

const IntroductionStyled = styled.div``

const Introduction: React.FC = () => {
  return (
    <IntroductionStyled className="flex lg:min-h-[30vh] flex-col px-3 lg:px-0 lg:justify-start py-20 items-center w-full">
      <div className="container max-w-[1080px] space-y-5 flex flex-col justify-start items-start">
        <h2 className="fonts__poppins_regular text-md font-medium text-primary">
          Why VeganTimes ?
        </h2>
        <h1 className="text-2xl lg:text-5xl max-w-2xl font-semibold fonts__poppins_regular text-black">
          A community-first approach to veganism and social media
        </h1>
        <p className="text-md font-medium max-w-lg fonts__inter_regular text-slate-600">
          Life is busy, so we made it our mission to help you make tasty vegan meals that are
          seamless to put together. With an integrated grocery shopping list, you'll be able to plan
          your week's meals with ease.
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-y-4 lg:gap-y-0 lg:gap-x-4 py-5">
          <div className="flex flex-col justify-start items-start w-full space-y-2">
            <div className="w-full flex flex-row justify-start items-center space-x-1 border-l-2 border-primary px-2">
              <h3 className="text-sm fonts__inter_regular font-semibold">Exclusive content</h3>
            </div>
            <p className="pl-2 text-sm leading-5 font-medium max-w-lg fonts__inter_regular text-slate-500">
              Create your own <span className="text-primary">private community</span> with content
              your fans won’t find anywhere else. You’re free to share what you want, when you want.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start w-full space-y-2">
            <div className="w-full flex flex-row justify-start items-center space-x-1 border-l-2 border-primary px-2">
              <h3 className="text-sm fonts__inter_regular font-semibold">Manage without stress</h3>
            </div>
            <p className="pl-2 text-sm leading-5 font-medium max-w-lg fonts__inter_regular text-slate-500">
              VeganTimes provides you with all <span className="text-primary">the tools</span> you
              need for monitoring and analysing your subscribers’ activit y and your income on a
              daily basis.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start w-full space-y-2">
            <div className="w-full flex flex-row justify-start items-center space-x-1 border-l-2 border-primary px-2">
              <h3 className="text-sm fonts__inter_regular font-semibold">Easy meal planning</h3>
            </div>
            <p className="pl-2 text-sm leading-5 font-medium max-w-lg fonts__inter_regular text-slate-500">
              Vegan Times is the perfect tool for anyone looking to start or maintain a vegan diet.
              with an integrated grocery shopping list.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start w-full space-y-2">
            <div className="w-full flex flex-row justify-start items-center space-x-1 border-l-2 border-primary px-2">
              <h3 className="text-sm fonts__inter_regular font-semibold">Stay on the track</h3>
            </div>
            <p className="pl-2 text-sm font-medium max-w-lg fonts__inter_regular text-slate-500">
              Vegan Times makes it easy to put together a meal plan flexible, customizable, and made
              just for you with delicious recipes
            </p>
          </div>
        </div>
      </div>
    </IntroductionStyled>
  )
}

export default Introduction
