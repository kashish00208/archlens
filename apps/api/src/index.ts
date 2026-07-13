import dotenv from 'dotenv'
import { App } from '@slack/bolt'

dotenv.config()

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/archlens", async ({ command, ack, respond }) => {
  await ack();

  await respond({
    text: `ArchLens received: ${command.text}`
  });
});


app.event("app_mention", async ({ event, client }) => {

  await client.chat.postMessage({
    channel: event.channel,
    text: `👋 Hello <@${event.user}>! ArchLens is online.`
  });

});

(async () => {
  await app.start();
  console.log("🚀 ArchLens running");
})();