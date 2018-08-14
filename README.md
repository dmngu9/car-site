# Assignment

We are building out a car website to enable users to find the car they want quickly!

This assignment involves creating a page which will display all the cars for a particular brand.

This is a very simple assignment and we do not expect you to overcomplicate things. There are some optional
tasks that you can do additionally if you wish, but they are *not* imperative.


### Important Notes

* we are not expecting pixel perfect implementation
* only edit files inside the `/src` folder
* spend no more than 2-4 hours on this task
* feel free to take liberties with the design if you can improve it
* feel free to utilize a version control tool such as `git`

---

### Requirements

* Node >= 6.10.0

#### 1. Setup

```npm install```

#### 2. Build and Run

```npm start```

#### 3. Testing

```npm test```

---

## Already Completed

Inside `./src/server`, the api's for retrieving all the makes <http://localhost:3010/makes> and cars <http://localhost:3010/cars> have been written and tested. A boilerplate for retrieving cars for a specific make has also been created.

Inside `./src/fronted`, the front end also has some styling and basic react framework including the brands list and routing to navigate to a specific car list.

## Tasks

Below are the tasks you must complete. 

We recommend reading them entirely before commencing and paying close attention to the notes below.

### Task 1: Build a Service to return cars for a make, sorted by price ascending

As a user, I want to see all the cars that belong to one particular make e.g. Ford

The results should be ordered ascending by `price`.

#### Scenario 0
I visit <http://localhost:3010/cars/ford> in my browser and I see the following results:

```json
[{
     "id": "2",
     "makeName": "Ford",
     "modelName": "Fiesta",
     "price": 13450
}, {
     "id": "1",
     "makeName": "Ford",
     "modelName": "Focus",
     "price": 23900
}, {
     "id": "7",
     "makeName": "Ford",
     "modelName": "Mustang",
     "price": 33450
}]
```

#### Scenario 1
I visit <http://localhost:3010/cars/tesla> in my browser and I see the following results:

```json
[{
    "id": "5",
    "makeName": "Tesla",
    "modelName": "Model X",
    "price": 60300
}]
```

#### Scenario 2

I visit the url <http://localhost:3010/cars/not_a_make> in my browser and I see that no cars are returned


### Task 2: Display the cars for a brand on the frontend website

As a user I want to see the cars for the brand I have selected

**Please use the designs in the `/designs` folder (within this repository) for both the mobile and desktop view**

#### Scenario 0

I am on the <http://localhost:3000/cars/ford> page and I see that the three cars are displayed in two columns as per designs

#### Scenario 1

If I then click on the 'Honda' link on the side-bar I see that only the 'Honda Civic' is displayed on the page



### Optional Tasks

These tasks are absolutely optional:

* unit and/or integration tests
* have fun with the design
* link us to something cool you have built in the past as an easter egg