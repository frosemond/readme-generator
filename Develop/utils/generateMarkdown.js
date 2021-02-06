// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //console.log(license);
  if(license){
    return '<img scr ="https://img.shields.io/static/v1?label=licence&message='+ license +'&color=GREEN"></img>';
  }else{
    return '';
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license.join(', '))}

  ## Description
  $//{data.description}


  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)


  ## Installation Instruction
  $//{data.installation}


  ## Usage
  $//{data.usage}

  
  ## Contributing
  $//{data.contribution}


  ## Tests
  $//{data.test}


  ## license
  $//{data.license.join(', ')}


  ## Questioins
  Github Profile: $//{data.githubUsername}
  Reach me with additional questions at $//{data.email}
`;
}

module.exports = generateMarkdown;
