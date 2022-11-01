import React from "react"

const UserInformation: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start py-4">
      <h1 className="fonts__poppins_regular font-medium text-slate-600 text-sm">
        User Information
      </h1>
      <p className="text-xs font-medium fonts__inter_regular max-w-sm text-slate-400">
        Here you can edit public information about yourself. The changes will be displayed for other
        users within seconds
      </p>
    </div>
  )
}

export default UserInformation
