import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Icon } from "@iconify/react/dist/iconify.js";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Dropdown(props: any) {
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 border-r border-white border-opacity-50  p-5  text-sm font-semibold text-gray-300">
          {props.object.icon1}
          {props.object.name}
          <Icon
            icon="icon-park-solid:down-one"
            className=" md:m-auto md:ml-5 "
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {
            props.object.list.map((item: any, index: number) => {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {item}
                    </a>
                  )}
                </Menu.Item>
              );
            })
          }
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
export default Dropdown;
