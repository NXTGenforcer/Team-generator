const inquirer = require("inquirer");
const fs = require("fs");
const teamArr = [];
const cardArr = [];
// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const teamDiv = ``;

function EngineerInfo() {
  const icon = `<i class="fa-solid fa-mug-hot fa-lg text-light">Engineer</i>`;
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      question: "What is the engineer's Github username?",
    },
  ]);
}

function ManagerInfo() {
  const icon = `<i class="fa-solid fa-mug-hot fa-lg text-light">Manager</i>`;
  return inquirer.prompt([
    {
      type: "input",
      name: "officeNum",
      question: "What is the Manager's Office number?",
    },
  ]);
}

function InternInfo() {
  const icon = `<i class="fa-solid fa-user-graduate text-light">Intern</i>`;
  return inquirer.prompt([
    {
      type: "input",
      name: "school",
      question: "What is the Intern's school?",
    },
  ]);
}

function newMember() {
  return inquirer.prompt([
    {
      type: "confirm",
      name: "newMember",
      question: "Would you like to add another team member?",
    },
  ]);
}

function init() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "EmployeeRole",
        choices: ["Engineer", "Manager", "Intern"],
      },
      {
        type: "input",
        name: "name",
        question: "What is the employee's name?",
      },
      {
        type: "input",
        name: "email",
        question: "What is the employee's email?",
      },
      {
        type: "input",
        name: "id",
        question: "What is the employee's Id number?",
      },
    ])
    .then(async ({ name, email, id, EmployeeRole }) => {
      let specificRole = {};
      if (EmployeeRole === "Engineer") {
        const { github } = await EngineerInfo();
        const newEngineer = new Engineer(name, email, id, github);
        teamArr.push(newEngineer);
      } else if (EmployeeRole === "Manager") {
        const { officeNum } = await ManagerInfo();
        const newManager = new Manager(name, email, id, officeNum);
        teamArr.push(newManager);
      } else {
        const { school } = await InternInfo();
        const newIntern = new Intern(name, email, id, school);
        teamArr.push(newIntern);
      }
      const { newMember } = await newMember();
      if (newMember) {
        init();
      }
    })
    .then(async ({ EmployeeRole }) => {
      for (let i = 0; i < teamArr.length; i++) {
        if (EmployeeRole === "Engineer") {
          engineerCard();
        } else if (EmployeeRole === "Manager") {
          managerCard();
        } else {
          internCard();
        }
      }
      teamDiv.push(cardArr.toString());
    });
}

function engineerCard({ name, email, id, github }) {
  const engineerCard = `<div class="card engineer-card" style="width: 12rem;">
      <div class="card-header bg-primary">
          <h5 class="card-name text-light">${name}</h5>
          <i class="fa-solid fa-mug-hot fa-lg text-light">Manager</i>
      </div>
      <div class="card-body">
          <li class="list-group-item id">ID:${id}</li>
          <li class="list-group-item email">Email:${email}</li>
          <li class="list-group-item office-num">Office Number:${github}</li>
      </div>
  </div>`;
  cardArr.push(engineerCard);
}

function managerCard({ name, email, id, officeNum }) {
  const managerCard = `<div class="card manager-card" style="width: 12rem;">
      <div class="card-header bg-primary">
          <h5 class="card-name text-light">${name}</h5>
          <i class="fa-solid fa-mug-hot fa-lg text-light">Manager</i>
      </div>
      <div class="card-body">
          <li class="list-group-item id">ID:${id}</li>
          <li class="list-group-item email">Email:${email}</li>
          <li class="list-group-item office-num">Office Number:${officeNum}</li>
      </div>
  </div>`;
  cardArr.push(managerCard);
}

function internCard({ name, email, id, school }) {
  const internCard = `<div class="card intern-card" style="width: 12rem;">
      <div class="card-header bg-primary">
          <h5 class="card-name text-light">${name}</h5>
          <i class="fa-solid fa-mug-hot fa-lg text-light">Manager</i>
      </div>
      <div class="card-body">
          <li class="list-group-item id">ID:${id}</li>
          <li class="list-group-item email">Email:${email}</li>
          <li class="list-group-item office-num">Office Number:${school}</li>
      </div>
  </div>`;
  cardArr.push(internCard);
}

function writeToFile() {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team builder</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  
  <body>
      <ul class="nav navbar-expand-lg justify-content-center bg-danger">
          <li class="nav-item">
              <h1 class="text-light">My Team</h1>
          </li>
      </ul>
      <div class="container justify-content-evenly row">${teamDiv}</div>
    </body>`;
}

init();
