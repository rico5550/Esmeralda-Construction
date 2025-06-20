# Google reCAPTCHA v3 Setup Guide

## 🔑 **Step 1: Get reCAPTCHA Keys**

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click **"+ Create"** to register a new site
3. Fill out the form:
   - **Label**: `Esmeralda Construction Website`
   - **reCAPTCHA type**: Select `reCAPTCHA v3`
   - **Domains**: Add your domains:
     - `localhost` (for development)
     - `your-domain.vercel.app` (your Vercel domain)
     - `esmeraldaconstruction.com` (your custom domain if you have one)
4. Accept terms and click **Submit**
5. Copy your keys:
   - **Site Key** (public, goes in frontend)
   - **Secret Key** (private, goes in environment variables)

## 🛠️ **Step 2: Update Your Code**

### Replace Placeholder Keys

1. **In `index.html`**, replace `6LcYour_Site_Key_Here` with your actual Site Key:
```html
<script src="https://www.google.com/recaptcha/api.js?render=YOUR_ACTUAL_SITE_KEY_HERE" async defer></script>
```

2. **In `src/components/Contact.tsx`**, replace `6LcYour_Site_Key_Here` with your actual Site Key:
```typescript
recaptchaToken = await window.grecaptcha.execute('YOUR_ACTUAL_SITE_KEY_HERE', { 
  action: 'contact_form' 
});
```

### Add Environment Variables

Add to your Vercel environment variables:
```env
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

## 🚀 **Step 3: Deploy & Test**

1. Deploy to Vercel
2. Test the contact form
3. Check Vercel function logs for reCAPTCHA scores
4. Monitor the reCAPTCHA admin console for analytics

## 📊 **Understanding reCAPTCHA v3**

- **Score Range**: 0.0 (likely bot) to 1.0 (likely human)
- **Current Threshold**: 0.5 (you can adjust this in `api/contact.ts`)
- **Actions**: We use `contact_form` to track form submissions
- **Invisible**: Users never see a challenge, it works in the background

## 🔧 **Customization Options**

### Adjust Score Threshold
In `api/contact.ts`, change this line:
```typescript
if (!recaptchaData.success || recaptchaData.score < 0.5) {
```
- **0.3**: More lenient (fewer false positives)
- **0.7**: More strict (blocks more potential bots)

### Add More Actions
You can track different form actions:
```typescript
// Different actions for different forms
await window.grecaptcha.execute('SITE_KEY', { action: 'newsletter_signup' });
await window.grecaptcha.execute('SITE_KEY', { action: 'quote_request' });
```

## 🛡️ **Security Features Now Active**

✅ **Honeypot Field**: Hidden field catches basic bots  
✅ **Rate Limiting**: 5 requests per 15 minutes per IP  
✅ **reCAPTCHA v3**: AI-powered bot detection  
✅ **Input Sanitization**: Prevents XSS attacks  
✅ **Server-side Validation**: All validation happens securely  

## 🚨 **Troubleshooting**

### Common Issues:
1. **"reCAPTCHA failed"** in console:
   - Check if Site Key is correct
   - Ensure domain is registered in reCAPTCHA console

2. **"Security validation failed"**:
   - Score might be too low (< 0.5)
   - Check Secret Key in environment variables

3. **Form works without reCAPTCHA**:
   - This is normal - form degrades gracefully if reCAPTCHA fails
   - Still protected by honeypot and rate limiting 