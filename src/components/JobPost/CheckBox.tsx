import React from "react";
import {Checkbox, cn} from "@nextui-org/react";


export default function CheckbBx(props:any) {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <Checkbox       
      
      classNames={{
        base: cn(
          "inline-flex max-w-sm md:max-w-lg lg:w-1/2 mt-5 ml-1",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-2xl gap-2  border-2 border-gray-200",
          "data-[selected=true]:border-primary",
        ),
        // label: "w-full",
      }}
      isSelected={isSelected}
      onValueChange={setIsSelected}
    >
      <div className="">
      
      <p className="text-default-600 text-sm ">{props.label}</p>
        <p className=" text-default-400 text-sm">{props.sublabel}</p>
      </div>
      
    </Checkbox>
  );
}
