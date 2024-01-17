import React, { useState } from 'react'

function InputBox(props:any) {
    const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: any) => {
    if (!e.target.value) {
      setIsFocused(false);
    }
  };
  return (
    <div>
        <div className="relative mt-5 ">
            <input
              type="text"
              className="border-b-2 bg-transparent border-gray-300 outline-none p-3 w-full transition-all"
              placeholder=" "
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label
              className={`absolute left-0 transition-all ${
                isFocused || isFocused
                  ? "text-primary -top-3 text-sm"
                  : "top-2 text-gray-500 text-base"
              }`}
            >
              {props.label}
            </label>
          </div>
    </div>
  )
}

export default InputBox