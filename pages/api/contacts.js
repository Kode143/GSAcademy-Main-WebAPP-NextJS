import { mongooseConnect } from '@/lib/mongoose';
import { Contact } from '@/models/contact';

import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'POST', 'DELETE', 'PUT'], // Include PUT method for updating read status
});

export default async function handle(req, res) {
  await new Promise((resolve, reject) => {
    cors(req, res, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });

  const { method, query: { id } } = req; 

  await mongooseConnect();

  if (method === 'GET') {
    try {
      const contacts = await Contact.find();
      return res.json(contacts);
    } catch (error) {
      console.error('Error retrieving contacts:', error);
      return res.status(500).json({ error: 'Error retrieving contacts' });
    }
  }

  if (method === 'POST') {
    try {
      const newContact = new Contact(req.body);
      await newContact.save();
      return res.status(201).json(newContact);
    } catch (error) {
      console.error('Error saving contact:', error);
      return res.status(500).json({ error: 'Error saving contact' });
    }
  }

  if (method === 'PUT') { // Handle PUT method for updating read status
    try {
      const { read } = req.body; // Assuming req.body contains the updated read status
      const updatedContact = await Contact.findByIdAndUpdate(
        id,
        { $set: { read } }, // Update the read status
        { new: true } // Return the updated document
      );
      if (updatedContact) {
        return res.status(200).json(updatedContact);
      } else {
        return res.status(404).json({ error: 'Contact not found' });
      }
    } catch (error) {
      console.error('Error updating contact:', error);
      return res.status(500).json({ error: 'Error updating contact' });
    }
  }

  if (method === 'DELETE') {
    try {
      const deletedContact = await Contact.findByIdAndDelete(id);
      if (deletedContact) {
        return res.status(200).json({ message: 'Contact deleted successfully' });
      } else {
        return res.status(404).json({ error: 'Contact not found' });
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      return res.status(500).json({ error: 'Error deleting contact' });
    }
  }

  res.status(405).end(); // Method Not Allowed
}
