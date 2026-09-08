import React from 'react';

const ProductDetails = ({ 
  details = [], 
  description, 
  showAll, 
  onToggleShowAll 
}) => {
  const displayItems = showAll ? details : details.slice(0, 8);
  const hasMoreItems = details.length > 8;

  if (!details.length && !description) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      {description && (
        <div className="flex flex-col">
          <h2 className="text-base font-bold text-[#1A202C] mb-3">Product Description</h2>
          <div className="text-sm text-[#4A5568] leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      )}

      {details.length > 0 && (
        <div className="flex flex-col">
          <h2 className="text-base font-bold text-[#1A202C] mb-3">Product Details</h2>
          <ul className="list-none p-0 m-0 flex flex-col gap-1.5">
            {displayItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#4A5568] text-sm leading-5">•</span>
                <span className="text-sm text-[#4A5568] font-medium leading-5">
                  <span className="font-medium">{item.label}: </span>
                  <span className="">{item.value}</span>
                </span>
              </li>
            ))}
          </ul>
          
          {hasMoreItems && (
            <button 
              className="mt-3 bg-transparent border-none text-brand text-sm font-semibold cursor-pointer p-0 text-left inline-block w-fit hover:underline" 
              onClick={onToggleShowAll}
            >
              {showAll ? 'View less' : 'View all'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
