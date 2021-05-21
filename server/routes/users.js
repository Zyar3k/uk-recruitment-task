const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// register
router.post("/register", async (req, res) => {
  try {
    //generate new pass
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      nickname: req.body.nickname,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and res
    const user = await newUser.save();
    res.status(200).json(user._id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    //find usre
    const user = await User.findOne({ nickname: req.body.nickname });
    !user && res.status(400).json("Wrong nickname or password");

    //validate pass
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong nickname or password");

    //send res
    res.status(200).json({
      _id: user._id,
      nickname: user.nickname,
      clickCount: user.clickCount,
      level: user.level,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all useers
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// et specific user by nickname
router.get("/:nickname", async (req, res) => {
  try {
    res.status(200).json(await User.find({ nickname: req.params.nickname }));
  } catch (err) {
    res.status(500).json(err);
  }
});

// updated click/level User _ID from mongo
router.patch("/:userId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: { clickCount: req.body.clickCount, level: req.body.level },
      }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
