import { useState, useCallback, useRef, useEffect } from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';

import SearchField from './SearchField';
import { searchUsers } from '../../mock-data/mockApi';
import { createModal } from '../../redux/actions';
import StudentInfoModal from '../StudentInfo/StudentInfoModal';

import '../../less/index.less';

const { Search } = Input;

const LIMIT = 50;

const SearchBar = ({ createModal }) => {
  const [value, setValue] = useState('');
  const [toggle, setToggle] = useState(false);
  const [results, setResults] = useState({});

  const clickAwayRef = useRef();

  useEffect(() => {
    if (value.length) {
      const parts = value.split(':').map((e) => e.trim());
      if (parts.length > 1) {
        searchUsers(parts[1], {
          userTypes: [parts[0]],
          limit: LIMIT,
        }).then((data) => setResults(data));
      } else {
        searchUsers(parts[0], { limit: LIMIT }).then((data) =>
          setResults(data)
        );
      }
    } else {
      setResults({});
    }
  }, [value]);

  const handleClickOutside = useCallback((event) => {
    if (!clickAwayRef.current?.contains(event.target)) {
      setToggle(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, [handleClickOutside]);

  const handlePressEnter = () => {
    const user = Object.values(results)?.[0]?.[0];
    if (user) {
      createModal(<StudentInfoModal user={user} />);
    }
  };

  return (
    <div className="flex justify-center">
      <div ref={clickAwayRef} className="width-80">
        <Search
          type="text"
          enterButton="Search"
          onChange={(e) => setValue(e.target.value)}
          onClick={() => setToggle(true)}
          onPressEnter={handlePressEnter}
        />
        {toggle && <SearchField results={results} setToggle={setToggle} />}
      </div>
    </div>
  );
};

export default connect(null, { createModal })(SearchBar);
