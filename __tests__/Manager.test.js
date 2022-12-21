const Manager = require("../lib/Manager");

describe("should instanciate Manager instance and call all parameters/functions", () => {
  it("should instanciate Manager Instance", () => {
    const NewManager = new Manager();
    expect(typeof NewManager).toBe("object");
  });
  it("should set officeNumber of Manager", () => {
    const officeNumber = "43543332";
    const NewManager = new Manager("Raj", 1, "raj@gmail.com", officeNumber);
    expect(NewManager.officeNumber).toBe(officeNumber);
  });
  it("should get role of employee", () => {
    const NewManager = new Manager("Raj", 1, "Email", "34434532");
    expect(NewManager.getRole()).toBe("Manager");
  });
});
