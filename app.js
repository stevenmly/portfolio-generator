const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('=============');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

 
//  fs.writeFile('./index.html', pageHTML, err => {
//      if (err) throw err;

//      console.log('Portfolio complete! Check out index.html to see the output!');
//  });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));