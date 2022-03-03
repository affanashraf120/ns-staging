import { useState } from 'react';

import companyFilters from '../../data/employers.json';
import locationFilters from '../../data/locations.json';
import nurseTypeAndLocationFilters from '../../data/nurse-type-locations.json';
import nurseTypeFilters from '../../data/nurse-types.json';

const filterOptions = [
  'Location',
  'Nurse Type',
  'Nurse Type and Location',
  'Company',
];

const JobFilters = () => {
  const [activeFilter, setActiveFilter] = useState('Location');
  const onTabClick = (e: any, filterOption: string) => {
    e.preventDefault()
    setActiveFilter(filterOption)
  }
  const getFilters = () => {
    if (activeFilter === 'Location') return locationFilters;
    if (activeFilter === 'Nurse Type') return nurseTypeFilters;
    if (activeFilter === 'Nurse Type and Location')
      return nurseTypeAndLocationFilters;
    if (activeFilter === 'Company') return companyFilters;
    throw new Error('Invalid filter');
  };

  return (
    <div className='p-5 container mx-auto'>
      <h4 className="text-3xl font-medium mb-6 mt-20">Nurse Jobs By</h4>

      <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 ml-5 lg:ml-0 lg:space-x-10 font-medium border-b mb-5 text-gray-500">
        {filterOptions.map((filterOption: string, i) => (
          <div key={i}>
            <a
              href="#"
              onClick={(e) => onTabClick(e, filterOption)}
              className={`rounded hover:bg-gray-100 inline-block p-2 text-lg${filterOption === activeFilter ? 'border rounded-b-none border-b-2 border-black text-black' : ''}`}
            >
              {filterOption}
            </a>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 text-center lg:text-left gap-6 lg:gap-16 mt-10">
        {getFilters().map((filter, i) => (
          <a href={`${filter.slug}`} className="text-base" key={i}>{filter.name}</a>
        ))}
      </div>
    </div>
  );
};

export { JobFilters };
