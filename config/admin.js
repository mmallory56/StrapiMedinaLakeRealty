module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd37d823dcd336e2d5b90095f0d0810cd'),
  },
});
