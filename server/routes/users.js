const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new pass
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      level: 1,
      clickCount: 0,
    });

    //save user and res
    const user = await newUser.save();
    res.status(200).json(user._id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     //find usre
//     const user = await User.findOne({ username: req.body.username });
//     !user && res.status(400).json("Wrong username or password");

//     //validate pass
//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     !validPassword && res.status(400).json("Wrong username or password");

//     //send res
//     res.status(200).json({ _id: user._id, username: user.username });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// get all useers
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// et specific user by username
// router.get("/:username", async (req, res) => {
//   try {
//     res.status(200).json(await User.find({ username: req.params.username }));
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// updated click/level User _ID from mongo
// router.patch("/:userId", async (req, res) => {
//   try {
//     const updatedUser = await User.updateOne(
//       { _id: req.params.userId },
//       {
//         $set: { clickCount: req.body.clickCount, level: req.body.level },
//       }
//     );
//     res.json(updatedUser);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

module.exports = router;
