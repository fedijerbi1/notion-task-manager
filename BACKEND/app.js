require("dotenv").config();
const express = require("express");
const cors = require("cors");
const notion = require("./notion");

const app = express();
app.use(cors());
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.json({ message: "Backend is running ✓", status: "ok" });
});

app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    notionConfigured: !!(process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID)
  });
});

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
