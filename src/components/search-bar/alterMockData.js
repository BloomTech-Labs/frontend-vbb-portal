/* global require __dirname */
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
