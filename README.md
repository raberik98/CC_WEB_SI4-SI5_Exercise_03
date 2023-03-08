# CC_WEB_SI4-SI5_Exercise_03

Considering the current hardships the Hungarian government tasked you to create a full stack web application for a new company which will provide cheap beer to every
company in the country. You have been given a list of tasks and some optional tasks as well.

After installing the dependecnies with --- npm i, start your backend with ---npm start and your frontend with ---npm run dev
Note: The React frontend wasn't created with the usual create-react-app, instead now we are using vite but this won't cause any difference for you.



1, Take a look at your backend starting files. As you can see some part of it was commented out, this is going to be an optional task, just ignore it for now.
    Let's create two mongoose schemas:
        1.1 schema for a partner company,
            we want to store the following data:
                -unique identifier
                -company name
                -date when the company decided to sign up
                -rank (store it as a string, we will use it later for giving discounts for example)
                -orders (the orders placed by the company, one order will contain the amount of beer that was ordered and the ID of the beer) [OPTIONAL] try to store it as an ObjectId

        1.2 schema for beers,
            we want to store the following data:
                -unique ident
