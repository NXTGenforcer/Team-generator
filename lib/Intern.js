const Employee = require("Employee");
const { mod } = require("prelude-ls");

class Intern extends Employee {
  constructor(school) {
    this.school = school;
    super(name, email, id);
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
