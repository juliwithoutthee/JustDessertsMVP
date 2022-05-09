Welcome to the backend of Just Desserts! 


Creating your database 

psql 
CREATE DATABASE justdesserts; 

Migrations:
npx prisma migrate dev

Seeding:
npx prisma db seed


Checking your tables in your psql terminal:
SELECT * FROM "Item";


In your env. file: 
DATABASE_URL= postgresql://postgres:NULL@localhost:5432/justdesserts
DB_NAME=justdesserts
DB_USER=
DB_PASSWORD=
