const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// Dummy asynchronous operation that might throw an error
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.8; // Simulate success/failure
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}