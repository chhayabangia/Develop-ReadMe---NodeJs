// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Unlicense') return '';
   const badges = {
    'MIT':'https://img.shields.io/badge/license-MIT-green.svg',
    'MS-PL':'https://img.shields.io/badge/license-MS--PL-green.svg',
    'ISC':'https://img.shields.io/badge/license-ISC-green.svg',
   };
   return `${badges[license]}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Unlicense') 
    return '';
   return `[License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Unlicense') 
    return '';
  const messages = {
    'MIT': 'This Project is licensed under MIT',
    'MS-PL': 'This Project is licensed under MS-PL',
    'ISC': 'This Project is licensed under ISC',
   };
   return `${messages[license]}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, feel free to contact me:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;
