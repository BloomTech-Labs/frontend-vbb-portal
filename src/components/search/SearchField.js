import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { connect } from 'react-redux';

import '../../less/index.less';
// import '../../less/Modal.less';

import SearchResultsList from './SearchResultsList';
import MenteeForm from '../registration/MasterFormMentee';
import { createModal } from '../../redux/actions';

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

const SearchField = ({ setToggle, results, createModal }) => {
  return (
    <Card className="width-100 margin-0 overflow-hidden overflow-Y-scroll background-color-rgba-255-255-255-2_5 max-height-40vh">
      {!!results.student?.length && (
        <SearchResultsList title="Students" results={results.student} />
      )}
      {!!results.mentor?.length && (
        <SearchResultsList title="Mentors" results={results.mentor} />
      )}
      {Object.values(results).every((e) => !e.length) && (
        <p>
          Need to register a new student? Click{' '}
          <span onClick={() => createModal(<MenteeForm />)}>
            {' '}
            <strong className="color-FF914D">here</strong>{' '}
          </span>
          to register.
        </p>
      )}
      {features.map((feature) => (
        <Link
          key={feature.name}
          className="margin-5"
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

export default connect(null, { createModal })(SearchField);
