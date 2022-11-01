import styled from "styled-components"
import dynamic from "next/dynamic"
import { BlitzPage } from "@blitzjs/next"
import React from "react"

const Layout = dynamic(() => import("@app/core/layouts/Layout"))
const Sidebar = dynamic(() => import("@app/settings/Sidebar"))
const GeneralSidebar = dynamic(() => import("@app/dashboard/Sidebar"))
const ProfilePicture = dynamic(() => import("@app/settings/profile/Picture"))
const UserInformation = dynamic(() => import("@app/settings/profile/UserInformation"))

const ProfileSettingsStyled = styled.div``

const ProfileSettings: BlitzPage = () => {
  return (
    <ProfileSettingsStyled className="flex flex-col justify-start items-start min-h-screen">
      <Layout>
        <section className="w-screen min-h-screen flex lg:flex-row flex-col justify-start items-start">
          <GeneralSidebar />
          <div className="flex flex-col justify-start items-start w-full h-screen">
            <div className="w-full flex flex-row justify-start lg:max-w-[1080px] items-start h-screen">
              <Sidebar />
              <div className="w-full lg:w-3/4 flex flex-col justify-start items-start space-y-1 px-4 py-4">
                <UserInformation />
              </div>
              <div className="w-full lg:w-1/4">
                <React.Suspense>
                  <ProfilePicture />
                </React.Suspense>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </ProfileSettingsStyled>
  )
}

ProfileSettings.authenticate = true

export default ProfileSettings
