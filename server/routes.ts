import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { firstName, lastName, email, subject, message } = req.body;
      
      // Validate required fields
      if (!firstName || !lastName || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }
      
      // Log the contact form submission (in a real app, you'd send an email)
      console.log('Contact form submission:', {
        from: `${firstName} ${lastName} <${email}>`,
        subject,
        message,
        timestamp: new Date().toISOString()
      });
      
      // For now, we'll just log it. In production, you'd integrate with:
      // - Email service (SendGrid, AWS SES, etc.)
      // - Contact management system
      // - Notification system
      
      res.json({ success: true, message: 'Message received successfully' });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
