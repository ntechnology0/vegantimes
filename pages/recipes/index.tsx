import styled from "styled-components"
import dynamic from "next/dynamic"
import { Tabs, TabPanel, TabList, Tab } from "react-tabs"
import { BlitzPage } from "@blitzjs/next"
import React from "react"

const Layout = dynamic(() => import("@app/core/layouts/Layout"))
const Header = dynamic(() => import("@app/dashboard/Header"))
const Sidebar = dynamic(() => import("@app/dashboard/Sidebar"))

const RecipeTab = dynamic(() => import("@app/recipes/RecipeTab"))
const CategoryTab = dynamic(() => import("@app/recipes/CategoryTab"))

const RecipesStyled = styled.div`
  .content {
    &__block {
      min-height: calc(100vh - 52px);
      max-height: calc(100vh - 52px);
      height: calc(100vh - 52px);
    }
  }
  .react-tabs {
    &__tab-panel--selected {
      width: 100%;
    }
  }
`

const Recipes: BlitzPage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0)

  return (
    <RecipesStyled className="flex flex-col justify-start items-start min-h-screen">
      <Layout>
        <section className="w-screen min-h-screen flex lg:flex-row flex-col justify-start items-start">
          <Sidebar />
          <div className="flex flex-col justify-start items-start w-full">
            <React.Suspense>
              <Header />
            </React.Suspense>
            <Tabs
              selectedIndex={selectedTabIndex}
              onSelect={setSelectedTabIndex}
              className="w-full flex flex-col lg:flex-row justify-start items-start content__block"
            >
              <TabList
                className={
                  "w-full lg:h-full px-4 lg:w-[190px] flex lg:flex-col  space-y-0 lg:space-x-0 overflow-x-scroll lg:overflow-hidden space-x-0 py-2 lg:py-3 justify-start items-start flex-row"
                }
              >
                <Tab
                  className={`text-sm fonts__inter_regular px-3 focus:outline-none ${
                    selectedTabIndex === 0
                      ? "text-primary  py-1 border-l-0 lg:border-l border-primary"
                      : "text-slate-600 py-1 border-l-0 lg:border-l border-slate-100"
                  } hover:text-slate-800 font-medium cursor-pointer`}
                >
                  All recipes
                </Tab>
                <Tab
                  className={`text-sm fonts__inter_regular focus:outline-none px-3 ${
                    selectedTabIndex === 1
                      ? "text-primary py-1 border-l-0 lg:border-l border-primary"
                      : "text-slate-600 py-1 border-l-0 lg:border-l border-slate-100"
                  } hover:text-slate-800 font-medium cursor-pointer`}
                >
                  Categories
                </Tab>
              </TabList>
              <TabPanel>
                <RecipeTab />
              </TabPanel>
              <TabPanel>
                <CategoryTab />
              </TabPanel>
            </Tabs>
          </div>
        </section>
      </Layout>
    </RecipesStyled>
  )
}

Recipes.authenticate = true

export default Recipes
