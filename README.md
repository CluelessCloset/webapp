# Clueless Closet WebApp

## About
Why pick your own clothes when you can have a computer do it for you? Clueless Closet is able to take clothes inside your closet, and by making educated decisions based on the weather and machine learned style preferences, our project is able to provide you with accurate information on what you should wear. By working together on this project, we were able to see the power that everyone contributing their skillsets can have. We were able to integrate a front end website, an android application, and a hardware tool, and connect them all together through the power of a back end server.

## Api Documentation:

| Endpoint | Method | Parameters | Return Value | Description
| ------ | ------ | ------ | ------ | ------ |
| /users | POST | email: String, firstName: String, lastName: String, password: String | All public user data | Creates a user | 
| /users/:userId | GET | email: String | Returns all user data | Gets user data by email |
| /users/:userId | PUT | email: String, firstName: String, lastName: String, password: String | Nothing | Updates user information |
| /users/:userId | DELETE | email: String | Nothing | Removes user data |
| /users/login | POST | email: String, password: String | Login data | Login method |
| /hanger | GET | email: String | Hanger ID | Gets active hangers from email |
| /hanger | POST | email: String, name: String, number: Number, selected: Bool | Nothing | Creates a hanger assosiated with an user |
| /hanger | PUT | email: String, name: String, number: Number, selected: Bool | Nothing | Updates a hanger assosiated with an user |
| /hanger | DELETE | email: String | Nothing | Deletes a hanger from an user account |
| /weatherClothes | GET | long: Number, lat: Number | Temperature and rain for the next day | Used in calculating outfit for next day |
| /styleClothes | GET | image: URL | Chance of uglyness in an outfit | Uses machine learning to determin if an outfit is ugly. Used in calculating outfit for next day |
| /getAllClothes | GET | email: String | All clothes of user | Usefull for displaying full wardrobe |
| /getClothes | GET | email: String, long: Number, lat: Number | Full outfit | Used to generate outfits |
