import { Link } from 'react-router-dom';
import { Card } from 'antd';

import '../../less/Modal.less';
import SearchResultsList from './SearchResultsList';

//setting up perma features first
const features = [
  { name: 'Calendar', url: '/calendar/' },
  { name: 'Donate', url: '/donate/' },
  { name: 'Sign up', url: '/signup/' },
  { name: 'Sign in', url: '/signin/' },
  { name: 'Booking', url: '/booking/' },
  { name: 'Dashboard', url: '/' },
  { name: 'Register', url: '/register/' },
  { name: 'Create Mentor', url: '' },
];

const SearchField = ({ setToggle, results }) => {
  return (
    <Card
      style={{
        backgroundColor: 'rgba(255,255,255,2.5)',
        width: '100%',
        margin: '0',
        overflow: 'hidden',
        overflowY: 'scroll',
        maxHeight: '40vh',
      }}
    >
      {!!results.student?.length && (
        <SearchResultsList title="Students" results={results.student} />
      )}
      {!!results.mentor?.length && (
        <SearchResultsList title="Mentors" results={results.mentor} />
      )}
      {Object.values(results).every((e) => !e.length) && (
        <p>
          Need to register a new student? Click{' '}
          <Link onClick={() => setToggle(false)} to={'/register/'}>
            {' '}
            here{' '}
          </Link>
          to register.
        </p>
      )}
      {features.map((feature) => (
        <Link
          key={feature.name}
          style={{ margin: '5px' }}
          to={`${feature.url}`}
          onClick={() => setToggle(false)}
        >
          {' '}
          {`${feature.name}`}{' '}
        </Link>
      ))}
    </Card>
  );
};

export default SearchField;
