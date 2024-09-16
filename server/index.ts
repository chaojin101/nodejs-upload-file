import { Elysia, t } from "elysia";

const app = new Elysia()
  .post("/body", ({ body }) => body, {
    body: t.Object({
      file: t.File(),
    }),
  })
  .listen(4000);

console.log("Server running on port 4000");
