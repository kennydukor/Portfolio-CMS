module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b235c2f4244b99e98fa6527b4226767e'),
  },
});
