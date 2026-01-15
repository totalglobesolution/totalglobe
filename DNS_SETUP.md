# DNS Configuration for totalglobesolutions.com

## 🌐 Custom Domain Setup

Your GitHub Pages site is configured to use the custom domain: **totalglobesolutions.com**

## 📋 Required DNS Settings

Configure these DNS records at your domain registrar (e.g., GoDaddy, Namecheap, Cloudflare, etc.):

### Option 1: Using A Records (Recommended)

Add these **4 A records** pointing your apex domain to GitHub Pages:

```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153

Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.109.153

Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.110.153

Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.111.153
```

Add a **CNAME record** for www subdomain:

```
Type: CNAME
Name: www
Value: totalglobesolution.github.io
```

### Option 2: Using CNAME (Alternative)

If your registrar supports CNAME flattening:

```
Type: CNAME
Name: @ (or leave blank for root domain)
Value: totalglobesolution.github.io

Type: CNAME
Name: www
Value: totalglobesolution.github.io
```

## ✅ Verification Steps

### 1. Check DNS Propagation
Use these tools to verify your DNS records:
- https://dnschecker.org
- https://www.whatsmydns.net
- Command line: `nslookup totalglobesolutions.com`

### 2. GitHub Pages Settings
1. Go to: https://github.com/totalglobesolution/totalglobe/settings/pages
2. Under "Custom domain", ensure it shows: `totalglobesolutions.com`
3. Enable "Enforce HTTPS" (wait for certificate provisioning)

### 3. Test Your Domain
Once DNS propagates (can take 24-48 hours):
- Visit: https://totalglobesolutions.com
- Visit: https://www.totalglobesolutions.com
- Both should show your website with HTTPS

## ⏱️ DNS Propagation Timeline

- **Minimum**: 5-30 minutes
- **Typical**: 2-4 hours
- **Maximum**: 48 hours

Be patient! DNS changes take time to propagate globally.

## 🔍 Common DNS Settings by Registrar

### GoDaddy
1. Login → My Products → DNS
2. Add records as shown above
3. TTL: 600 seconds (or default)

### Namecheap
1. Dashboard → Domain List → Manage
2. Advanced DNS tab
3. Add records as shown above
4. TTL: Automatic

### Cloudflare
1. Dashboard → DNS → Records
2. Add records as shown above
3. **Important**: Set Proxy status to "DNS Only" (gray cloud)
4. TTL: Auto

### Google Domains
1. DNS settings
2. Custom records section
3. Add records as shown above
4. TTL: Default

## 🔧 Troubleshooting

### Domain Not Resolving
```bash
# Check if DNS is configured
nslookup totalglobesolutions.com

# Check if pointing to GitHub
dig totalglobesolutions.com +short
```

Should return one of the GitHub Pages IP addresses.

### SSL Certificate Not Provisioning
1. Ensure DNS is properly configured
2. Disable "Enforce HTTPS" in GitHub settings
3. Wait 5 minutes
4. Re-enable "Enforce HTTPS"
5. Wait up to 24 hours for certificate

### "Domain is improperly configured" Error
1. Verify CNAME file exists: `public/CNAME`
2. Verify it contains only: `totalglobesolutions.com`
3. Check GitHub Pages settings
4. Remove and re-add custom domain in GitHub settings

### Redirects Not Working
- Ensure both apex and www domains are configured
- Enable redirect from www to apex (or vice versa) in GitHub settings
- Wait for DNS propagation

## 📊 Current Configuration

Based on your setup:

✅ **Repository**: totalglobesolution/totalglobe  
✅ **Branch**: main  
✅ **Source**: GitHub Actions  
✅ **Custom Domain**: totalglobesolutions.com  
✅ **CNAME File**: Created in `public/CNAME`  

## 🔐 Security Features

Once DNS is configured and certificate is issued:

- ✅ **Free SSL/TLS**: Automatic HTTPS
- ✅ **HTTP → HTTPS**: Automatic redirect
- ✅ **Modern encryption**: TLS 1.2/1.3
- ✅ **Certificate auto-renewal**: Handled by GitHub

## 📞 Next Steps

1. **Configure DNS** at your domain registrar (if not already done)
2. **Wait for propagation** (check with dnschecker.org)
3. **Verify HTTPS** works on your domain
4. **Test deployment** by making a small change and pushing

## 💡 Pro Tips

- Use A records for best compatibility
- Set TTL to 600 seconds (10 minutes) for faster updates during setup
- Increase TTL to 3600+ once everything is working
- Always test with incognito/private browsing to avoid cache issues
- Clear browser cache if site doesn't update

---

**DNS configured and ready!** Your domain will start working once DNS propagates. 🎉
