import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('old'));

app.listen(port, () => console.log('Chat app Server Started'));
