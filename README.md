Welcome to the backend of Just Desserts! 


Creating your database 

psql 
CREATE DATABASE justdesserts; 

Migrations:
npx prisma migrate dev

Seeding:
npx prisma db seed


Checking your tables:
SELECT * FROM "Item";


In your env. file: 
DATABASE_URL= postgresql://postgres:NULL@localhost:/justdesserts
DB_NAME=justdesserts
DB_USER=
DB_PASSWORD=
