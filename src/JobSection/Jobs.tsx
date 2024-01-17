import { Icon } from "@iconify/react";
import JobsBody from "./JobsBody";
import Dropdown from "../components/Dropdowns/Dropdown";
// import { NavLink, NavItem } from "react-router-dom";
// import Dropdown from "react-bootstrap";
function Jobs() {

  const myObject = [
    {
      icon1: <Icon icon="eva:search-outline"/>,
      icon2: "icon-park-solid:down-one",
      name: "Filters",
      list: ["Account settings", "Support", "License", "Sign out"],
    },
    {
      icon1: <Icon icon="system-uicons:location"/>,
      icon2: "icon-park-solid:down-one",
      name: "Location",
      list: ["Account settings", "Support", "License", "Sign out"],
    },
    {
      icon1: <Icon icon="basil:bag-outline"/>,
      icon2: "icon-park-solid:down-one",
      name: "Experience",
      list: ["Account settings", "Support", "License", "Sign out"],
    },
    {
      icon1: <Icon icon="mdi:cash"/>,
      icon2: "icon-park-solid:down-one",
      name: "Salary",
      list: ["Account settings", "Support", "License", "Sign out"],
    },
    
  ];


  return (
    <>
      <div className="md:bg-gray-950 md:border-t md:border-t-gray-600 md:text-gray-300 md:font-thin md:flex  md:items-center md:justify-evenly md:p-8 hidden">
        <div className="role md:flex md:w-screen md:justify-evenly md:gap-2 md:p-2 ">
        {myObject.map((item: any, index: number) => {
            return <Dropdown object={item} key={index} />;
          })}
        </div>
        
        
      </div>
      <JobsBody />
    </>
  );
}

export default Jobs;
