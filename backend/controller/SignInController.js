const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../model/User");

function SignInController() {
  return {
    async Home(req, res) {
      return res.status(200).send("Hello");
    },
    async SignUp(req, res) {
      console.log("req.body", req.body);
      const { username, email, password, confirmPassword } = req.body;
      if (!username || !email || !password || !confirmPassword)
        return res.status(400).json({ message: "Enter All Details" });

      if (password !== confirmPassword)
        return res.status(400).json({ message: "Enter Same password" });

      const passwordHased = await bcrypt.hash(password, 10);
      console.log(passwordHased);

      const x = await User.findOne({ email: email });
      if (x) return res.status(400).json({ message: "Email Already exists!" });

      const user = await new User({
        username,
        email,
        password: passwordHased,
      });

      await user
        .save()
        .then(() => console.log(`Saved Successfully`))
        .catch((err) => console.log(err));
      console.log(user);
      return res.status(200).json({ message: "Saved" });
    },
    async SignIn(req, res) {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ message: "Enter Credentials" });
      const user = await User.findOne({ email: email });
      const p = await bcrypt.compare(password, user.password);
      if (!p) return res.status(400).json({ message: "Invalid Credentials!" });
      if (!user)
        return res.status(400).json({ message: "Invalid Credentials!" });
      else {
        const token = await user.generateAuthToken();
        console.log(token);

        res.cookie("chek-login-token", token, {
          expiresIn: new Date(Date.now() + 1000000),
          httpOnly: true,
        });

        return res.status(200).json({ message: "Success!" });
      }
    },
  };
}

module.exports = SignInController;
