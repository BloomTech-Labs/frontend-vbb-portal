import { connect } from 'react-redux';

import '../../less/Modal.less';
import { createModal } from '../../redux/actions';
import StudentInfoModal from '../StudentInfo/StudentInfoModal';

const SearchResultsList = ({ title, results, createModal }) => {
  return (
    <div>
      <h5>{title}</h5>
      <ul className="search-result-list">
        {results.map((e) => (
          <li
            key={e.id}
            className="searchBar"
            onClick={() => createModal(<StudentInfoModal user={e} />)}
          >
            {' '}
            {`${e.first_name} ${e.last_name}`}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(null, { createModal })(SearchResultsList);
