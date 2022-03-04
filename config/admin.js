module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '00e32fbba9bcdeb60c582b4877544c95'),
  },
});
