const express = require("express");
const path = require("path")
const app = express();
const port = process.env.PORT || 3000;
require("./db/connect");
const Register = require("./models/register");

const static_path = path.join(__dirname, "../public");
console.log(static_path);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));

app.get("/", (req, res) => {
    res.send("HELLO E-LITMUS")
});

app.get("/login", (req, res) => {
    res.sendFile(static_path + '/login.html');
});

app.get("/register", (req, res) => {
    res.sendFile(static_path + '/register.html');
});

app.get("/instruction", (req, res) => {
    res.sendFile(static_path + '/instructions.html');
});

app.get("/logout", (req, res) => {
    res.sendFile(static_path + '/login.html');
});

app.post("/register", async(req, res) => {
    try {
        const registerPlayer = new Register({
            userName: req.body.username,
            password: req.body.password,
        })
        const registered = await registerPlayer.save();
        if (res.status(200))
            res.redirect('/login');
        //  res.status(200).render("login");
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post("/login", async(req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const checkusername = await Register.findOne({ userName: username })
        if (checkusername.password === password) {
            res.redirect('/instruction');
            console.log(`${username} and password is ${password}`);
        } else {
            res.send("Incorrect Password");
        }
    } catch (error) {
        console.log(error)
        res.status(400).send("invalid username");
    }
})

app.post("/logout", async(req, res) => {
    try {
        sessionStorage.setItem("Score", null);
        sessionStorage.clear();
        req.session.destroy();
        res.redirect('/login');
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
});