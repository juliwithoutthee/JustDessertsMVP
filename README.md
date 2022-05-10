### Welcome to the backend of Just Desserts! 

Just Desserts is an app that allows you to order desserts when you're stressed! 

## To start backend server:
`npm start` || `npm run dev` 
`npm run dev` is for nodemon 


## To start frontend server in a separate terminal: 

`cd MVPfrontend/solomvpfrontend`
`npm run build`
`npm run dev`

## Creating your database 

To create a database: 
In a psql terminal, run the following code: 

`psql` 

`CREATE DATABASE justdesserts; `

## Migrations:

`npx prisma migrate dev` || `npm run migrate`

# Seeding:

`npx prisma db seed` || `npm run seed`


# Checking your tables in your psql terminal:

`SELECT * FROM "Item";`


## In your env. file: 

DATABASE_URL= postgresql://postgres:NULL@localhost:5432/justdesserts
DB_NAME=justdesserts
DB_USER=
DB_PASSWORD=


### Backlog 

