const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, email, id);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
