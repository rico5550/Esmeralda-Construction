# 🚀 Quick Deployment Commands

## **Pre-Deployment Testing**
```bash
# Build check
npm run build

# Lint check (ignore warnings if pre-existing)
npm run lint

# Dev server test
npm run dev
```

## **Critical File Updates**
Replace these placeholder values:

### **1. index.html (Line 9)**
```html
<script src="https://www.google.com/recaptcha/api.js?render=YOUR_RECAPTCHA_SITE_KEY"></script>
```

### **2. src/components/Contact.tsx (Line 83)**
```typescript
const token = await window.grecaptcha.execute('YOUR_RECAPTCHA_SITE_KEY', {
```

## **Vercel Environment Variables**
```env
BREVO_API_KEY=your_actual_brevo_key
BREVO_SENDER_EMAIL=noreply@esmeraldaconstruction.com
BREVO_TEMPLATE_ID=your_template_id_if_using_templates
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
```

## **Post-Deployment Tests**
```bash
# 1. Security headers check
# Visit: https://securityheaders.com/
# Enter your domain, should get A+ rating

# 2. Form test
# Fill out contact form, check both emails arrive

# 3. Rate limit test
# Submit form 6 times quickly, 6th should be blocked

# 4. Mobile test
# Test form on phone/tablet
```

## **Troubleshooting Commands**
```bash
# If build fails
rm -rf node_modules package-lock.json
npm install
npm run build

# Check function logs in Vercel Dashboard:
# Dashboard → Functions → /api/contact
```

## **Emergency Rollback**
If something breaks:
1. Go to Vercel Dashboard
2. Deployments tab  
3. Click "..." on previous working deployment
4. Select "Promote to Production"

---
**You're ready to deploy! 🎉** 