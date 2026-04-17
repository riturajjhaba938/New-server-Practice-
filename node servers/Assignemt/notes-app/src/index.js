require('dotenv').config();
const app = require('./app');
const connectDb = require('./config/db');

const PORT = process.env.PORT || 3000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  });
