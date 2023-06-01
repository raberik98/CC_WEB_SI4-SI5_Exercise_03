# CC_WEB_SI4-SI5_Exercise_03

Considering the current hardships the Hungarian government tasked you to create a full stack web application for a new company which will provide cheap beer to every
company in the country. You have been given a list of tasks and some optional tasks as well.

After installing the dependecnies with --- npm i, start your backend with ---npm start and your frontend with ---npm run dev
Note: The React frontend wasn't created with the usual create-react-app, instead, now we are using vite but this won't cause any difference for you.



1, Take a look at your backend starting files. As you can see some part of it was commented out, this is going to be an optional task, just ignore it for now.
    Let's create two mongoose schemas:
        1.1 schema for a partner company,
            we want to store the following data:
                -company name
                -date (we don't want to manually set this value, let's give it the default date of the date of the companys registration to the system)
                -rank (store it as a string, we will use it later for giving discounts for example)
                -orders (the orders placed by the company, one order will contain the amount of beer that was ordered and the ID of the beer) [OPTIONAL] try to store it as an ObjectId
                -balance (all the money the company is going to have to pay)

        1.2 schema for beers,
            we want to store the following data:
                -beer name
                -alcohol precentage
                -price

2, We want to be able to show all of the avaiable beers in our website, to be able to do it let's fill our beers collection with a few beers, write an algorithm in a seperate file which we will only run once and it should fill our beer collection with starter data

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

3, Let create a registration form so that companies can register themselves, uppon registration they will receive the "Newcommer" rank and they should also receive a free sample of the cheapest beer available for free (add it to the orders but leave the balance at 0)

4, Let's make develope a feature where the company can place orders for beer. When a company places an order but it already ordered from the same beer let's modify the "amount" property in the already existing beers and update the balance accordingly  

5, On the backend let's make a middleware which will check potential rank ups after every purchase, rank ups can be based on the company balance. If the company ordered more than 100000 HUF worth of beer than it will reach "Trusted Company" rank and after 1000000 HUF it will reach "Trusted Regular" rank which is the highest and should be awarded with 10 from each beer type for free.

6, The in the backend side, the index.js also includes an incomplete feature, we want our site to have a limit to how many requests it as allowed to handle at a time, currently this limit is capped at 100, let's complete this feature where the server will only take 100 requests/minute. Try to track how many requests have came in so far and be sure to reset it after every minute. If the server receives more requests than the limit than immidietly send back an error message, signalling that too much requests came in.
Use middleweres for this task.
The previous developper unfortunetly left some hard to understand code behind, can you make it more readable?

7, A unknown individual hid some malicious code somewhere in the project that can interract with the previous feature in a negative way, find out what is going on and solve the issue.

8, Let's work a bit on our defense, let's try to track from which IP adress did the requests came from, and limit the number or requests the user can send from one IP address.
From one address only 10 requests can come in each minute. In case more comes in let's send back an error message. Use middleweres for this task.

