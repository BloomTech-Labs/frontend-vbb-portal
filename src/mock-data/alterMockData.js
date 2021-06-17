/* global require __dirname */

// leaving this here in case someone else needs to make alterations to the mock data in the future
// just change the properties inside of the map, and it will save them to the json file
const fs = require('fs');
const path = require('path');

const data = require('./MOCK_DATA.json');

const newData = data.map((e) => ({
  ...e,
  user_type: Math.random() > 0.2 ? 'student' : 'mentor',
}));

fs.writeFileSync(
  path.resolve(__dirname, './MOCK_DATA.json'),
  JSON.stringify(newData, null, 4)
);
