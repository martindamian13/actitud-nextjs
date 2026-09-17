import { initBotId } from 'botid/client/core';

// Vercel BotID: invisible bot check for the contact form endpoint
initBotId({
  protect: [
    {
      path: '/api/send-email',
      method: 'POST',
    },
  ],
});
