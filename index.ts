import { App } from "@slack/bolt";
import "dotenv/config";

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.message("月曜定例", async ({ message, say }) => {
  await say(`Hey there`);
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
