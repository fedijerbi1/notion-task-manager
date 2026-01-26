require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 5000;

// Pour Vercel serverless
if (process.env.VERCEL) {
  module.exports = app;
} else {
  // Pour développement local
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
