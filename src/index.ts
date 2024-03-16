import express from 'express';

const port = process.env.PORT;

console.log(`port: ${port}`);

const app = express();

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
