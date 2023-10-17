import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";

interface DropdownItem {
  key: string;
  label: string;
}

interface DropdownProps {
    onChange?: (value: string) => void;
  }


const Dropdown: React.FC<DropdownProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("week");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const dropdownItems: DropdownItem[] = [
    {
      key: "today",
      label: "Today",
    },
    {
      key: "week",
      label: "Last 7 days",
    },
    {
      key: "month",
      label: "Last month",
    },
    {
      key: "year",
      label: "This year",
    },
  ];

  const handleClickOutside = (event: { target: any }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between space-x-4 border border-gray-600 rounded-lg px-4 py-2 bg-[#0a0a0a] hover:border-gray-400 focus:border-gray-100 focus:shadow-inner focus:shadow-slate-200 text-gray-400 hover:text-[#ededed]"
        >
          <div className="pr-2">
            <FiCalendar />
          </div>
          {dropdownItems.find((item) => item.key === selectedValue)?.label}
          <IoIosArrowDown />
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-64 border border-gray-600 rounded-lg">
            {dropdownItems.map((item) => (
              <div
                key={item.key}
                className="cursor-pointer bg-[#0a0a0a] text-secondary hover:bg-blackbean p-2"
                onClick={() => {
                    setSelectedValue(item.key);
                    setIsOpen(false);
                    if (onChange) {
                      onChange(item.key);
                    }
                  }}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
