const path = require('node:path');
module.exports = {
  type: 'sqlite',
  database: path.resolve(__dirname, './db.sqlite3'),
  entities: ['dist/**/entity-*.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
// npx typeorm migration:create -n CoffeeRefactor
