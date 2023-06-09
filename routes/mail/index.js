const express = require('express');
const router = express.Router();
const mailer = require('./mail');

router.post('/', (req, res) => {

  const { email }  = req.body;

  console.log(email);

  let emailParam = {
    toEmail: email,     // 수신할 이메일

    subject: 'New Email From Gyunny',   // 메일 제목

    text: `Gyunny 회원님!`                // 메일 내용
  };

  mailer.sendGmail(emailParam);

  res.status(200).send("성공");
})

module.exports = router;