# CRUD_Auth
Node.js + Adonis.js MVC with Bearer Token (JWT) Authentication middleware

# Database
//You have to install your DB client like 'npm i pg' for PostgreSQL.
//default: pg
//or: sqlite/mysql

//host: 127.0.0.1
//port: 3333

//DB-host: 127.0.0.1
//DB-port: 5432
//DB: SKRUD
//Edit a lot of things on .env

# ROUTES
POST:
/register -> Create a new Operator
/auth -> Login attempt

GET/HEAD:
/client -> Returns all clients (JWT)
/client/:id -> Returns a client (JWT)

/client -> Attempt to create a new client (JWT)

PUT/PATCH:
/client/:id -> Updates a client info (JWT)

DELETE:
/client/:id -> Delete some user (JWT)

# MIGRATION SCHEMAS
adonis migration:run
adonis migration:reset

# EXECUTE/SERVE
adonis serve --dev
