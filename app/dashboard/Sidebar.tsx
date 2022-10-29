import React from "react"
import styled from "styled-components"
import { FiCalendar, FiInbox, FiPenTool, FiPlus, FiUsers } from "react-icons/fi"
import { HiOutlineSupport } from "react-icons/hi"
import dynamic from "next/dynamic"

const SidebarLink = dynamic(() => import("./SidebarLink"))

const SidebarStyled = styled.nav``

const Sidebar: React.FC = () => {
  return (
    <SidebarStyled className="w-full fixed lg:relative lg:w-[220px] bg-white py-2 lg:space-y-1 space-y-0 lg:border-r border-b border-slate-100 lg:h-screen h-[50px] flex flex-row px-2 lg:px-4 lg:flex-col justify-between lg:justify-between items-end lg:items-start overflow-x-scroll lg:overflow-x-hidden">
      <div className="w-full flex flex-row lg:flex-col">
        <SidebarLink
          text="Inbox"
          link="/dashboard"
          Icon={() => <FiInbox size={18} strokeWidth={2.5} />}
        />
        <SidebarLink
          text="Customers"
          link="/customers"
          Icon={() => <FiUsers size={18} strokeWidth={2.5} />}
        />
        <SidebarLink
          text="Events"
          link="/events"
          Icon={() => <FiCalendar size={18} strokeWidth={2.5} />}
        />
        <SidebarLink
          text="Recipes"
          link="/recipes"
          Icon={() => <FiPenTool size={18} strokeWidth={2.5} />}
        />
      </div>
      <div className="w-full  hidden lg:flex py-2 flex-col justify-start items-start">
        <SidebarLink
          text={"Invite people"}
          link={"/invite"}
          Icon={() => <FiPlus size={18} strokeWidth={2.5} />}
        />
        <SidebarLink
          text={"Help & Support"}
          link={"/help"}
          Icon={() => <HiOutlineSupport size={18} strokeWidth={2.5} />}
        />
      </div>
    </SidebarStyled>
  )
}

export default Sidebar
