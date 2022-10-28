import React from "react"
import dynamic from "next/dynamic"
import styled from "styled-components"
import { BiUserCircle } from "react-icons/bi"
import { useCurrentUser } from "@app/users/hooks/useCurrentUser"

const SidebarLink = dynamic(() => import("./SidebarLink"))
const HeaderInput = dynamic(() => import("./HeaderInput"))
const HeaderStyled = styled.div`
  .top_link {
    width: auto !important;
  }
`

const Header: React.FC = () => {
  const user = useCurrentUser()

  return (
    <HeaderStyled className="w-full flex flex-row justify-between px-0 lg:px-5 items-center border-b border-slate-100 py-2">
      <HeaderInput />
      <div className="w-1/2 flex-row justify-end items-center hidden lg:flex">
        <SidebarLink
          text={`${user?.name ? user?.name : ""}`}
          Icon={() => <BiUserCircle size={19} />}
          link={"/settings/profile"}
          className={"top_link rounded hover:bg-transparent"}
        />
      </div>
    </HeaderStyled>
  )
}

export default Header
