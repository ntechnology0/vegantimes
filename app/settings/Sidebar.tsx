import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"

const SidebarLink = dynamic(() => import("@app/dashboard/SidebarLink"))
const FiUser = dynamic(() => import("react-icons/fi").then((r) => r.FiUser))

const SidebarStyled = styled.nav``

const Sidebar: React.FC = () => {
  return (
    <SidebarStyled className="w-full fixed lg:relative lg:w-[250px] bg-white lg:py-7 lg:space-y-1 space-y-0 lg:border-r border-b border-slate-100 lg:h-screen h-[50px] flex flex-row px-2 lg:px-1 lg:flex-col justify-between lg:justify-start items-end lg:items-start overflow-x-scroll lg:overflow-x-hidden">
      <div className="w-full flex flex-row lg:flex-col">
        <SidebarLink
          text="Profile"
          link="/settings/profile"
          Icon={() => <FiUser size={18} strokeWidth={2.5} />}
        />
      </div>
    </SidebarStyled>
  )
}

export default Sidebar
