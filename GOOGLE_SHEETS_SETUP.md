# Google Sheets Waitlist Setup

This guide explains how to set up Google Sheets to collect waitlist signups.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Waitlist Signups" (or whatever you prefer)
4. Add headers in Row 1:
   - A1: `Email`
   - B1: `Timestamp`

## Step 2: Create the Apps Script

1. In your spreadsheet, go to **Extensions → Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Check for duplicate emails
    const emails = sheet.getRange('A:A').getValues().flat();
    if (emails.includes(data.email)) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'duplicate' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Append new row
    sheet.appendRow([data.email, data.timestamp]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function
function testDoPost() {
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        email: 'test@example.com',
        timestamp: new Date().toISOString()
      })
    }
  };
  console.log(doPost(mockEvent).getContent());
}
```

3. Click **Save** (Ctrl/Cmd + S)
4. Name the project (e.g., "Waitlist Handler")

## Step 3: Deploy the Apps Script

1. Click **Deploy → New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Configure:
   - **Description**: Waitlist API
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Authorize the app when prompted (click through the "unsafe" warning - it's your own script)
6. **Copy the Web app URL** - you'll need this!

The URL looks like: `https://script.google.com/macros/s/AKfycb.../exec`

## Step 4: Configure Your App

### For Local Development

Create a `.env` file in your project root:

```
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### For Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to **Settings → Environment Variables**
3. Add:
   - Name: `VITE_GOOGLE_APPS_SCRIPT_URL`
   - Value: Your Apps Script URL
4. Redeploy your app

## Testing

1. Start your dev server: `npm run dev`
2. Submit a test email through the waitlist form
3. Check your Google Sheet - a new row should appear!

## Security Notes

- The Apps Script URL will be visible in browser DevTools
- For an MVP/early waitlist, this is typically acceptable
- If concerned about spam, you can add:
  - Rate limiting in Apps Script
  - reCAPTCHA integration
  - Email validation via a proper backend later

## Troubleshooting

**Emails not appearing in sheet?**
- Check browser console for errors
- Verify the Apps Script URL is correct in your `.env` file
- Make sure you restarted the dev server after adding the env var

**Getting CORS errors?**
- The app uses `mode: 'no-cors'` which should work
- If you need to read responses, update Apps Script to return proper CORS headers

**Apps Script authorization issues?**
- Re-deploy with a new version
- Make sure "Who has access" is set to "Anyone"
