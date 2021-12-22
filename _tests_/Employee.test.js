const Employee = require("../lib/Employee");

test("verifying constructor takes in name property", () => {
  const employeeName = "Grant";
  const testEmployee = new Employee(employeeName, "grant@hotmail.com", "3");
  expect(testEmployee.name).toBe(employeeName);
});

test("verifying constructor returns name property", () => {
  const employeeName = "Grant";
  const testEmployee = new Employee(employeeName, "grant@hotmail.com", "3");
  expect(testEmployee.getName()).toBe(employeeName);
});

test("verifying constructor takes in email property", () => {
  const employeeEmail = "grant@hotmail.com";
  const testEmployee = new Employee("Grant", employeeEmail, "3");
  expect(testEmployee.email).toBe(employeeEmail);
});

test("verifying constructor returns email property", () => {
  const employeeEmail = "grant@hotmail.com";
  const testEmployee = new Employee("Grant", employeeEmail, "3");
  expect(testEmployee.getEmail()).toBe(employeeEmail);
});

test("verifying constructor takes in Id property", () => {
  const employeeId = "3";
  const testEmployee = new Employee("Grant", "grant@hotmail.com", employeeId);
  expect(testEmployee.id).toBe(employeeId);
});

test("verifying constructor returns Id property", () => {
  const employeeId = "3";
  const testEmployee = new Employee("Grant", "grant@hotmail.com", employeeId);
  expect(testEmployee.getId()).toBe(employeeId);
});

test("verifying constructor returns Id property", () => {
  const employeeId = "3";
  const testEmployee = new Employee("Grant", "grant@hotmail.com", employeeId);
  expect(testEmployee.getId()).toBe(employeeId);
});

test("verifying constructor returns Employee Role", () => {
  const employeeClass = "Employee";
  const testEmployee = new Employee("Grant", "grant@hotmail.com", "3");
  expect(testEmployee.getRole()).toBe("Employee");
});
