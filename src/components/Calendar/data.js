export const myEventsList = [{
    title: 'test',
    start: new Date(2021, 3, 27, 15, 24, 0),
    end: new Date(2021, 3, 27, 16, 24, 0),
    allDay: false,
  }]

  export const events = [
    {
      id: 0,
      title: 'Board meeting',
      start: new Date(2021, 3, 27, 9, 0, 0),
      end: new Date(2021, 3, 27, 9, 30, 0),
      availableComputers: 3,
      resourceId: 1,
    },
    {
      id: 1,
      title: 'MS training',
      start: new Date(2021, 3, 27, 10, 0, 0),
      end: new Date(2021, 3, 27, 10, 30, 0),
      availableComputers: 8,
      resourceId: 2,
    },
    {
      id: 2,
      title: 'Team lead meeting',
      start: new Date(2021, 3, 27, 8, 30, 0),
      end: new Date(2021, 3, 27, 9, 0, 0),
      availableComputers: 8,
      resourceId: 3,
    },
    {
      id: 11,
      title: 'Birthday Party',
      start: new Date(2021, 3, 27, 7, 0, 0),
      end: new Date(2021, 3, 27, 7, 30, 0),
      availableComputers: 7,
      resourceId: 4,
    },
    {
      id: 12,
      title: 'Dog Walking',
      start: new Date(2021, 3, 28, 7, 0, 0),
      end: new Date(2021, 3, 28, 7, 30, 0),
      availableComputers: 5,
      resourceId: 5,
    },
  ]
  
  const resourcesArray = ['computer 1', 'computer 2', 'computer 3', 'computer 4', 'computer 5', 'computer 6', 'computer 7', 'computer 8', 'computer 9', 'computer 10']
  export const resourceMap = resourcesArray.map((computer, index) => {
    return {resourceId: index + 1, resourceTitle: computer}
  })