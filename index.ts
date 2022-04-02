import { App } from "@slack/bolt";
import { google, calendar_v3 } from "googleapis";
import "dotenv/config";

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const calendar = google.calendar({
  version: "v3",
  auth: process.env.GOOGLE_API_KEY,
});

app.message("木曜定例", async ({ message, say }) => {
  await say(`Hey there`);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();
