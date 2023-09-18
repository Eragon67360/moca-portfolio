import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <>
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-none text-black border border-falured p-2 rounded-full flex justify-between w-full"
      >
        {selectedItem || 'Subject'}
        {!selectedItem && <span className={`ml-2 transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>}
      </button>
      
      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <a onClick={() => handleItemClick('Request a new design for your website')} className="block px-4 py-2 text-falured hover:bg-falured hover:text-white" role="menuitem">Request a new design for your website</a>
            <a onClick={() => handleItemClick('Request a brand new website')} className="block px-4 py-2 text-falured hover:bg-falured hover:text-white" role="menuitem">Request a brand new website</a>
            <a onClick={() => handleItemClick('...')} className="block px-4 py-2 text-falured hover:bg-falured hover:text-white" role="menuitem">...</a>
          </div>
        </div>
      )}
    </div></>
  );
}

export default Dropdown;