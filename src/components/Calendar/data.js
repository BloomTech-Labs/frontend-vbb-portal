export const events = [

  {
    id: 0,
    title: 'Board meeting',
    start: new Date(2021, 3, 27, 10, 0, 0),
    end: new Date(2021, 3, 27, 10, 30, 0),
    availableComputers: 3,
    unavailableComputers: 6,
    mentor: 'Liz',
    student: 'Henry',
    resourceId: 1,
  },
  {
    id: 1,
    title: 'MS training',
    start: new Date(2021, 3, 27, 10, 0, 0),
    end: new Date(2021, 3, 27, 10, 30, 0),
    availableComputers: 8,
    unavailableComputers: 5,
    mentor: 'Maple',
    student: 'Alley',
    resourceId: 2,
  },
  {
    id: 2,
    title: 'Team lead meeting',
    start: new Date(2021, 3, 27, 11, 30, 0),
    end: new Date(2021, 3, 27, 12, 0, 0),
    availableComputers: 8,
    unavailableComputers: 2,
    mentor: 'Morgan',
    student: 'Ares',
    resourceId: 3,
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2021, 3, 27, 11, 0, 0),
    end: new Date(2021, 3, 27, 11, 30, 0),
    availableComputers: 7,
    unavailableComputers: 3,
    mentor: 'Calli',
    student: 'Steven',
    resourceId: 4,
  },
  {
    id: 12,
    title: 'Dog Walking',
    start: new Date(2021, 3, 28, 10, 0, 0),
    end: new Date(2021, 3, 28, 10, 30, 0),
    availableComputers: 5,
    unavailableComputers: 3,
    mentor: 'Leo',
    student: 'Nyx',
    resourceId: 5,
  },
]

const resourcesArray = ['computer 1', 'computer 2', 'computer 3', 'computer 4', 'computer 5', 'computer 6', 'computer 7', 'computer 8', 'computer 9', 'computer 10']
export const resourceMap = resourcesArray.map((computer, index) => {
  return {resourceId: index + 1, resourceTitle: computer}
})
