import React from 'react';

import '../../less/index.less';

const StudentInfoDisplay = (props) => {
  return (
    <>
      {props.user ? (
        <>
          <div className="font-weight-bold">
            <h3>ID: {props.user.id}</h3>
            <h1>{props.user.full_name}</h1>
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
            <p>Cell: {props.user.phone}</p>
            <p>
              Location:{' '}
              <a
                href={`http://maps.google.com/maps?q= ${props.user.city}`}
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
