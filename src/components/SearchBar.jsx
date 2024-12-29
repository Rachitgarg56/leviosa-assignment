import { useState } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { FaSearch } from 'react-icons/fa'; // Import search icon

const ExpandingSearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <MDBContainer>
      <div className="relative flex items-center">
        <div
          className={`flex items-center transition-all duration-300 ${isExpanded ? 'w-64' : 'w-12'} cursor-pointer`}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div className='bg-white p-2 rounded-lg absolute right-0'>
            <FaSearch className="text-gray-400 font-light" />
          </div>
          <input
            type="text"
            className={`border border-gray-300 rounded-lg p-2 pr-8 transition-all duration-300 ease-in-out absolute right-0 bg-white shadow-md ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}
            placeholder="Search..."
            style={{ width: isExpanded ? '100%' : '0', right: isExpanded ? '0' : '-100%' }}
          />
        </div>
      </div>
    </MDBContainer>
  );
};

export default ExpandingSearchBar;