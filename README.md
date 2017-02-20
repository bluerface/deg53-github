# Degree 53 Coding Test

See a live demo here;  
https://zl-deg53-github-techtest.herokuapp.com/

## Installation Instructions

1. Clone the project into your desired folder
2. Make sure you have node and npm installed
3. Install all dependencies:  
  ```
  $ npm i
  ```
4. To serve the code, run one of the two servers;    
  Run the webpack dev server (served to localhost:8080);  
  ```
  $ npm run dev
  ```

  Or use the express production server (served to localhost:3000);  
  ```
  $ npm run build
  $ npm start
  ```
5. Run the tests or the linting;  
  ```
  $ npm test
  $ npm run lint
  ```  


## The Task
Create a simple application that utilises GitHub APIs to allow a user to search for a repository by name.  The application should also offer a detail view for viewing more information about a repository.  This detail view should include the repository’s readme, if available, and the number of open issues, number of forks, etc.

### Notes
The application should utilise best practices for code that you write.
You can use any frontend framework except jQuery, preferably with React

### Resources
GitHub API Docs  
https://developer.github.com/v3/
Repository Search API  
https://developer.github.com/v3/search/#search-repositories
