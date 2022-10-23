const validContactSchema = require("./validContactSchema");
const contactFavoriteSchema = require("./contactFavoriteShema");
const usersPostSchema = require("./usersPostSchema");
const usersSubscSchema = require("./usersSubscSchema");
const usersVerifySchema = require('./verifyEmailPostSchema');

module.exports = {
  validContactSchema,
  contactFavoriteSchema,
  usersSubscSchema,
  usersPostSchema,
  usersVerifySchema,
};
