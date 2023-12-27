# Register user Process

Using register form the user will input `username`, `email` and `password` with the password being encrypted using `bcrypt` package before all register data are sent to MongoDb database.

If successful a `Http Cookie` with `jsonwebtoken` (JWT) will be sent to browser to confirm that the user is authenticated.
