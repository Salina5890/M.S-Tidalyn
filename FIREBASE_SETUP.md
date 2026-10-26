# M.S TIDALYN — Firebase Setup Guide

## Files Created

| File | Purpose |
|------|---------|
| `src/lib/firebase.js` | Firebase config + `submitProjectInquiry()` helper |
| `.env.example` | Template for required environment variables |
| `firestore.rules` | Secure Firestore Security Rules |
| `src/utils/useScrollReveal.js` | IntersectionObserver scroll reveal hook |

---

## Step 1 — Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Add project** → give it a name (e.g. `mstidalyn-prod`)
3. Enable **Google Analytics** (optional)
4. Click **Create project**

---

## Step 2 — Register a Web App

1. In the Firebase project, click the **</>** (Web) icon
2. Give it a nickname: `MS Tidalyn Web`
3. Click **Register app**
4. Copy the `firebaseConfig` object shown

---

## Step 3 — Create .env File

Duplicate `.env.example` to `.env` and paste your credentials:

```bash
cp .env.example .env
```

Then fill in each `VITE_FIREBASE_*` value from the config you copied.

> ⚠️ **Never commit `.env` to git.** It is already in `.gitignore`.

---

## Step 4 — Enable Cloud Firestore

1. In Firebase Console → **Firestore Database**
2. Click **Create database**
3. Choose **Start in production mode** (NOT test mode)
4. Select your preferred region (e.g. `us-central1`)
5. Click **Done**

---

## Step 5 — Deploy Security Rules

Install Firebase CLI (if not already):
```bash
npm install -g firebase-tools
firebase login
firebase init firestore
```

Then deploy the rules:
```bash
firebase deploy --only firestore:rules
```

This deploys `firestore.rules`, which:
- ✅ Allows anyone to **submit** a validated inquiry
- ❌ Blocks public reads of inquiries
- ❌ Blocks public updates/deletes
- ✅ Allows admins (Firebase custom claims) to read/update

---

## Step 6 — Set Up Admin Access

To create an admin user who can view submitted inquiries, you must set a **Firebase Custom Claim** server-side. Use the Firebase Admin SDK from a secure backend:

```js
// Requires Firebase Admin SDK (NOT in frontend code)
await admin.auth().setCustomUserClaims(uid, { admin: true });
```

Never set admin roles from the client — this is a deliberate security boundary.

---

## Step 7 — Restart Dev Server

```bash
npm run dev
```

The contact form will now write validated inquiries to:
**Firestore > `projectInquiries` collection**

---

## What Was Added / Changed

### New Files
- `src/lib/firebase.js` — Firebase init + `submitProjectInquiry()` with validation
- `src/utils/useScrollReveal.js` — Scroll reveal hook using IntersectionObserver
- `firestore.rules` — Production-ready security rules
- `.env.example` — Template for environment variables

### Modified Files
- `src/pages/Contact/ContactPage.jsx` — Connected to Firestore, added loading/error/success states, field validation, budget field, inquiry ref pill
- `src/pages/Contact/ContactPage.css` — Added disabled, error banner, field validation, Firebase badge, ref pill styles
- `src/pages/Home/HomePage.jsx` — Scroll reveal added
- `src/pages/Services/ServicesPage.jsx` — Staggered card reveal
- `src/pages/About/AboutPage.jsx` — Staggered panel reveal
- `src/pages/Products/ProductsPage.jsx` — Scroll reveal added
- `src/components/sections/Hero/Hero.jsx` — Added `animate-soar-4` to pillars
- `src/styles/animations.css` — Enhanced with scroll reveal, stagger delays, spinner, reduced-motion
- `package.json` — Added `firebase ^13.0.0`
