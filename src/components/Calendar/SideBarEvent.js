import React, { useEffect, useState } from 'react';
import { useManageStatus } from '../../hooks';

import {
  deriveStatus,
  meetingStatus,
  meetingStatusToClassName,
} from '../../util';

const { EXPIRED } = meetingStatus;

function SideBarEvent({
    event,
    forceRender,
    setClickSelected,
    showModal,
}) {
  const { start, end, eventStatus: checkedIn } = event;
  const [status, setStatus] = useState(deriveStatus({ start, end, checkedIn }));

  useManageStatus({
    checkedIn,
    end,
    setStatus,
    start,
    status,
  });

  useEffect(() => {
    forceRender()
  }, [status]);

  return (
    <div
      onClick={() => {
        showModal();
        setClickSelected({ ...event });
      }}
      className={`${meetingStatusToClassName[status]} event`}
    >
      {status === EXPIRED
        ? (<h5>
            {event.student} - <span className="no-show-span">no show</span>
          </h5>
        ) : (<h5>{event.student}</h5>)
      }
      <p>
        {event.mentor === ''.trim()
          ? 'No mentor has been assigned'
          : `${event.title} with ${event.mentor}.`
        }
      </p>
    </div>
  );
}

export default SideBarEvent;
