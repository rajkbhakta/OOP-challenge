const Employee = require("../lib/Employee");

describe("should instanciate Employeee instance and call all parameters/functions", () => {
  it("should instanciate Employeee Instance", () => {
    const NewEmployee = new Employee();
    expect(typeof NewEmployee).toBe("object");
  });
  it("should set name of employee", () => {
    const name = "Raj";
    const NewEmployee = new Employee(name);
    expect(NewEmployee.name).toBe(name);
  });
  it("should set id of employee", () => {
    const name = "Raj";
    const id = "1";
    const NewEmployee = new Employee(name, id);
    expect(NewEmployee.id).toBe(id);
  });
  it("should set email of employee", () => {
    const name = "Raj";
    const id = 3;
    const email = " raj@gmail.com";
    const NewEmployee = new Employee(name, id, email);
    expect(NewEmployee.email).toBe(email);
  });
  it("should get name of employee", () => {
    const name = "Raj";
    const id = 3;
    const NewEmployee = new Employee(name);
    expect(NewEmployee.getName()).toBe(name);
  });
  it("should get employees id ", () => {
    const name = "Raj";
    const id = "1";
    const NewEmployee = new Employee(name, id);
    expect(NewEmployee.getId()).toBe(id);
  });
  it("should get employees email", () => {
    const name = "Raj";
    const id = "1";
    const email = "raj@gmail.com";
    const NewEmployee = new Employee(name, id, email);
    expect(NewEmployee.getEmail()).toBe(email);
  });
  it("should get role of employee ", () => {
    const name = "Raj";
    const email = "raj@gmail.com";
    const id = "1";
    const NewEmployee = new Employee(name, id, email);
    expect(NewEmployee.getRole()).toBe("Employee");
  });
});
