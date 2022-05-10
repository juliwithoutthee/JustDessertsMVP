# Welcome to Just Desserts! 

Just Desserts is an app that allows you to order desserts when you're stressed! 

### To start frontend server in a separate terminal: 

`cd MVPfrontend/solomvpfrontend`
`npm run build`
`npm run dev`

### Creating your database 

To create a database: 
In a psql terminal, run the following code: 

`psql` 

`CREATE DATABASE justdesserts; `

### Migrations:

``` npx prisma migrate dev || npm run migrate ```

### Seeding:

```npx prisma db seed || npm run seed```


### Checking your tables in your psql terminal:

```SELECT * FROM "Item";```


### In your env. file: 

```sh
DATABASE_URL= postgresql://postgres:NULL@localhost:5432/justdesserts
DB_NAME=justdesserts
DB_USER=
DB_PASSWORD= 
```


### Backlog 

Fix deployment
Add more HTTP requests
Fix frontend
Add Stripe API