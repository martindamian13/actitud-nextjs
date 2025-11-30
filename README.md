# Actitud - Edificio Corporativo

Modern, scalable corporate landing page built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Nodemailer** for SMTP email functionality.

## 🚀 Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 🎨 **Tailwind CSS** for maintainable, utility-first styling
- 📧 **SMTP Email Integration** with Nodemailer for corporate email
- ✨ **Framer Motion** for smooth animations
- 📱 **Fully Responsive** design (mobile, tablet, desktop)
- 🎯 **TypeScript** for type safety
- 🔒 **Form Validation** with React Hook Form
- 🖼️ **Image Optimization** with Next.js Image component
- 🎭 **SEO Optimized** with metadata configuration

## 📋 Prerequisites

- Node.js 18+ and npm
- SMTP server credentials (Gmail, Office 365, or custom domain)

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```

3. **Edit `.env.local` with your SMTP credentials:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM_EMAIL=noreply@yourdomain.com
   SMTP_FROM_NAME=Actitud - Edificio Corporativo
   SMTP_TO_EMAIL=info@yourdomain.com
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 SMTP Email Configuration

The contact form uses Nodemailer with SMTP to send emails. Configure your SMTP server credentials.

### Gmail Setup (Recommended for Testing)

1. **Enable 2-Factor Authentication** on your Google Account
2. **Generate an App Password:**
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App Passwords
   - Select "Mail" and "Other (Custom name)"
   - Copy the generated password

3. **Configure `.env.local`:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=youremail@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM_EMAIL=noreply@yourdomain.com
   SMTP_TO_EMAIL=youremail@gmail.com
   ```

### Corporate Domain Setup (Production)

```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@yourdomain.com
SMTP_PASS=your-password
SMTP_FROM_EMAIL=noreply@yourdomain.com
SMTP_TO_EMAIL=info@yourdomain.com
```

## 🏗️ Project Structure

```
actitud-nextjs/
├── app/
│   ├── api/send-email/route.ts   # SMTP email API
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Amenities.tsx
│   ├── Location.tsx
│   ├── FloorPlans.tsx
│   ├── FeaturedAmenities.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── .env.example                  # Environment template
└── tailwind.config.ts            # Tailwind config
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette.

### Content
Update component files to change text and images.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

## 📦 Scripts

```bash
npm run dev          # Development server
npm run build        # Build for production
npm run start        # Production server
npm run lint         # Run linter
```

## 🧪 Testing Email

1. Configure `.env.local`
2. Run `npm run dev`
3. Submit contact form
4. Check inbox for confirmation

## 📖 Tech Stack

- Next.js 14, TypeScript, Tailwind CSS
- Framer Motion, React Hook Form
- Nodemailer for SMTP

## 📝 License

Copyright © 2024 Actitud Edificio Corporativo

---

**Built with Actitud and Vision** ✓
