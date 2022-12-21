const Intern = require("../lib/Intern");

describe("should instanciate Intern instance and call all parameters/functions", () => {
  it("should instanciate Intern Instance", () => {
    const NewIntern = new Intern();
    expect(typeof NewIntern).toBe("object");
  });
  it("should set name of Intern", () => {
    const school = "the school";
    const NewIntern = new Intern("Raj", 1, "raj@gmail.com", school);
    expect(NewIntern.school).toBe(school);
  });

  it("should get github of Engineer", () => {
    const school = "the school";
    const NewIntern = new Intern("Raj", 1, "raj@gmail.com", school);
    expect(NewIntern.getSchool()).toBe(school);
  });

  it("should get role of engineer ", () => {
    const school = "the school";
    const NewIntern = new Intern("Raj", 1, "raj@gmail.com", school);
    expect(NewIntern.getRole()).toBe("Intern");
  });
});
