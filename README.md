# Total Global Solutions

Official website for Total Global Solutions - Your Independent Connectivity Partner

## 🚀 Live Website
- **Production**: [https://totalglobesolutions.com](https://totalglobesolutions.com)
- **GitHub Pages**: [https://totalglobesolution.github.io/totalglobe](https://totalglobesolution.github.io/totalglobe)

## 📋 About
Total Global Solutions is an independent third-party service assistance provider offering guidance for cable, internet, and streaming services. Launched in 2026, we help individuals and households navigate their connectivity options with unbiased, transparent advice.

## 🛠️ Technology Stack
- **Framework**: Next.js 16.0.10
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages (via GitHub Actions)
- **Package Manager**: pnpm

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build
```

## 🌐 Deployment

### Automatic Deployment
The website automatically deploys to GitHub Pages when you push changes to the `main` branch:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub (triggers automatic deployment)
git push origin main
```

### Custom Domain
The website is configured with the custom domain: **totalglobesolutions.com**

The CNAME record is automatically included in deployments via `public/CNAME`.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   └── ...                # Other pages
├── components/            # React components
│   ├── header.tsx         # Site header
│   ├── footer.tsx         # Site footer
│   ├── home/              # Homepage sections
│   └── ui/                # UI components
├── public/                # Static assets
│   ├── CNAME              # Custom domain configuration
│   └── ...                # Images and other assets
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions deployment workflow
```

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration (static export enabled)
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.github/workflows/deploy.yml` - Automated deployment workflow

## 📞 Contact Information

- **Phone**: (855) 683-7625
- **Email**: support@totalglobalsolutions.com
- **Website**: [totalglobesolutions.com](https://totalglobesolutions.com)

## ⚖️ Legal

- Independent third-party service provider
- Not affiliated with any ISP or telecom provider
- Transparent fees and unbiased guidance
- Launched 2026

## 📄 License

© 2026 Total Global Solutions. All rights reserved.

---

**Note**: This website uses static site generation and is optimized for GitHub Pages deployment with automatic updates via GitHub Actions.
