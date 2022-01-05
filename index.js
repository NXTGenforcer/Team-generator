const inquirer = require("inquirer");
const fs = require("fs");
const teamArr = [];
const cardArr = [];
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

async function init() {
  const { name, email, id, EmployeeRole } = await inquirer.prompt([
    {
      type: "list",
      name: "EmployeeRole",
      choices: ["Engineer", "Manager", "Intern"],
    },
    {
      type: "input",
      name: "name",

      message: "What is the employee's name?",
    },
    {
      type: "input",
      name: "email",

      message: "What is the employee's email?",
    },
    {
      type: "input",
      name: "id",

      message: "What is the employee's Id number?",
    },
  ]);
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
  const { aMember } = await newMember();
  if (aMember) {
    return init();
  }
  for (let i = 0; i < teamArr.length; i++) {
    if (teamArr[i].getRole() === "Engineer") {
      engineerCard(teamArr[i]);
    } else if (teamArr[i].getRole() === "Manager") {
      managerCard(teamArr[i]);
    } else {
      internCard(teamArr[i]);
    }
  }
  writeToFile();
}

function EngineerInfo() {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is the engineer's Github username?",
    },
  ]);
}

function ManagerInfo() {
  return inquirer.prompt([
    {
      type: "input",
      name: "officeNum",
      message: "What is the Manager's Office number?",
    },
  ]);
}

function InternInfo() {
  return inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "What is the Intern's school?",
    },
  ]);
}

const newMember = () => {
  return inquirer.prompt([
    {
      type: "confirm",
      name: "aMember",
      message: "Would you like to add another team member?",
    },
  ]);
};

function engineerCard({ name, email, id, github }) {
  const engineerCard = `<div class="card engineer-card p-0" style="width: 12rem;">
      <div class="card-header bg-primary">
          <h5 class="card-name text-light">${name}</h5>
          <i class="fas fa-glasses light text-light">Engineer</i>
      </div>
      <div class="card-body">
          <li class="list-group-item id">ID: ${id}</li>
          <li class="list-group-item email">Email: ${email}</li>
          <li class="list-group-item github">Github: ${github}</li>
      </div>
  </div>`;
  cardArr.push(engineerCard);
}

function managerCard({ name, email, id, officeNumber }) {
  const managerCard = `<div class="card manager-card p-0" style="width: 12rem;">
      <div class="card-header bg-primary">
          <h5 class="card-name text-light">${name}</h5>
          <i class="fas fa-mug-hot fa-lg light text-light">Manager</i>
      </div>
      <div class="card-body">
          <li class="list-group-item id">ID: ${id}</li>
          <li class="list-group-item email">Email: ${email}</li>
          <li class="list-group-item office-num">Office Number: ${officeNumber}</li>
      </div>
  </div>`;
  cardArr.push(managerCard);
}

function internCard({ name, email, id, school }) {
  const internCard = `<div class="card intern-card p-0" style="width: 12rem;">
      <div class="card-header bg-primary">
          <h5 class="card-name text-light">${name}</h5>
          <i class="fas fa-user-graduate light text-light">Intern</i>
      </div>
      <div class="card-body">
          <li class="list-group-item id">ID: ${id}</li>
          <li class="list-group-item email">Email: ${email}</li>
          <li class="list-group-item school">School: ${school}</li>
      </div>
  </div>`;
  cardArr.push(internCard);
}

function html() {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team builder</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  </head>
  
  <body>
      <ul class="nav navbar-expand-lg justify-content-center bg-danger">
          <li class="nav-item">
              <h1 class="text-light">My Team</h1>
          </li>
      </ul>
      <div class="container-fluid justify-content-evenly row mt-4">${cardArr.join(
        ""
      )}</div>
    </body>`;
}

async function writeToFile() {
  try {
    const data = await html();
    fs.writeFileSync("index.html", data);
    console.log("Successfully built team HTML file");
  } catch (err) {
    console.error(err);
  }
}

init();
