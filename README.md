# online-shop

A simple online shop written in Node.js.

## Functions of the Application

- Addin New Users
- Making sure authorized users only have access to certain pages.
- CRUD Operations in shop & cart items.
- Admin Panel used to give feedback to orders.

## Tools & Libraries Used in the Application

- Node.js with third party libraries & packages.
- WSL.
- MongoDb on Docker.

## How to Start the Application

After getting the code on your machine you can use the docker Mongo related images or you can use your own database setup.

### Installing All Dependencies

```bash
npm install
```

### Starting the Docker Containers

1. You have to have a working docker application installed on your machine.
2. Go to the compose directory.
3. Run the docker compose up command.

```bash
cd compose
docker compose up
```

### Setting up the Image Storage Directory

You need to create a directory in the project root directory and name it product-data then add another directory inside it and name it images so that you can store images otherwise the application will fail because it will not find a directory to store the images in!
The path to the images directory related to the project root directory is as follows:

```bash
/product-data/images
```

### Setting up the Stripe API Key

You need to add your stripe key in the
```bassh
/controllers/orders.controller.js
```
and use your own key!
```js
const stripe = require("stripe")(
  "Add your API key right here!"
);
```

