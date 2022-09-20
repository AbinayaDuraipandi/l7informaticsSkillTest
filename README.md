# CypressSkillTest
This repo is having a couple of test scenarios developed using Cypress and a javascript program

After cloning the repository, please follow any of the mentioned way to execute tests

**Ways to execute cypress tests:**
*   **Executing tests from Test runner**
    *   Launch new terminal from project root folder
    *   Execute the commnad 'npm install' for installing all required dependencies
    *   Enter the following command to launch test runner: npx cypress open
    *   Select the required browser and click on HerokuApp.js. Test execution will be started on the respective browser

*   **CLI execution**
    *   Launch new terminal from project root folder
    *   Execute the commnad 'npm install' for installing all required dependencies
    *	Execute command 'npm run HerokuappTests' (this will execute the tests in headless electron browser and generates the report under reports.'HerokuappTests' command is provided under scripts in package.json file )

*   **Executing tests from windows command file**
    *   Open cypress folder
    *   Double click on the file <TestRunner.cmd> to execute cypress tests

**To execute javascript program from terminal:**
* Execute command 'npm run TwoDimensionalArrayProgramFile' ('TwoDimensionalArrayProgramFile' command is provided under scripts in package.json file ))

**What happens when run commands are triggred(while CLI execution and command file execution)**
* For the failed tests screenshot will be captured and stored under \cypress\screenshots folder
* Recorded videos will be stored under \cypress\videos folder
* Once the test execution is completed, report.html will be generated under \cypress\reports folder