# CRUD_Auth
Node.js + Adonis.js MVC with Bearer Token (JWT) Authentication middleware

# Database
You have to install your DB client like 'npm i pg' for PostgreSQL.
default: pg
//or: sqlite/mysql

host: 127.0.0.1
port: 3333

DB-host: 127.0.0.1
DB-port: 5432
DB: SKRUD
//Edit a lot of things on .env

# ROUTES
  POST /register
  - A hash will be generated from the password beforeSaving;

    payload: {
      username: String,
      email: String,
      password: String
    }

    returns: {
	    "username": String,
	    "email": String,
	    "password": String,
	    "created_at": String,
	    "updated_at": String,
	    "id": Integer,
    }

  POST /auth 
  - Decrypt the hash and attempt to login;

    payload: {
      email: String,
      password: String
    }

    returns: {
	    "type": "bearer",
	    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY0MzA5MjI3N30.0hRTyufYrcPJ7hrJeO1atxe9VhqJ_tvFTG8CAvv_M9U",
	    "refreshToken": null
    }
    
  POST /client
  - Create a new client purchase;
  - Require JWT Token Auth;
  
    headers: {
      Authorization: `Bearer ${jwt_token}`
    }
    
    payload: {
      "name": String,
	    "product": String,
      "value": Integer,
	    "card": Boolean
    }
    
    returns: {
	    "user_id": 1,
	    "name": "Kevin",
	    "product": "Asus Smartphone 256gb 16gb 8x 1.8GHz",
	    "value": 400,
	    "card": true,
	    "created_at": "2022-01-25 06:39:53",
	    "updated_at": "2022-01-25 06:39:53",
	    "id": 7
    }



GET /client (JWT)
GET /client/:id (JWT)
GET /logs (JWT)

PUT/PATCH /client/:id (JWT)

DELETE /client/:id (JWT)

# MIGRATION SCHEMAS
adonis migration:run
adonis migration:reset

# EXECUTE/SERVE
adonis serve --dev
