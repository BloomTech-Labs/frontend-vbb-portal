//mock data because we don't have a backend to work with
export const events = [
  {
    id: 0,
    title: 'Board meeting',
    start: new Date(Date.UTC(2021, 5, 22, 8, 0, 0)),
    end: new Date(Date.UTC(2021, 5, 22, 8, 30, 0)),
    availableComputers: 3,
    unavailableComputers: 6,
    mentor: 'Liz',
    student: 'Pete',
    resourceId: 1,
    eventStatus: false,
  },
  {
    id: 1,
    title: 'MS training',
    start: new Date(Date.UTC(2021, 5, 22, 12, 0, 0)),
    end: new Date(Date.UTC(2021, 5, 22, 12, 30, 0)),
    availableComputers: 8,
    unavailableComputers: 5,
    mentor: 'Maple',
    student: 'Alley',
    resourceId: 2,
    eventStatus: false,
  },
  {
    id: 2,
    title: 'Team lead meeting',
    start: new Date(Date.UTC(2021, 5, 22, 23, 30, 0)),
    end: new Date(Date.UTC(2021, 5, 22, 23, 0, 0)),
    availableComputers: 8,
    unavailableComputers: 2,
    mentor: 'Morgan',
    student: 'Ares',
    resourceId: 3,
    eventStatus: false,
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(Date.UTC(2021, 5, 22, 14, 0, 0)),
    end: new Date(Date.UTC(2021, 5, 22, 14, 30, 0)),
    availableComputers: 7,
    unavailableComputers: 3,
    mentor: 'Calli',
    student: 'Carlos',
    resourceId: 4,
    eventStatus: true,
  },
  {
    id: 12,
    title: 'Dog Walking',
    start: new Date(Date.UTC(2021, 5, 22, 19, 0, 0)),
    end: new Date(Date.UTC(2021, 5, 22, 19, 30, 0)),
    availableComputers: 5,
    unavailableComputers: 3,
    mentor: 'Leo',
    student: 'Nyx',
    //resourceId is a required field in order to map to the resources in day view
    resourceId: 5,
    eventStatus: false,
  },
  {
    id: 13,
    title: 'Stand Up Meeting',
    start: new Date(Date.UTC(2021, 4, 18, 19, 0, 0)),
    end: new Date(Date.UTC(2021, 4, 18, 19, 30, 0)),
    availableComputers: 5,
    unavailableComputers: 3,
    mentor: 'Atlyn',
    student: 'Adela',
    //resourceId is a required field in order to map to the resources in day view
    resourceId: 6,
    eventStatus: true,
  },
  {
    id: 14,
    title: 'StakeHolder Meeting',
    start: new Date(Date.UTC(2021, 1, 18, 19, 0, 0)),
    end: new Date(Date.UTC(2021, 1, 18, 19, 30, 0)),
    availableComputers: 5,
    unavailableComputers: 3,
    mentor: 'CEO',
    student: 'Danielle',
    //resourceId is a required field in order to map to the resources in day view
    resourceId: 7,
    eventStatus: false,
  },
];

export const mentors = ['Leo', 'Calli', 'Morgan'];
export const students = ['Nyx', 'Steven', 'Morgan'];

const resourcesArray = [
  'computer 1',
  'computer 2',
  'computer 3',
  'computer 4',
  'computer 5',
  'computer 6',
  'computer 7',
  'computer 8',
  'computer 9',
  'computer 10',
];

//resource map is needed for the resource view
export const resourceMap = resourcesArray.map((computer, index) => {
  return { resourceId: index + 1, resourceTitle: computer };
});
