const axios = require('axios');

// Replace with your Slack webhook URL
const slackWebhookUrl = 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL';

// Create a function to send a message to Slack
async function sendSlackMessage(message) {
    try {
        const response = await axios.post(slackWebhookUrl, {
            text: message, // The message you want to send
        });

        console.log('Message sent to Slack: ', response.status);
    } catch (error) {
        console.error('Error sending message to Slack: ', error);
    }
}

// Call the function to send a message
sendSlackMessage('Hello, this is a test message from the Slack webhook integration!');
