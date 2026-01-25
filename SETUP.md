# Quick Start Guide

## ✅ What's Been Created

Your task manager app is ready! Here's what you have:

### Backend (BACKEND folder)
- Express server that connects to Notion API
- Endpoint to create tasks in your Notion database
- Ready for Vercel deployment

### Frontend (frontend folder)
- Beautiful task input interface
- Real-time feedback when adding tasks
- Mobile-responsive design

## 🚀 Next Steps

### Step 1: Setup Notion (Required)

1. **Create a Notion Integration:**
   - Go to https://www.notion.so/my-integrations
   - Click "+ New integration"
   - Name: "Task Manager"
   - Submit and copy the **Integration Token**

2. **Create or Prepare Your Database:**
   - Create a new database in Notion (or use existing)
   - Make sure it has a "Name" property (title type)
   - Click "..." → "Add connections" → Select "Task Manager"
   - Copy the database ID from URL: `notion.so/xxxxx/[THIS_PART]?v=`

3. **Configure Backend:**
   - Open: `BACKEND/notion.env`
   - Add your credentials:
   ```
   NOTION_API_KEY=secret_your_token_here
   NOTION_DATABASE_ID=your_database_id_here
   PORT=5000
   ```

### Step 2: Test Locally

Run these commands in separate terminals:

**Terminal 1 - Backend:**
```bash
cd BACKEND
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

Open http://localhost:3000 and test adding a task!

### Step 3: Deploy to Vercel

#### Deploy Backend First:
```bash
cd BACKEND
npm install -g vercel
vercel login
vercel
```
- Follow prompts
- In Vercel dashboard, add environment variables:
  - `NOTION_API_KEY` = your_notion_token
  - `NOTION_DATABASE_ID` = your_database_id
- Copy your backend URL (e.g., `https://your-backend.vercel.app`)

#### Deploy Frontend:
```bash
cd frontend
vercel
```
- Update `frontend/.env.production`:
  ```
  REACT_APP_API_URL=https://your-backend.vercel.app
  ```
- Redeploy: `vercel --prod`

### Step 4: Set as Homepage

1. Copy your frontend Vercel URL
2. In your browser settings, set it as homepage
3. Enjoy your personal task manager! 🎉

## 📝 Features

- ✅ Add tasks instantly to Notion
- ✅ Clean, modern interface
- ✅ Real-time success/error feedback
- ✅ Mobile responsive
- ✅ Fast and lightweight

## 🔧 Troubleshooting

**"Failed to add task" error:**
- Check BACKEND/notion.env has correct credentials
- Verify Notion integration is connected to database
- Make sure backend server is running

**CORS errors:**
- Ensure backend URL is correct in .env files
- Check Vercel environment variables are set

**Can't connect to backend:**
- Verify backend is running on port 5000
- Check no other app is using port 5000
