const inquirer = require("inquirer");
const fs = require("fs");

const Intern = require("./Intern");
const Engineer = require("./Engineer");
const Manager = require("./Employee");

class HtmlGenerator {
  constructor() {
    this.manager;
    this.engineer = [];
    this.intern = [];
  }
  Managerprompts = function () {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Enter Manager Name",
          name: "managerName",
        },
        {
          type: "input",
          message: "Id: ",
          name: "id",
        },
        {
          type: "input",
          message: "Email:",
          name: "email",
        },
        {
          type: "input",
          message: "Office Number:",
          name: "officeNumber",
        },
      ])
      .then((prompts) => {
        this.manager = new Manager(
          prompts.managerName,
          prompts.id,
          prompts.email,
          prompts.officeNumber
        );
        this.chooseEmployee();
      });
  };

  addIntern = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Enter Intern Name",
          name: "internName",
        },
        {
          type: "input",
          message: "Id: ",
          name: "id",
        },
        {
          type: "input",
          message: "Email:",
          name: "email",
        },
        {
          type: "input",
          message: "School:",
          name: "school",
        },
      ])
      .then((prompts) => {
        this.intern.push(
          new Intern(
            prompts.internName,
            prompts.id,
            prompts.email,
            prompts.school
          )
        );
        this.chooseEmployee();
      });
  };

  addEngineer = function () {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Enter Engineer Name",
          name: "engineerName",
        },
        {
          type: "input",
          message: "Id: ",
          name: "id",
        },
        {
          type: "input",
          message: "Email:",
          name: "email",
        },
        {
          type: "input",
          message: "Github:",
          name: "github",
        },
      ])
      .then((prompts) => {
        this.engineer.push(
          new Engineer(
            prompts.engineerName,
            prompts.id,
            prompts.email,
            prompts.github
          )
        );
        this.chooseEmployee();
      });
  };
  HtmlGenerate = () => {
    fs.writeFile(
      "./dist/index.html",
      `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team</title>
      <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <h1 class = "heading">My Team<h1/>
        <div class ="box-container">
          ${this.ManagerHtml()}
          ${this.EngineerHtml()}
          ${this.InternHtml()}
        </div>
      
    </body>
    </html>`,
      (err) => {
        if (err) {
          throw err;
        }
        console.log("done");
      }
    );
  };

  ManagerHtml = function () {
    // added mailto to open the email when clicked
    return `<div class ='box'>
        <h2>${this.manager.getName()}</h2>
        <h2>${this.manager.getRole()}</h2>
        <h2>ID ${this.manager.getId()}</h2>
  
        <h3>Email: <a class="link" target = _blank href="mailto:${this.manager.getEmail()}">${this.manager.getEmail()}</a></h3>
        <h3>Office Number: 567 </h3>
  
      </div>
    `;
  };

  EngineerHtml = () => {
    // added mailto to open the email when clicked
    return `
    ${this.engineer.map((item) => {
      return `
      <div class='box'>
      <h2>${item.getName()}</h2>
      <h2>${item.getRole()}</h2>
      <h2>ID ${item.getId()}</h2>
      
      <h3>Email: <a class="link" target = _blank href="mailto:${item.getEmail()}">${item.getEmail()}</a></h3>
      <h3>gitHub:  <a class="link" target = _blank href="http://github.com/${item.getGithub()}">${item.getGithub()}</a></h3>
      
      </div>
      `
    })}
    `;
  };

  InternHtml = () => {
    // added mailto to open the email when clicked
    return `
    ${this.intern.map((item) => {
      return `
      <div class = 'box'>
      <h2>${item.getName()}</h2>
      <h2>${item.getRole()}</h2>
      <h2>ID ${item.getId()}</h2>
      
      <h3>Email: <a class="link" target = _blank href="mailto:${item.getEmail()}">${item.getEmail()}</a></h3>
      <h3>School: ${item.getSchool()}</h3>
      
      </div>
      `
    })}
    `;
  };

  chooseEmployee = () => {
    return inquirer
      .prompt([
        {
          type: "list",
          message: "choose Employee:",
          name: "choice",
          choices: ["add an engineer", "add Intern", "none"],
        },
      ])
      .then((prompt) => {
        if (prompt.choice === "add Intern") {
          this.addIntern();
        } else if (prompt.choice === "add an engineer") {
          this.addEngineer();
        } else {
          this.HtmlGenerate();
        }
      });
  };
}

module.exports = HtmlGenerator;
