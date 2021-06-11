import { useState, useCallback, useRef, useEffect } from 'react';
import { Input } from 'antd';

import SearchField from './SearchField';
import { searchUsers } from '../../mock-data/mockApi';

const { Search } = Input;

const SearchBar = () => {
  const [value, setValue] = useState({ name: '' });
  const [toggle, setToggle] = useState(false);
  const [results, setResults] = useState({ student: [], mentor: [] });

  const barRef = useRef();
  const fieldRef = useRef();

  useEffect(() => {
    searchUsers(value.name).then((data) => setResults(data));
  }, [value]);

  const handleClickOutside = useCallback((event) => {
    if (
      !barRef.current?.contains(event.target) &&
      !fieldRef.current?.contains(event.target)
    ) {
      setToggle(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, [handleClickOutside]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div ref={barRef} style={{ width: '80%' }}>
        <Search
          type="text"
          enterButton="Search"
          onChange={(e) => setValue({ ...value, name: e.target.value })}
          onClick={() => setToggle(true)}
        />
      </div>
      {toggle && (
        <div ref={fieldRef} style={{ width: '80%' }}>
          <SearchField results={results} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
