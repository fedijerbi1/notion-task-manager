# Notion Database Setup

## Required Database Structure

Your Notion database needs at least this property:

- **Name** (Title) - This is where task names will be stored

## How to Create the Database

### Option 1: Create New Database

1. In Notion, create a new page
2. Type `/table` and select "Table - Inline"
3. The default "Name" column is perfect!
4. (Optional) Add more columns:
   - **Status** (Select): To-do, In Progress, Done
   - **Due Date** (Date)
   - **Priority** (Select): High, Medium, Low
   - **Tags** (Multi-select)

### Option 2: Use Existing Database

Make sure your database has a **Title** property (usually called "Name")

## Connect Your Integration

After creating the database:

1. Click the **"..."** menu (top right of database)
2. Scroll down to **"Add connections"**
3. Find and select your **"Task Manager"** integration
4. Click **"Confirm"**

## Get Database ID

1. Click "Copy link to view" from the database menu
2. Your URL looks like: `https://notion.so/workspace/DATABASE_ID?v=VIEW_ID`
3. Copy the `DATABASE_ID` part (32 characters, mix of letters and numbers)
4. Paste it into `BACKEND/notion.env`

Example:
```
https://notion.so/myworkspace/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6?v=...
                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                              This is your DATABASE_ID
```

## Test It

After setup:
1. Run your app
2. Add a task
3. Check your Notion database - the task should appear! ✨
