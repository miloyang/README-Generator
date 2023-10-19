// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'N/A') {
    return '';
  }
  return `![LICENSE](https://img.shields.io/badge/${license}-LICENSE-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'N/A') {
    return '';
  }
  return `- [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'N/A') {
    return '';
  }
  return `## License
  
  This application is covered under the ${license} license.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  description,
  installation,
  usage,
  credits,
  license,
  contribution,
  tests,
  GitHub,
  email,
  LinkedIn,
  questions
}) {
  return `# ${title}
  ${renderLicenseBadge(license)}

  ## Description

  ${description}
  
  ## Table of Contents
  - [Installations](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(license)}
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  ${installation}
  
  ## Usage

  ${usage}
  
  ## Credits

  ${credits}
  
  ${renderLicenseSection(license)}
 
  ## Contribution 

  ${contribution}
  
  ## Tests

  ${tests}
  
  ## Questions

  * GitHub: [Link to github](www.github.com/${GitHub})
  * Email: ${email}
  * LinkedIn: ${LinkedIn}
  * Contact Preference: ${questions}`
}

module.exports = generateMarkdown;
