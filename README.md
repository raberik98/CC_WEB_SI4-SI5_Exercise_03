# CC_WEB_SI4-SI5_Exercise_03

Considering the current hardshipsm the Hungarian government tasked you to create a full stack web application for a new company which will provide cheap beer to every
company in the country. You have been given a list of tasks and some optional tasks as well.

After installing the dependecnies with --- npm i, start your backend with ---npm start and your frontend with ---npm run dev
Note: The React frontend wasn't created with the usual create-react-app, instead, now we are using vite but this won't cause any difference for you.



1, Take a look at your backend starting files. We are going to use two entities for this project: a Beer entity and a Company entity, each has it's own Mongoose Schema and Model created for you. Here is a short summary about what each field means:
       Company:
                -company name
                -date (we don't want to manually set this value, let's give it the default date of the date of the companys registration to the system)
                -rank (store it as a string, we will use it later for giving discounts for example)
                -orders (the orders placed by the company, one order will contain the amount of beer that was ordered and the ID of the beer, which for the sake of simplicity will be stored as a string)
                -balance (all the money the company is going to have to pay)

        1.2 schema for beers,
            we want to store the following data:
                -beer name
                -alcohol precentage
                -price

2, We want to be able to show all of the avaiable beers in our website, to be able to do it let's fill our beers collection with a few beers, write an algorithm in a seperate file which we will only run once and it should fill our beer collection with starter data. We also want to have one company by default: for the sake of saving some time we will only work with this company this time. You can use these starting data:

    [
        {
            name: "Siegbrau premium",
            alcohol: 10,
            price: 1000
        },
        {
            name: "Morgen's",
            alcohol: 5,
            price: 500
        },
        {
            name: "Dog piss",
            alcohol: 3,
            price: 200
        },
    ]

    {
        name: "Company_1",
    }

3, Let's develop a feature where we can add even more beers into our database, on the frontend side you can use react-router-dom or as an alternative you can also use conditional rendering,
    let's inform the user if the beer was registered successfully and also in case of an error.

4, Let's improve the user experience a bit, let's be able to sort the beers based on their price and alcohol precentage as well as let's allow the users to be able to search for beers through the already placed search bar. All of these features should work together.

5, Let's develop a feature where the company can place orders for beer. Let's update the orders and the balance field accordingly, to ascending order first and if the right button is pressed again then in descending order. Let's check for potential rank ups, if the companies balance reaches 300 000 than the rank should change to "advanced_costumer" and above 1 000 000 it should change to trusted regular.

6, The in the backend side, the index.js also includes an incomplete feature, we want our site to have a limit to how many requests it is allowed to handle at a time, currently this limit is capped at 100, let's complete this feature where the server will only take 100 requests/minute. Try to track how many requests have came in so far and be sure to reset it after every minute. If the server receives more requests than the limit then immidietly send back an error response, signalling that too many requests came in.
Use middleweres for this task.
The previous developper unfortunetly left some hard to understand code behind, can you make it more readable?

7, A unknown individual hid some malicious code somewhere in the project that can interract with the previous feature in a negative way, find out what is going on and solve the issue.

8, Let's work a bit on our defense, let's try to track from which IP adress did the requests came from, and limit the number or requests the user can send from one IP address.
From one address only 10 requests can come in each minute. In case more comes in let's send back an error message. Use middleweres for this task.

