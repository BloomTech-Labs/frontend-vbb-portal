//mock data because we don't have a backend to work with
export const events = [
  {
    id: 0,
    title: 'Board meeting',
    start: new Date(Date.UTC(2021, 4, 17, 18, 0, 0)),
    end: new Date(Date.UTC(2021, 4, 17, 18, 30, 0)),
    availableComputers: 3,
    unavailableComputers: 6,
    mentor: 'Liz',
    student: '',
    resourceId: 1,
  },
  {
    id: 1,
    title: 'MS training',
    start: new Date(Date.UTC(2021, 4, 17, 19, 0, 0)),
    end: new Date(Date.UTC(2021, 4, 17, 19, 30, 0)),
    availableComputers: 8,
    unavailableComputers: 5,
    mentor: 'Maple',
    student: 'Alley',
    resourceId: 2,
  },
  {
    id: 2,
    title: 'Team lead meeting',
    start: new Date(Date.UTC(2021, 4, 17, 15, 30, 0)),
    end: new Date(Date.UTC(2021, 4, 17, 16, 0, 0)),
    availableComputers: 8,
    unavailableComputers: 2,
    mentor: 'Morgan',
    student: 'Ares',
    resourceId: 3,
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(Date.UTC(2021, 4, 17, 14, 0, 0)),
    end: new Date(Date.UTC(2021, 4, 17, 14, 30, 0)),
    availableComputers: 7,
    unavailableComputers: 3,
    mentor: 'Calli',
    student: '',
    resourceId: 4,
  },
  {
    id: 12,
    title: 'Dog Walking',
    start: new Date(Date.UTC(2021, 4, 18, 19, 0, 0)),
    end: new Date(Date.UTC(2021, 4, 18, 19, 30, 0)),
    availableComputers: 5,
    unavailableComputers: 3,
    mentor: 'Leo',
    student: 'Nyx',
    //resourceId is a required field in order to map to the resources in day view
    resourceId: 5,
  },
]

export const mentors = ['Leo','Calli','Morgan']
export const students = ['Nyx','Steven','Morgan']
export const startTime = ['10am','11am','12pm']
export const endTime = ['11am','12pm','1pm']


const resourcesArray = ['computer 1', 'computer 2', 'computer 3', 'computer 4', 'computer 5', 'computer 6', 'computer 7', 'computer 8','computer 9','computer 10']

//resource map is needed for the resource view
export const resourceMap = resourcesArray.map((computer, index) => {
  return {resourceId: index + 1, resourceTitle: computer}
})

