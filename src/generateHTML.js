//generates html cards, then merges those cards into an oject array, that array is then injected into the final html template as a string to be output to a separate HTML file
const fs = require('fs');

const generateManager = (employee) => {
  let manager = employee;
  let managerCard = `
  <div class="card m-4" style="width: 22rem; padding: 0px;">
  <div class="card-header" style="background-color: rgb(55, 55, 146); color: aliceblue;">
    <h3>${manager.name}</h3>
    <h4 class="card-subtitle m-2" style="color: aliceblue;"><i class="fa-solid fa-mug-hot"></i>Manager</h4>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item mt-1">ID: ${manager.id}</li>
      <li class="list-group-item mt-1">Email: <a href="${manager.email}">${manager.email}</a></li>
      <li class="list-group-item mt-1">Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>
</div>
`;
  managerArr.push(managerCard);
};

const generateEngineer = (employee) =>{
  let engineer = employee
  let engineerCard = `
      <div class="card m-4" style="width: 22rem; padding: 0px;">
      <div class="card-header" style="background-color: rgb(55, 55, 146); color: aliceblue;">
        <h3>${engineer.name}</h3>
        <h4 class="card-subtitle m-2" style="color: aliceblue;"><i class="fa-solid fa-gears"></i>Engineer</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item mt-1">ID: ${engineer.id}</li>
          <li class="list-group-item mt-1">Email: <a href="${engineer.email}">${engineer.email}</a></li>
          <li class="list-group-item mt-1">GitHub: ${engineer.github}</li>
        </ul>
      </div>
    </div>

    `;
  engineerArr.push(engineerCard);
};

const generateIntern = (employee) => {
  let intern = employee;
  let internCard = 
    `
    <div class="card m-4" style="width: 22rem; padding: 0px;">
    <div class="card-header" style="background-color: rgb(55, 55, 146); color: aliceblue;">
      <h3>${intern.name}</h3>
      <h4 class="card-subtitle m-2" style="color: aliceblue;"><i class="fa-solid fa-user-graduate"></i>Intern</h4>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item mt-1">ID: ${intern.id}</li>
        <li class="list-group-item mt-1">Email: <a href="${intern.email}">${intern.email}</a></li>
        <li class="list-group-item mt-1">School: ${intern.school}</li>
      </ul>
    </div>
  </div>
`;
  internArr.push(internCard);
};


const managerArr = [];
const engineerArr = [];
const internArr = [];

const generateCards = async (data) => {

  for (let i = 0; i < data.length; i++) {
    console.log('made it into the for loop')
    let employee = data[i]
    let role = employee.roll;
    switch(role){
      case 'Manager':
        generateManager(employee);
          break;

      case 'Engineer':
        generateEngineer(employee);
          break;

      case 'Intern':
        generateIntern(employee);
          break;
    }
  }
}

const generateTeamPage = () => {
  let managerCards = managerArr.join('');
  let engineerCards = engineerArr.join('');
  let internCards = internArr.join('');
  let pageHTML = 
  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Team Profile</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./example.css">
  </head>
  <body>
    <header class="container-fluid" style="background-color: rgb(55, 55, 146);">
      <div class="justify-content-center">
        <h1 style="color: aliceblue;">Team Profile</h1>
      </div>
    </header>
    <main>
      <!-- Manager Cards Container -->
      <div class="container" id="manager-container">
        <div class="row justify-content-center">
          <!-- manager cards go gere -->
            ${managerCards}
        </div>
      </div>
      <!-- Engineer Cards Container -->
      <div class="container" id="engineer-container">
        <div class="row justify-content-center">
          <!-- engineer cards go here -->
            ${engineerCards}
        </div>
      </div>
      <!-- start of intern container -->
      <div class="container" id="engineer-container">
        <div class="row justify-content-center">
          <!-- intern cards go here -->
            ${internCards}
        </div>
      </div>
    </main>
  
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" cross
  origin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3Uks
  dQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6
  Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
  
  `;
  return pageHTML;
}

const generateHTML = async (employees) => {
  let data = employees
  await generateCards(data);
  let pageData = await generateTeamPage();
  console.log(pageData)
  fs.writeFile("./dist/team.html", pageData, (err) => {
    if(err){
      console.error(err);
    } else {
      console.log('page has been written to team.html')
    }
  })
}

module.exports = generateHTML;
