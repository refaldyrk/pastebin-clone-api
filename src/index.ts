import { Elysia } from "elysia";
import {mongoConnect} from "./helper/Mongo";
import {PasteController} from "./controller/Paste";


mongoConnect()

const app = new Elysia().use(PasteController).get("/", () => "Hello Elysia").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
