import React from 'react';

import '../../less/index.less';

const StudentInfoDisplay = (props) => {
  return (
    <>
      {props.user ? (
        <>
          <div className="font-weight-bold">
            <h3>{`${props.user.first_name} ${props.user.last_name}`}</h3>
            <h4>ID: {props.user.id}</h4>
            <p>DOB: {props.user.date_of_birth}</p>
            <p>
              Email:{' '}
              <a
                href={`mailto:${props.user.personal_email}`}
                className="color-blue"
              >
                {props.user.personal_email}
              </a>
            </p>
            <p>Cell: <a href={`tel:${props.user.phone}`}>{props.user.phone}</a></p>
            <p>
              Location:{' '}
              <a
                href={`https://maps.google.com/maps?q=${props.user.city}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.user.city}
              </a>
            </p>
          </div>
        </>
      ) : null}
    </>
  );
};

export default StudentInfoDisplay;
