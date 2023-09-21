import React, { useState } from "react";

interface DropdownProps {
  onSelectionChange: (selected: string) => void;
  selectedSubject: string | null;
}

const Dropdown: React.FC<DropdownProps> = ({ onSelectionChange, selectedSubject  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const buttonNames = ["UX Design", "Web Design", "App Design", "I'm not sure"];

  return (
    <>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-none text-black border border-falured p-2 rounded-full w-full"
        >
          What do you need?
        </button>

        {isOpen && (
          <div className="mt-2 grid grid-cols-3 gap-2">
            {buttonNames.map((name) => (
              <button
                type="button"
                key={name}
                onClick={() => onSelectionChange(name)}
                className={`appearance-none hover:bg-cinnabar hover:text-white  border border-falured rounded-full w-full py-0.5 px-3  ${
                  selectedSubject === name
                    ? "bg-cinnabar text-white item-shadow"
                    : "bg-white text-third"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
