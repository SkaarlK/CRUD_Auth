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
  - Return an object with the new Operator data;
  - A hash will be generated from the password beforeSaving;
    payload: {
      username: String,
      email: String,
      password: String
    }

  POST /auth 
  - Return an object containing a bearer token;
  - Decrypt the hash and attempt to login;
    payload: {
      email: String,
      password: String
    }
    
  POST /client
  - Return object -> new product created;
  - Require JWT Bearer Token;
    headers: {
      Authorization: `Bearer ${jwt_token}`
    }
    payload: {
      "name": String,
	    "product": String,
      "value": Integer,
	    "card": Boolean
    }
    
  GET /client
  - Return an array of objects -> all client purchases;
  - Require JWT Bearer Token;
    headers: {
      Authorization: `Bearer ${jwt_token}`
    }
    
  GET /client/:id
  - Return an object -> one client purchase details;
  - Require JWT Bearer Token;
    headers: {
      Authorization: `Bearer ${jwt_token}`
    }
    
  GET /logs
  - Return an Array of Objects -> All actions logged;
  - Require JWT Bearer Token;
    headers: {
      Authorization: `Bearer ${jwt_token}`
    }
    
  PUT or PATCH /client/:id
  - Return an Object -> Updated client purchase details;
  - Require JWT Bearer Token;
    headers: {
      Authorization: `Bearer ${jwt_token}`
    }
    payload: {
      price/name/product/card: newValue;
    }
    
  DELETE /client/:id
  - Return nothing -> Just delete the Client Purchase matching the param id;
  - Require JWT Bearer Token;
    headers: {
      Authorization: `Bearer ${jwt_token}`
    }


# MIGRATION SCHEMAS
adonis migration:run
adonis migration:reset

# EXECUTE/SERVE
adonis serve --dev
