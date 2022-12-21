const Engineer = require("../lib/Engineer");

describe("should instanciate Engineer instance and call all parameters/functions", () => {
  it("should instanciate Engineer Instance", () => {
    const NewEngineer = new Engineer();
    expect(typeof NewEngineer).toBe("object");
  });
  it("should set name of Engineer", () => {
    const github = " rajbhakta";
    const NewEngineer = new Engineer("Raj", 1, "raj@gmail.com", github);
    expect(NewEngineer.github).toBe(github);
  });

  it("should get github of Engineer", () => {
    const github = "rajbhakta";
    const NewEngineer = new Engineer("Raj", 1, "raj@gmail.com", github);
    expect(NewEngineer.getGithub()).toBe(github);
  });

  it("should get role of engineer ", () => {
    const github = "rajbhakta";
    const NewEngineer = new Engineer("Raj", 1, "raj@gmail.com", github);
    expect(NewEngineer.getRole()).toBe("Engineer");
  });
});
