import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

function JobsBody() {
  const [active, setActive] = useState(false);
  function isActive() {
    setActive(!active);
  }
  
  
  const WorkingSchedule = ["Full Time", "Part Time", "Internship", "Project Work", "Volunteering"];
  const EmploymentType = ["Full Time", "Part Time", "Internship", "Project Work", "Volunteering"];
  return (
    <>
      <div className="p-4 flex min-h-screen bg-zinc-100 max-md:scrollbar-hide">
    
        <div className="w-2/6 md:w-2/12 border-r border-zinc-400 h-screen md:p-5">
          <div className="flex justify-between">
            <span className="font-semibold">Filters</span>
            <Icon icon="icon-park-solid:down-one" className="rotate-90" />
          </div>
          <div className="mt-5">
            <span className="text-gray-500 text-sm ">Working schedule</span>
            <ul className="text-sm">
              {

                
                WorkingSchedule.map((item: any, index: number) => {
                  return (
                    <div className="style-for-filters" key={index} >
                      <input
                      type="checkbox"
                      id={index.toString()}
                      name={item}
                      value={item}
                      />
                  <li>{item}</li> 
              </div>
                  );
                })
              }
              
              
            </ul>
          </div>

          <div className="mt-5">
            <span className="text-gray-500 text-sm ">Employment type</span>
            <ul className="text-sm">
              {
                EmploymentType.map((item: any, index: number) => {
                  return (
                    <div className="style-for-filters" key={index} >
                      <input
                      type="checkbox"
                      id={index.toString()}
                      name={item}
                      value={item}
                      className=" accent-gray-950"
                      />
                  <li>{item}</li> 
              </div>
                  );
                })
              }
            </ul>
          </div>

        </div>
        {/* <Dropdown name="Component" />
        <Dropdown name="NewComponent" /> */}
        <div className="p-4 md:w-screen">
          <div className="flex justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold p-2">Recommended Jobs</h1>
              <span className="rounded-full border border-zinc-400 md:p-2 md:px-3 p-1 px-2 md:py-1 border-opacity-80 font-bold text-sm h-fit">
                386
              </span>
            </div>
            <div className="md:text-xs md:flex md:items-center  hidden">
              <span className="text-gray-500 px-1">Sort by: </span>
              <span className="font-bold mr-2">Last Updated</span>
              <span className="text-2xl">
                <Icon icon="fluent:filter-24-regular" />
              </span>
            </div>
          </div>
          <div className="bg-white border rounded-2xl border-zinc-400 w-60 p-1">
            <div className="bg-green-500 bg-opacity-30 p-3 rounded-xl">
              <div className=" flex justify-between">
                <div className="p-1.5 w-fit text-xs font-normal bg-slate-50 text-black rounded-full ">
                  20 May 2023
                </div>
                <div className="w-fit h-fit p-1.5 text-base font-normal bg-slate-50 text-center text-black rounded-full flex justify-center items-center">
                  <Icon icon="fluent:bookmark-16-regular" />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="pr-4 mb-4 mt-2">
                  <span className="text-sm text-gray-500">Associate</span>
                  <h4 className="">
                    Junior Software <br /> Engineer
                  </h4>
                </div>
                <div className="w-fit h-fit p-1 rounded-full bg-black mt-10 text-xl">
                  <Icon icon="cib:amazon" color="white" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <div className="rounded-full border border-gray-500 w-fit py-1 px-2">
                  Part Time
                </div>
                <div className="rounded-full border border-gray-500 w-fit py-1 px-2 ">
                  Junior Level
                </div>
                <div className="rounded-full border border-gray-500 w-fit py-1 px-2">
                  Distant
                </div>
                <div className="rounded-full border border-gray-500 w-fit py-1 px-2">
                  Project Work
                </div>
              </div>
            </div>
            <div className="flex justify-between p-3">
              <div>
                <p className="text-sm font-bold">$25 LPA</p>
                <p className="text-sm text-gray-500">San Fransisco CA</p>
              </div>
              <button className="bg-black rounded-full w-fit h-fit px-3 text-white text-sm py-2">
                Details
              </button>
            </div>
          </div>

        </div>
      </div>
      
    </>
  );
}

export default JobsBody;
