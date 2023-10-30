import React, { useState } from "react";

interface DropdownProps {
  onSelectionChange: (selected: string) => void;
  selectedSubject: string | null;
  text: string;
  content: string[];
}

const Dropdown: React.FC<DropdownProps> = ({
  onSelectionChange,
  selectedSubject,
  text,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-secondary text-black border border-falured px-[18px] rounded-full w-full text-left text-xs sm:text-sm md:text-base lg:text-lg py-1"
        >
          {text}
        </button>

        {isOpen && (
          <div className="mt-2 flex flex-wrap gap-3">
            {content.map((name) => (
              <button
                type="button"
                key={name}
                onClick={() => onSelectionChange(name)}
                className="border border-falured rounded-full transform transition duration-500 hover:scale-110"
              >
                <div
                  className={`appearance-none hover:bg-cinnabar hover:text-white rounded-full w-full py-0.5 px-3  ${
                    selectedSubject === name
                      ? "bg-cinnabar text-white shadow-itemLightBox dark:shadow-itemDarkBox"
                      : "bg-white text-third"
                  }`}
                >
                  {name}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
