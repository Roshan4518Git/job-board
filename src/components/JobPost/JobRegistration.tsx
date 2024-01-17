import { useState, ChangeEvent, useMemo } from "react";
import { Icon } from "@iconify/react";

import { JobTypes } from "./JobTypes";
import { Input, Select, SelectItem } from "@nextui-org/react";
import CheckbBx from "./CheckBox";
function JobRegistration() {
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check if the file size is less than or equal to 1MB (1024 * 1024 bytes)
      if (file.size <= 1024 * 1024) {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        // You can handle the file or its URL as needed
      } else {
        setError(!error);
      }
    }
  };
  const [value, setValue] = useState("");
  const isInvalid = useMemo(() => {
    const urlRegex = /^(https||http?:\/\/[^.]+.{2,})$/;
    return urlRegex.test(value);

  }, [value]);
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="m-8">Basic Details</h2>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="imageInput"
        />
        <div
          className={`border-dashed border rounded-xl h-44 w-96  flex justify-center items-center flex-col  ${
            error ? "border-red-500" : "border-gray-400 "
          } p-4`}
        >
          <span className="text-base text-blue-900">Opportunity Logo</span>
          <label
            htmlFor="imageInput"
            className="cursor-pointer h-full w-full flex justify-center items-center"
          >
            {image ? (
              <img src={image} alt="Selected" className="w-20 h-16 rounded" />
            ) : (
              <>
                {error ? (
                  <p className="text-red-500">
                    File size should be less than or equal to 1MB
                  </p>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-500 w-10 h-10 rounded-full p-2">
                      <Icon
                        icon="ic:round-upload"
                        className=" text-white text-2xl"
                      />
                    </div>

                    <p className="text-blue-500 font-medium">
                      Click here to upload
                    </p>
                    <span className="text-sm text-gray-500 ">
                      Max size of image cannot exceed 1 MB
                    </span>
                  </div>
                )}
              </>
            )}
          </label>
        </div>
      </div>
      <Select
        isRequired
        label="Opportunity Type"
        placeholder="Enter the opportunity type"
        className="md:w-1/2 border-2 rounded-2xl w-96 mt-5 -z-10"
      >
        {JobTypes.map((jobType) => (
          <SelectItem key={jobType.value} value={jobType.value}>
            {jobType.label}
          </SelectItem>
        ))}
      </Select>
      <Input
        isRequired
        type="text"
        label="Opportunity Title"
        className="md:w-1/2 w-96 border-2 rounded-2xl mt-5"
        placeholder="Enter the opportunity title"
      />
      <div className="flex flex-col w-96 justify-center md:w-1/2 md:justify-center lg:flex-row lg:w-1/2 lg:justify-between">
        <CheckbBx
          label="Open Publically on PowerTech"
          sublabel="will be visible to all powertech user"
        />
        <CheckbBx
          label="Invite with Link"
          sublabel="will be visible to only shared candidate"
        />
      </div>
      <Input
        isRequired
        type="text"
        label="Organization Name"
        className="md:w-1/2 w-96 border-2 rounded-2xl mt-5"
        placeholder="Enter your organization name"
      />
      <Input
        isRequired
        type="url"
        value={value}
          label="Website"
          placeholder="powertech.com"
          labelPlacement="inside"
          isInvalid={isInvalid}
          // color={isInvalid ? "danger" : "text-default-400"}
          errorMessage={isInvalid && "Please enter a valid email"}
          onValueChange={setValue}
          className="md:w-1/2 w-96 border-2 rounded-2xl mt-5"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-blue-500 text-small">https://</span>
            </div>
          }
      />
      
    </div>
  );
}

export default JobRegistration;
