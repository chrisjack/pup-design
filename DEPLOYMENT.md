# 🚀 Hostinger Deployment Guide

## **Manual Upload Method (Recommended for Shared Hosting)**

### **Step 1: Build Your Project**
```bash
npm run build
```
This creates a static export in the `out/` folder.

### **Step 2: Upload to Hostinger**

1. **Login to Hostinger Control Panel**
2. **Go to File Manager**
3. **Navigate to `public_html`** (or your domain's root folder)
4. **Delete any existing files** (backup first if needed)
5. **Upload ALL contents** from the `out/` folder to `public_html`

### **Step 3: File Structure**
Your `public_html` should look like this:
```
public_html/
├── .htaccess
├── index.html
├── 404.html
├── privacy/
├── terms/
├── work/
├── header/
├── logos/
├── projects/
└── _next/
```

### **Step 4: Verify Deployment**
- Visit your domain
- Test all pages work
- Check contact form
- Verify all links work

## **Future Updates**

### **To Update Your Website:**
1. **Make changes** to your code
2. **Build again:** `npm run build`
3. **Upload new files** from `out/` folder
4. **Replace old files** in Hostinger

### **Git Workflow (Optional):**
```bash
# Make changes
git add .
git commit -m "Update description"
git push origin main

# Then build and upload
npm run build
# Upload out/ folder contents
```

## **Troubleshooting**

### **If pages don't load:**
- Check `.htaccess` file is uploaded
- Verify file permissions (644 for files, 755 for folders)
- Check Hostinger error logs

### **If images don't display:**
- Verify all folders uploaded (header/, logos/, projects/)
- Check file paths are correct
- Ensure images are in the right folders

### **If contact form doesn't work:**
- Check Formspree endpoint is correct
- Verify JavaScript is loading
- Test in different browsers

## **Security Features Included**

✅ **Security Headers** (via .htaccess)
✅ **HTTPS Enforcement**
✅ **XSS Protection**
✅ **Clickjacking Protection**
✅ **Content Security Policy**
✅ **Browser Caching**
✅ **Gzip Compression**

## **Performance Optimizations**

✅ **Static Export** (fastest loading)
✅ **Image Optimization**
✅ **Code Splitting**
✅ **Browser Caching**
✅ **Gzip Compression**
✅ **Minified Assets**

## **Support**

If you encounter issues:
1. Check Hostinger error logs
2. Verify all files uploaded correctly
3. Test locally first: `npm run build && npm start`
4. Contact Hostinger support if needed
