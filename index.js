import express from 'express';

const app = express();

app.use(express.static('public'));

app.listen(4000, () => {
    console.log("Server started at http://localhost:4000");
});