# ewd-api-labs-2022-PRO
# Assignment 2 - Web API.
​
Name: Ziang Huang [Student Id: 20095901]
​
## Overview
​
> Project have APIs which is integrated to React Movies app. Which includes
+ TMDB endpoints and react movies app integration (Middleware APIs)
#### Account
+ Login
+ Create
+ View
#### Movies
+ View
#### Upcoming movies
+ View
#### Favourite movies
+ Create
+ View
+ Delete 
#### fantasy movies
+ Create
+ View
+ Delete 
#### Others
+ Winston logger enabled in the app
+ MongoDb as backend
+ JOI Validations(Account & Fantasy movie creation)
</br>

> List of APIs created and tested
​
## Installation Requirements
​
Getting/installing the software:
​
```bat
git clone https://github.com/OliverZiangHuang/ewd-api-labs-2022-PRO.git
```
​
followed by installation(app-root-path is not required, the others must be installed. If the program operation lacks some functions, you can try to run these commands to reinstall the files.) If you need to test the api function, please see the "Post Man Testing" section below.
​
```bat
git install
npm install

npm install -save mongoose
npm install --save passport passport-jwt jsonwebtoken bcryptjs

npm install winston 
npm install winston express-winston
npm install nodemodule --save
npm install app-root-path --save
```
​
## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE READ.ME., Just placeholders as indicated below:
​
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
DATABASE_DIALECT=mongo
TMDB_KEY={yourkey from https://www.themoviedb.org/ Follow the development documentation to register an account and key}
DATABASE_URL=mongodb://localhost:27017/movies_db
JWT_SECRET_KEY={yourkey}
```
​
## Start-up
Describe how to start/stop the API. You could go though the ``scripts:`` property of the *package.json* file.
​
## API Design
​
Alternatively, you could also do similar to the following: 
​
| PATH                          | GET                       | POST                          | PUT  | DELETE |
| ----------------------------- | ------------------------- | ----------------------------- | ---- | ------ |
| /api/movies                   | Gets a list of movies     | Add A Movie                   | N/A  | N/A    |
| /api/movies/{movieid}         | Get a Movie               | N/A                           | N/A  | N/A    |
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A  | N/A    |
| ...                           | ...                       | ...                           | ...  | ...    |
​
## Security and Authentication
​
> For security, few routes are protected with token and account verification is listed below..

| PATH    | GET             | POST                 | PUT                | DELETE           |
| ---------| -------------- | ------------------- | ------------------ | ----------------- |
| /api/accounts/email/{email}  | Fetch account by email    | N/A        | N/A           | N/A                    |
| /api/fantasymovies        | N/A       | Add new fantasy movie     | N/A      | N/A       |
| /api/movies/fantasymovie/{id}   | Fetch fantasy movie by Id | N/A       | N/A   | Delete fantasy movie   |
| /api/accounts/{userid}/favourites | Fetch favourites by userid| Add new favorite movie  | N/A  | N/A   |
| /api/accounts/{userid}/favourites/{movieId}  | N/A   | N/A    | N/A    | Delete a favorite movie  |
​
### Design
​
>
* WebApp API for movies is using MongoDB as backend to save Account details and Fantasy movies. 
* Two collections created in the MongoDb 
  * Accounts
  * Fantasymovies
* Each collection in DB have seperate folder structure in the app with new controller, services routes, repository.
* Account and fantasy movies have validation, JOI validation is added wit RegX
```bat
password:Joi.string().min(7).required().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/)
```
​
​
## Integrating with React App
​
* Two major TMBD API(Upcoming movies and popular Tv shows with pagination) is replaced with the new Web app API. 
* Sign up account, Sign in, Add favourite movies to account, and Create fantasy movies are integrated with this Web app API.
* JWT Bearer token based authorization is set for the private routes.
> Github Repo of Movies App: https://github.com/WIT-Vibin-2021/moviesApp

> Example of an API call from React App. for deleting favourite movies based on movies id and user id
​
~~~Javascript
export const removeFavouriteMovies = (userid, movieid) => {
    return fetch(`/api/accounts/${userid}/favourites/${movieid}`, {
        headers: {
            'Content-Type': 'application/json',
            'token': window.localStorage.getItem('token')
        },
        method: 'delete',
        body: JSON.stringify({ movieId: movieid })
    }).then(res => res.json())
};

​
~~~
​
## Post Man Testing
>
- Testing is done via postman. Please download the postman desktop software and import the file "Api-ewd-labs.postman_collection.json" to view all test options. Note that the test can only be performed after the api is started (run npm start). All test endpoints are shown below.
![1653006893(1)](https://user-images.githubusercontent.com/91920008/169425701-c091b5fa-e85f-4657-a383-5b56afdafbf8.png)
- All API is tested in postman
- Seperate collection created and all passed test run.
----
## Extra features
​
>
- Delete API for favourite and fantasy movies.
- JOI Validation while posting data to DB.
- Logging enabled in the app(writes to files and in console), Winston Logger used (https://www.npmjs.com/package/winston?activeTab=readme  v3.7.2).
- Express-winston for logging HTTP request. (https://www.npmjs.com/package/express-winston?activeTab=versions  v4.2.0)
- Authorization checking in all level in movies app.
- Token and related data saved in local, so that even after movies app reload user will not logout automatically. 
- Private and protected routes for movies app and web app API
​
## Independent learning.
​
>
- Winston logging
## Logging (winston)
### Console logging result using Winston
-(in file Custom.log)
![1653006244(1)](https://user-images.githubusercontent.com/91920008/169424997-96fed3e5-d6be-4793-9bbb-e09a86911b22.png)
### Logging writing to file(info and error only)
-(in file Custom_Error.log)
![1653006229(1)](https://user-images.githubusercontent.com/91920008/169425022-8e6b7f01-6432-476a-9e36-0e5b19309cf9.png)
