import {BsPlus, BsFillLightningFill, BsGearFill} from "react-icons/bs";
import  {FaFire, FaPoo} from 'react-icons/fa'

const SideBar = () => {
  return (
      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-800 text-white shadow">
          <SideBarIcon icon={<FaFire size="28"  />} text='Fire 🔥' />
          <SideBarIcon icon={<FaPoo size="28"/>}  text='Poop 💩' />
          <SideBarIcon icon={<BsFillLightningFill size="28" />} text='Lightning ⚡️' />
          <SideBarIcon icon={<BsGearFill size="28" />} text='Settings ⚙️' />
          <SideBarIcon icon={<BsPlus size="48" />} text='Add +' />
      </div>
  )
}

const SideBarIcon = ({icon, text}) => {
    return(
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>

        )
}

export default SideBar