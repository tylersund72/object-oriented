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
    ])
    .then((managerResponses) => {
      const { name, id, email, officeNumber } = managerResponses;

      const manager = new Manager(name, id, email, officeNumber);

      employees.push(manager);

      createEmployee();
    });
};

const createEmployee = () => {
  console.log("Adding new team member");
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is your employees role?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employees name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your employees name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employees ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your employees ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the employees email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your employees email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineers GitHub username?",
        when: ({ role }) => role === "Engineer",
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
        type: "input",
        name: "school",
        message: "What is the interns school?",
        when: ({ role }) => role === "Intern",
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
        type: "confirm",
        name: "addNewEmployee",
        message: "Would you like to add anyone else to your team?",
      },
    ])
    .then((employeeInfo) => {
      let { name, id, email, role, github, school, addNewEmployee } =
        employeeInfo;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
      }

      employees.push(employee);

      if (addNewEmployee) {
        return createEmployee();
      } else {
        console.log(employees);
        writeFile(employees);
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", generatePage(data), (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("File successfully created!");
    }
  });
};

createManager();
