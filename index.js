const inquirer = require("inquirer");
const Employee = require("Employee");
const Engineer = require("Engineer");
const Manager = require("Manager");
const Intern = require("Intern");
const teamDiv = document.getElementsByClassName("team-div");

function EngineerInfo() {
  return inquirer.prompt([]);
}

function ManagerInfo() {
  return inquirer.prompt([]);
}

function InternInfo() {
  return inquirer.prompt([]);
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
        name: "id",
        question: "What is the employee's Id number?",
      },
    ])
    .then({
      if(answers = Engineer) {
        const Icon = `<i class="fa-solid fa-mug-hot fa-lg text-light">Engineer</i>`;
        inquirer.prompt({
          type: "input",
          name: "github",
          question: "What is the engineer's Github username?",
        });
      },
      elseif(answers = Manager) {
        const icon = `<i class="fa-solid fa-mug-hot fa-lg text-light">Manager</i>`;
        inquirer.prompt({
          type: "input",
          name: "officeNum",
          question: "What is the Manager's Office number?",
        });
      },
      else() {
        const icon = `<i class="fa-solid fa-user-graduate text-light">Intern</i>`;
        inquirer.prompt({
          type: "input",
          name: "school",
          question: "What is the Intern's school?",
        });
      },
    })
    .then({
      teamDiv.append(`<div class="card" style="width: 12rem;">
      <div class="card-header bg-primary">
          <h5 class="card-name text-light">${answers.name}</h5>
          ${icon}
      </div>
      <div class="card-body">
          <li class="list-group-item id">ID:${answers.id}</li>
          <li class="list-group-item email">Email:${answers.email}</li>
          <li class="list-group-item var">Github:${answers.}</li>
      </div>
  </div>`)
    });
}

init();
