import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import clsx from "clsx"
import { IconType } from "react-icons/lib"

type Props = {
  link: string
  text: string
  Icon?: IconType
  className?: string
}

const SidebarLink: React.FC<Props> = ({ link, text, Icon, className }) => {
  const routerPathName = useRouter().pathname

  return (
    <Link href={link!}>
      <button
        type="button"
        className={clsx(
          `focus:outline-none flex flex-row justify-center lg:justify-start space-x-2 items-center px-5 py-2 hover:text-slate-800  hover:bg-slate-50 bg-opacity-50 rounded-md cursor-pointer w-full lg:w-full`,
          routerPathName === link ? "text-primary" : "text-slate-600",
          className && `${className}`
        )}
      >
        {Icon ? <Icon /> : null}
        <span className={`fonts__inter_regular font-medium text-[0.8rem] hidden lg:inline-flex`}>
          {text}
        </span>
      </button>
    </Link>
  )
}

export default SidebarLink
