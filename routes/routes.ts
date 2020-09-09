import { Router } from "https://deno.land/x/oak/mod.ts";

import db from "../db.ts";

import { getUsers, addUsers } from "../controllers/users.ts";

const router = new Router();

// @desc Get users
// GET /users

router.get("/users", getUsers);

// @desc Add user
// POST /register

router.post("/register", addUsers);

export { router };
