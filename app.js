const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const mailRouter = require('./routes/mail/index');
const smsRouter = require('./routes/SMS/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/mail', mailRouter);

app.use('/sms', smsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})