let managerCard = function (manager) {
  return `
    <div class="col">
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h3>Manager</h3>
            </div>
            <div class="card-body">
              <p class="id">ID = ${manager.id}</p>
              <p class="email">Email = <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="officeNumber">Office Number = ${manager.officeNumber}</p>
          </div>
      </div>
    </div>
    `;
};
let engineerCard = function (engineer) {
  return `
      <div class="col">
          <div class="card">
              <div class="card-header">
                  <h4>${engineer.name}</h4>
                  <h2>Manager</h2>
              </div>
              <div class="card-body">
                <p class="id">ID = ${engineer.id}</p>
                <p class="email">Email = <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub Username = <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
           </div>
       </div>
      </div>
      `;
};
let internCard = function (intern) {
  return `
      <div class="col">
          <div class="card">
              <div class="card-header">
                  <h4>${intern.name}</h4>
                  <h2>Manager</h2>
              </div>
              <div class="card-body">
                <p class="id">ID = ${intern.id}</p>
                <p class="email">Email = <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School = ${intern.school}</p>
            </div>
        </div>
      </div>
      `;
};

initiateHTML = (data) => {
  const cards = [];

  cards.push(
    data
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
  );

  cards.push(
    data
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
  );

  cards.push(
    data
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCard(intern))
  );

  console.log(cards);
  return cards.join("");
};

let generatePage = (data) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand text-center" id="navbar-text">Team</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${initiateHTML(data)}
                </div>
          </div>
        </main>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
  </html>
    `;
};

module.exports = generatePage;
