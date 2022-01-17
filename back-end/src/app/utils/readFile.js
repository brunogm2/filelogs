const readline = require('readline');
const fs = require('fs');

  async function readFile(file) {
      const promise = await new Promise((resolve, reject) => {
        fs.readFile('../back-end/src/app/uploads/auth.log', (err, data) => {
          if (err) reject(err);
          else resolve(data.toString());
        });
      });
      
      const dados = promise.slice('\n');

      return dados;
  }

  module.exports = readFile();


