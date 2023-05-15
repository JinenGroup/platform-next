import * as dotenv from 'dotenv';
import express from 'express';
import payload from 'payload';

dotenv.config();

const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
    res.redirect('/admin');
});

const start = async () => {
    console.log(process.env.PAYLOAD_SECRET);
    console.log(process.env.MONGODB_URI);

    // Initialize Payload
    await payload.init({
        secret: process.env.PAYLOAD_SECRET,
        mongoURL: process.env.MONGODB_URI,
        express: app,
        onInit: async () => {
            payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
        },
    });

    // Add your own express routes here

    app.listen(3001);
};

start();
