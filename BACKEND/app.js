require("dotenv").config();
const express = require("express");
const cors = require("cors");
const notion = require("./notion");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/tasks", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const page = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [{ text: { content: title } }],
        },
      },
    });

    res.status(201).json({ id: page.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create task" });
  }
});

module.exports = app;
