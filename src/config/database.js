module.exports = {
  database: 'meetapp',
  username: 'postgres',
  password: 'docker',
  dialect: 'postgres',
  host: 'localhost',
  port: 5431,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
