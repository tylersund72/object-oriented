const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generatePage = require("./src/page-template");

const employees = [];

const createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your team managers name?",
        validate: (managerName) => {
          if (managerName) {
            return true;
          } else {
            console.log("Please enter your managers name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the managers employee ID.",
        validate: (managerId) => {
          if (managerId) {
            return true;
          } else {
            console.log("Please enter your managers ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the managers email address.",
        validate: (managerEmail) => {
          if (managerEmail) {
            return true;
          } else {
            console.log("Please enter your managers email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the managers office number.",
        validate: (managerOfficeNumber) => {
          if (managerOfficeNumber) {
            return true;
          } else {
            console.log("Please enter your managers office number.");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "optionOne",
        message: "Which type of employee would you like to add?",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((managerResponses) => {
      const { optionOne } = managerResponses;

      const manager = new Manager(managerResponses);

      employees.push(manager);

      switch (optionOne) {
        case "Engineer":
          createEngineer(employees);
          break;
        case "Intern":
          createIntern(employees);
          break;
        case "Finish editing team":
          finishTeam(employees);
      }
    });
};

const createEngineer = (employees) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineers name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your engineers name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineers ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your engineers ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineers email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your engineers email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineers GitHub username?",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your engineers GitHub username");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "optionTwo",
        message: "Select a member to add",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((engineerInfo) => {
      const { optionTwo } = engineerInfo;
      const engineer = new Engineer(engineerInfo);

      employees.push(engineer);

      switch (optionTwo) {
        case "Engineer":
          createEngineer(employees);
          break;
        case "Intern":
          createIntern(employees);
          break;
        case "Finish editing team":
          finishTeam(employees);
      }
    });
};

const createIntern = (employees) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the interns name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your interns name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the interns ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your interns ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the interns email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your interns email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the interns school?",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter your interns school");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "optionThree",
        message: "Select a member to add",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((internInfo) => {
      const { optionThree } = internInfo;
      const intern = new Intern(internInfo);

      employees.push(intern);

      switch (optionThree) {
        case "Engineer":
          createEngineer(employees);
          break;
        case "Intern":
          createIntern(employees);
          break;
        case "Finish editing team":
          finishTeam(employees);
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("File successfully created!");
    }
  });
};

const finishTeam = (employees) => {
  const generatedFile = generatePage(employees);
  writeFile(generatedFile);
};

createManager();
