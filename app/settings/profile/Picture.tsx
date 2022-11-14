import { useCurrentUser } from "@app/users/hooks/useCurrentUser"
import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"

const Image = dynamic(() => import("@app/core/components/Image"))
const ProfilePictureStyled = styled.div``

const ProfilePicture: React.FC = () => {
  const user = useCurrentUser()
  return (
    <ProfilePictureStyled className="w-full flex flex-col py-8 justify-start items-start">
      <h1 className="text-sm font-medium fonts__poppins_regular text-slate-600">Profile picture</h1>
      <div className="w-full flex flex-row justify-center items-center py-4">
        {user?.profile && user?.profile ? null : (
          <div className="w-[100px] rounded-full h-[100px] flex border border-slate-200 flex-col justify-center items-center bg-primary bg-opacity-10">
            <span className="font-medium fonts__poppins_regular text-md">V</span>
          </div>
        )}
      </div>
      <span className="text-slate-400 text-xs fonts__inter_regular font-normal">
        Only images with a maximum size of 5MB and type JPEG, PNG or WEBP are allowed.
      </span>
      <div className="w-full flex flex-col bg-slate-100 border px-2 py-2 space-y-1 rounded mt-3 justify-start items-start">
        <h1 className="fonts__poppins_regular text-xs font-medium">Build confidence</h1>
        <p className="text-slate-500 font-medium fonts__inter_regular text-xs">
          Your profile picture adds confidence to your profile for your followers and the people you
          interact with
        </p>
      </div>
    </ProfilePictureStyled>
  )
}

export default ProfilePicture
