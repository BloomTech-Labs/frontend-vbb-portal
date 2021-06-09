import React, { useState, useCallback, useRef, useEffect } from 'react';
import SearchField from './SearchField';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = () => {
  const [value, setValue] = useState({ name: '' });
  const [toggle, setToggle] = useState(false);

  const barRef = useRef();
  const fieldRef = useRef();

  const handleClickSearchBar = () => {
    console.log('click');
    setToggle(true);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (
        !barRef.current?.contains(event.target) &&
        !fieldRef.current?.contains(event.target)
      ) {
        setToggle(false);
      }
    },
    [setToggle]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, [handleClickOutside]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div ref={barRef} style={{ width: '80%', margin: '0 100px' }}>
          <Search
            type="text"
            enterButton="Search"
            onChange={(e) => setValue({ ...value, name: e.target.value })}
            onClick={handleClickSearchBar}
          />
        </div>
      </div>
      <SearchField
        value={value}
        toggle={toggle}
        setToggle={setToggle}
        fieldRef={fieldRef}
      />
    </>
  );
};

export default SearchBar;
