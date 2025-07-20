  const express = require('express');
  const router = express.Router();
  const Contact = require('../models/contact');

  router.post('/contact', async (req, res) => {
    try {
      const { name, email, service, referral, message } = req.body;
      const newContact = new Contact({ name, email, service, referral, message });
      await newContact.save();
      res.status(201).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Something went wrong', error });
    }
  });

  module.exports = router;
