const express = require('express');
const cors = require('cors');

require(`./connection.js`);
const userModel = require(`./models/userData.js`);

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());


app.post("/usernew", async (req, res) => {
    try {
        const { userEmail } = req.body;
        console.log("Email:- ", userEmail);
        const userExists = await userModel.findOne({ userEmail });
        if (userExists) {
            return res.status(400).send("Email Already in use!");
        }
        const data = req.body;
        const newUser = new userModel(data);
        const savedUser = await newUser.save();
        return res.status(200).json({savedUser, message:"User Created Successfully!"})
    } catch (error) {
        console.log(error);
        res.status(500).send("Error during user creation");
    }

})

app.post("/login", async (req, res) => {
    const { userEmail, userPassword } = req.body;
    try {
      const user = await userModel.findOne({ userEmail });
      if (!user) {
        console.log("Email not found");
        return res.status(400).send("Email not found!");
      }
      if (user.userPassword !== userPassword) {
        console.log("Incorrect password");
        return res.status(400).send("Incorrect password!");
      } else {
        console.log("Logged in successfully");
        res.status(200).json({message: "Logged in successfully!", user})  
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error during login");
    }
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}/`);
});
