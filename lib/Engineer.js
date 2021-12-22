const Employee = require("Employee");

class Engineer extends Employee {
  constructor(github) {
    this.github = github;
    super(name, email, id);
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
