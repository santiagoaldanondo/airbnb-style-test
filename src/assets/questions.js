const question1 = {
  name: 'Question 1',
  topic: 'Objects',
  title: 'What is the correct way to instantiate an object?',
  options: [{
    code: true,
    letter: 'a',
    content: 'const item = { };',
  }, {
    code: true,
    letter: 'b',
    content: 'const item = new Object();',
  }],
};

const question2 = {
  name: 'Question 2',
  topic: 'Objects',
  title: 'Given the following function, what is the correct way for creating an object with that dynamic property name?',
  info: `function myFunction(k) {
  return k;
}`,
  options: [{
    code: true,
    letter: 'a',
    content: `const obj = {
  id: 5,
  name: 'San Francisco',
  };
obj[myFunction('enabled')] = true;`,
  }, {
    code: true,
    letter: 'b',
    content: `const obj = {
  id: 5,
  name: 'San Francisco',
  [myFunction('enabled')]: true,
};`,
  }],
};

const question3 = {
  name: 'Question 3',
  topic: 'Objects',
  title: 'How would you properly use object method shorthand?',
  options: [{
    code: true,
    letter: 'a',
    content: `const atom = {
  value: 1,
  addValue(value) {
    return atom.value + value;
  },
};`,
  }, {
    code: true,
    letter: 'b',
    content: `const atom = {
  value: 1,
  addValue: function (value) {
    return atom.value + value;
  },
};`,
  }],
};

const question4 = {
  name: 'Question 4',
  topic: 'Objects',
  title: 'Given the following, how should you group shorthand properties?',
  info: `const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';`,
  options: [{
    code: true,
    letter: 'a',
    content: `const obj = {
  episodeOne: 1,
  twoJedisWalkIntoACantina: 2,
  lukeSkywalker,
  anakinSkywalker,
};`,
  }, {
    code: true,
    letter: 'b',
    content: `const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJedisWalkIntoACantina: 2,
};`,
  }],
};

const question5 = {
  name: 'Question 5',
  topic: 'Arrays',
  title: 'How would you copy the following array?',
  info: 'const items = [1, 2, 3, 4]',
  options: [{
    code: true,
    letter: 'a',
    content: 'const itemsCopy = [...items];',
  }, {
    code: true,
    letter: 'b',
    content: `const len = items.length;
const itemsCopy = [];
let i; 
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}`,
  }],
};

const question6 = {
  name: 'Question 6',
  topic: 'Destructuring',
  title: 'Which approach is better?',
  options: [{
    code: true,
    letter: 'a',
    content: `function getFullName({ firstName, lastName }) {
  return \`\${firstName} \${lastName}\`;
}`,
  }, {
    code: true,
    letter: 'b',
    content: `function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
  return \`\${firstName} \${lastName}\`;
}`,
  }],
};

const question7 = {
  name: 'Question 7',
  topic: 'Destructuring',
  title: 'If your function needs to return multiple values, what would you choose?',
  options: [{
    code: true,
    letter: 'a',
    content: `function processInput(input) {
  // after some processing, you get left, right, top and bottom
  return [ left, right, top, bottom ];
}`,
  }, {
    code: true,
    letter: 'b',
    content: `function processInput(input) {
  // after some processing, you get left, right, top and bottom
  return { left, right, top, bottom };
}`,
  }],
};

const question8 = {
  name: 'Question 8',
  topic: 'Functions',
  title: 'Named function expressions vs function declarations',
  options: [{
    code: true,
    letter: 'a',
    content: `function foo() {
  // ...
}`,
  }, {
    code: true,
    letter: 'b',
    content: `const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
};`,
  }, {
    code: true,
    letter: 'c',
    content: `const foo = function () {
  // ...
};`,
  }],
};

const question9 = {
  name: 'Question 9',
  topic: 'Functions',
  title: 'How should you use immediately invoked functions?',
  options: [{
    code: true,
    letter: 'a',
    content: `(function () {
  console.log('executing');
})();`,
  }, {
    code: true,
    letter: 'b',
    content: `function foo () {
  console.log('executing');
};
foo();`,
  }],
};

const question10 = {
  name: 'Question 10',
  topic: 'Arrow Functions',
  title: 'How should you use anonymous functions?',
  options: [{
    code: true,
    letter: 'a',
    content: `[1, 2, 3].map(function (x) {
      const y = x + 1;
      return x * y;
    });`,
  }, {
    code: true,
    letter: 'b',
    content: `[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});`,
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
  question8,
  question9,
  question10,
];
