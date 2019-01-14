const question1 = {
  name: 'question1',
  topic: 'Objects',
  title: 'What is the correct way to instantiate an object?',
  options: [{
    code: true,
    letter: 'a',
    ok: false,
    content: 'const item = { };',
  }, {
    code: true,
    letter: 'b',
    ok: false,
    content: 'const item = new Object();',
  }],
};

const question2 = {
  name: 'question2',
  topic: 'Objects',
  title: 'Given the following function, what is the correct way for creating an object with that dynamic property name?',
  info: `
function myFunction(k) {
  return k;
}`,
  options: [{
    code: true,
    letter: 'a',
    ok: false,
    content: `
const obj = {
  id: 5,
  name: 'San Francisco',
  };
obj[myFunction('enabled')] = true;`,
  }, {
    code: true,
    letter: 'b',
    ok: true,
    content: `
const obj = {
  id: 5,
  name: 'San Francisco',
  [myFunction('enabled')]: true,
};`,
  }],
};

const question3 = {
  name: 'question3',
  topic: 'Objects',
  title: 'How would you properly use object method shorthand?',
  options: [{
    code: true,
    letter: 'a',
    ok: true,
    content: `
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};`,
  }, {
    code: true,
    letter: 'b',
    ok: false,
    content: `
const atom = {
  value: 1,
  
  addValue: function (value) {
    return atom.value + value;
  },
};`,
  }],
};

const question4 = {
  name: 'question4',
  topic: 'Objects',
  title: 'Given the following, how should you group shorthand properties?',
  info: `
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';`,
  options: [{
    code: true,
    letter: 'a',
    ok: false,
    content: `
const obj = {
  episodeOne: 1,
  twoJedisWalkIntoACantina: 2,
  lukeSkywalker,
  anakinSkywalker,
};`,
  }, {
    code: true,
    letter: 'b',
    ok: true,
    content: `
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJedisWalkIntoACantina: 2,
};`,
  }],
};

const question5 = {
  name: 'question5',
  topic: 'Arrays',
  title: 'How would you copy the following array?',
  info: `
  const items = [1, 2, 3, 4]`,
  options: [{
    code: true,
    letter: 'a',
    ok: true,
    content: `
const itemsCopy = [...items];`,
  }, {
    code: true,
    letter: 'b',
    ok: false,
    content: `
const len = items.length;
const itemsCopy = [];
let i;
  
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}`,
  }],
};

const question6 = {
  name: 'question6',
  topic: 'Destructuring',
  title: 'Which approach is better?',
  options: [{
    code: true,
    letter: 'a',
    ok: true,
    content: `
function getFullName({ firstName, lastName }) {
  return \`\${firstName} \${lastName}\`;
}`,
  }, {
    code: true,
    letter: 'b',
    ok: false,
    content: `
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return \`\${firstName} \${lastName}\`;
}`,
  }],
};

const question7 = {
  name: 'question7',
  topic: 'Destructuring',
  title: 'If your function needs to return multiple values, what would you choose?',
  options: [{
    code: true,
    letter: 'a',
    ok: false,
    content: `
function processInput(input) {
  // after some processing, you get left, right, top and bottom
  return [ left, right, top, bottom ];
}`,
  }, {
    code: true,
    letter: 'b',
    ok: true,
    content: `
function processInput(input) {
  // after some processing, you get left, right, top and bottom
  return { left, right, top, bottom };
}`,
  }],
};

export default [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
];
