# Task Manager - Notion Integration

A simple task manager that sends tasks directly to your Notion database.

## Setup Instructions

### 1. Get Notion API Credentials

1. Go to [Notion Developers](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name it "Task Manager" and submit
4. Copy the **Internal Integration Token** (this is your API key)
5. Go to your Notion database page
6. Click the "..." menu → "Add connections" → Select your integration
7. Copy the database ID from the URL: `notion.so/[workspace]/[DATABASE_ID]?v=...`

### 2. Configure Backend

1. Open `BACKEND/notion.env`
2. Replace the values:
   ```
   NOTION_API_KEY=secret_xxxxxxxxxxxxx
   NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   PORT=5000
   ```

### 3. Install Dependencies

Backend:
```bash
cd BACKEND
npm install cors
npm start
```

Frontend:
```bash
cd frontend
npm start
```

### 4. Deploy to Vercel

#### Deploy Backend:
```bash
cd BACKEND
vercel
```
- Follow the prompts
- Add environment variables in Vercel dashboard:
  - `NOTION_API_KEY`
  - `NOTION_DATABASE_ID`

#### Deploy Frontend:
```bash
cd frontend
vercel
```
- Update `frontend/.env.production` with your backend URL
- Rebuild and deploy

### 5. Set as Homepage

After deploying the frontend to Vercel:
1. Copy your Vercel URL (e.g., `https://your-app.vercel.app`)
2. Set it as your browser homepage

## Usage

1. Enter a task in the input field
2. Click "Add Task"
3. Task will be created in your Notion database!

## Project Structure

```
nav2/
├── BACKEND/
│   ├── app.js          # Express app with API routes
│   ├── server.js       # Server entry point
│   ├── notion.js       # Notion client configuration
│   ├── notion.env      # Environment variables
│   └── package.json
└── frontend/
    └── src/
        ├── App.js      # Main task input component
        └── App.css     # Styling
```
