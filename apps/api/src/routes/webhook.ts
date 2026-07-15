import express from "express";
import { Webhooks } from "@octokit/webhooks";

const router = express.Router();

const webhooks = new Webhooks({
  secret: process.env.WEBHOOK_SECRET!,
});

// Event handlers
webhooks.on("pull_request", ({ payload }) => {
  console.log(`PR ${payload.action}: ${payload.pull_request.title}`);
});

webhooks.on("push", ({ payload }) => {
  console.log(`Push to ${payload.ref} by ${payload.pusher.name}`);
});

// POST /
router.post(
  "/",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      await webhooks.verifyAndReceive({
        id: req.headers["x-github-delivery"] as string,
        name: req.headers["x-github-event"] as any,
        signature: req.headers["x-hub-signature-256"] as string,
        payload: req.body.toString("utf8"),
      });

      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(401);
    }
  }
);

export default router;