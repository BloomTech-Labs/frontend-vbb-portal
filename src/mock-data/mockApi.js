import data from './MOCK_DATA.json';

const userTypes = { STUDENT: 'student', MENTOR: 'mentor' };

export const getAllUsers = () => {
  return Promise.resolve(data);
};

export const getAllStudents = () => {
  return Promise.resolve(data.filter((e) => e.user_type === userTypes.STUDENT));
};

export const getAllMentors = () => {
  return Promise.resolve(data.filter((e) => e.user_type === userTypes.MENTOR));
};

export const getUserById = (id) => {
  const user = data.find((e) => e.id === id);
  return new Promise((resolve, reject) => {
    if (user) {
      resolve(user);
    } else {
      reject({ message: `no user with id ${id} found` });
    }
  });
};

const defaultSearchOptions = {
  userTypes: [],
  limit: 10,
  offset: 0,
};

export const searchUsers = (query, options) => {
  const mergedOptions = {
    ...defaultSearchOptions,
    ...(Object.prototype.toString.call(options) === '[object Object]' // I blame js for this one, it has some strange ideas about types
      ? options
      : {}),
  };

  const match = (obj, key) => {
    return (
      query.length <= obj[key].length &&
      query === obj[key].slice(0, query.length).toLowerCase()
    );
  };

  const queryIncludes = (userType) => {
    return (
      mergedOptions.userTypes.length === 0 ||
      mergedOptions.userTypes.includes(userType)
    );
  };

  // if no query is provided, return an object with empty arrays of each requested userType
  if (!query?.length) {
    return Promise.resolve(
      Object.values(userTypes).reduce((acc, curr) => {
        if (queryIncludes(curr)) {
          acc[curr] = [];
        }
        return acc;
      }, {})
    );
  }

  // sort/filter users into arrays of requested userTypes, where their name matches the provided query
  const result = Object.values(userTypes).reduce((acc, curr) => {
    if (queryIncludes(curr)) {
      acc[curr] = data
        .filter(
          (e) =>
            e.user_type === curr &&
            (match(e, 'first_name') || match(e, 'last_name'))
        )
        .slice(
          mergedOptions.offset,
          mergedOptions.offset + mergedOptions.limit
        );
    }
    return acc;
  }, {});

  return Promise.resolve(result);
};

export const createUser = (user) => {
  console.log(data);
  const id = data[data.length - 1].id + 1;
  data.push({ id, ...user });
  return Promise.resolve({ id, message: 'created successfully' });
};

export const editUser = (id, changes) => {
  const i = data.findIndex((e) => e.id === id);
  if (i > -1) {
    data[i] = { ...data[i], ...changes };
  }
  return new Promise((resolve, reject) => {
    if (i > -1) {
      resolve(data[i]);
    } else {
      reject({ message: `no user with id ${id} found` });
    }
  });
};

export const deleteUser = (id) => {
  const i = data.findIndex((e) => e.id === id);
  if (i > -1) {
    data.splice(i, 1);
  }
  return new Promise((resolve, reject) => {
    if (i > -1) {
      resolve({ message: 'deletion successful' });
    } else {
      reject({ message: `no user with id ${id} found` });
    }
  });
};
