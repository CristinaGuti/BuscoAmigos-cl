# Plan routes
## Base URL /plan
| HHTPP Method | URLpath         | Description               |
|--------------|-----------------|---------------------------|
| GET          | /getPlan        | Plan list                 |
| GET          | /getTypePlan    | Type plan list            |
| GET          | /getOnePlan/:id | Matching ID plan details  |
| POST         | /createPlan       | Create a new Plan         |
| PUT          | /edit/:id       | Matching ID plan edition  |
| Delete       | /delete/:id     | Matching ID plan deletion |


# User rout
## Base URL /user
| HHTPP Method | URLpath       | Description               |
|--------------|---------------|---------------------------|
| GET          | /:id          | Users list details        |
| GET          | /getUsers     | Matching ID user details  |
| PUT          | /edit/:id     | Matching ID user edition  |
| Delete       | /delete/:id   | Matching ID plan deletion |


# Auth rout
## Base URL /auth
| HHTPP Method | URLpath | Description       |
|--------------|---------|-------------------|
| GET          | /verify | Verify auth token |
| POST         | /signup | Signup user       |
| POST         | /login  | Loging user       |


# Client routes
| URL              | Description            | Protected |
|------------------|------------------------|-----------|
| /                | Home page              |           |
| /plan            | Plan page              |           |
| /planDetails/:id | Plan detail page       |           |
| /planEdit/:id    | Plan edit page         |           |
| /login           | Login page             |           |
| /signup          | Register page          |           |
| /create-plan     | New plan form page     | X         |
| /profile         | User profile page      | X         |
| /editUser:id     | Edit User profile page | X         |
| /inbox           | Inbox page  	        | X         |
| /contact         | Contact page           |           |
| /gift	           | Gift page 	            | X         |
| *                | 404 page               |           |