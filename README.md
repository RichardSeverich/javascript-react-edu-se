# Application repository - React

## Prerequisites
1. Install node.js version 24.14.1

## Deploy
1. Do git clone from: https://github.com/RichardSeverich/javascript-react-edu
2. use the following branch: app-instrumentada
3. Install dependencies: npm install
4. Deploy: npm run dev
5. Deploy will start with mock data.
6. Default credentials are: User: admin, Password: admin123

## Coverage - Collection Workflow
1. **Application repository:** Instrument the source code using **Babel + Istanbul**
2. **Application repository:** Build the instrumented application
3. **Application repository:** Deploy the instrumented build
4. **Automation repository:** Execute the end-to-end test cases
5. **Automation repository:** Extract the `window.__coverage__` object after each test execution
6. **Automation repository:** Save each coverage snapshot as `coverage-${testName}-${Date.now()}.json`
7. **Automation repository:** Merge all generated coverage files into a single `coverage.json`
  - merge coverage ```npx nyc merge .nyc_output coverage/coverage.json```
8. **Transfer** the `.nyc_output/coverage.json` file back to the **application repository**
9. **Application repository:** Generate the final `lcov.info`
  - `npm run coverage` or `npx nyc report`
10. Run SonarQube `docker run -d --name sonarqube -p 9000:9000 sonarqube:lts-community`
11. Enter to `http://localhost:9000`
  - user/pass: `admin / admin.` then change for `admin123`

12. Go Profile -> My Account -> Security -> Generate `Global Analysis` Token
13. Copy `${SONAR_TOKEN}` and paste to `sonar-project.properties`
14. install sonar-scanner CLI `brew install sonar-scanner`
15. Run `sonar-scanner` on command line.


## Documentation

### Diagram-architecture

![Screenshot](documentation/javascript-react-edu-architecture.jpg)

### Diagram-entity-relation

<p align="center">
  <img src="documentation/javascript-react-edu-entity-relation.jpg">
</p>

### Redux Work Flow

<p align="center">
  <img src="documentation/javascript-react-edu-redux-work-flow.jpg">
</p>

### Component

<p align="center">
  <img src="documentation/javascript-react-edu-component.jpg">
</p>

## Screens

### Login

<p align="center">
  <img src="documentation/ui-loguin.jpg">
</p>

### Users Form

<p align="center">
  <img src="documentation/ui-users-form.jpg">
</p>

### Users Table

![Screenshot](documentation/ui-users-table.jpg)

### Courses Form

<p align="center">
  <img src="documentation/ui-courses-form.jpg">
</p>

### Courses Table

![Screenshot](documentation/ui-courses-table.jpg)

### Module Form

<p align="center">
  <img src="documentation/ui-modules-form.jpg">
</p>

### Module Table

![Screenshot](documentation/ui-modules-table.jpg)

### Inscriptions Table - by course

![Screenshot](documentation/ui-inscriptions-table.jpg)

### Scores Table - by module

![Screenshot](documentation/ui-scores-table.jpg)
