module.exports = {
  PORT: process.env.PORT || 8800,
  DB: process.env.DB
    ? process.env.DB
    : `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-y9wgt.mongodb.net/CraftShopDB`,
};
