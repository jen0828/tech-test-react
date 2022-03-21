# Cards application 

React tech test given one day to complete: develop a web application to allow customers to review credit cards that are applicable to their credit status.
 
## Requirements
 
- The user should submit their details via a form.
- The application should then return a filtered list of cards available to that user; use the rules outlined at the end of this document to decide whether a particular card is available.
- The user should be allowed to select one or more of the returned cards and see the details for the cards selected.
- When multiple cards are selected, the total amount of credit available to the user on those cards should be displayed.

 
## Assumptions
- I assumed users were already logged in, and thus user authentication was already dealt with on the server
- JSON server was used to mock a backend API so that I can simulate API calls 
   - see the endpoints : `http://localhost:8000/cards`  `http://localhost:8000/users`
 
## Solution / My Approach
 
 Steps I thought of and executed for solving the task meeting the requirements above:
 
1. The user submits details via the provided form
2. The details saved in the JSON server database( `http://localhost:8000/users` )using Axios Post request
3. The details of the current user is saved in `localStorage` using `localStorage.setItem()`
4. `EligibleCards()` functional component grabs the current user's details from the `localStorage` and gets cards data from the API endpoint (`http://localhost:8000/cards`), which enables the app to determine/show eligible cards for the current user.
5. Once all eligible cards are displayed, the user can select multiples cards using the `checkbox`, and the total amount of credit will be shown for the chosen cards.
6. When the user clicks the `go back` button, the current user's details will be removed from `localStorage` using `localStorage.clear()`, which will also be redirected to the previous page.

Other notes:

* React router was used to simulate a multi-page website, and Axios was used for API calls.
* Given the limited time, I focused on building features to the spec/ the functionality of the app first and styling/UI last. 

## Libraries/ Tools used
 
* React library with Node v16.13.1
* Jest for testing
* React-Bootstrap
* JSON-server
* Axios
 
## Installation and Setup Instructions
 
Clone down this repository. You will need `node` and `npm` installed globally on your machine. 
 
Installation:
 
`npm install` 
 
To Start JSON Server ( API endpoints):
 
`npx json-server --watch data/db.json --port 8000`
 
To Start App:
 
`npm start` 
 
To Visit App:
 
`localhost:3000`
 
To Run Tests:
 
`npm test`
 
## Improvements
 
I had only one day to build this app, so time permitting, I would address the following next:
 
* Error handling for API calls: No error handling is undertaken in this app, which should be addressed from the user's perspective
 
* Form Validation: I did make all fields 'required', but I would enhance further perhaps using HTML5 form validation to provide actionable feedback to users 
 
* Improve Accessibility using WAI-ARIA attributes
 
* More testing: mock API calls, E2E testing for the three test cases using cypress
 
* Improve UI design

* Add login functionality: JWT Authentication using JSON-server and jsonwebtoken
 
* Create online API endpoints instead of the local API endpoints so that I can deploy the app