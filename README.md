# 🎮 Gamehub — A Game Library

![](/src/assets/Screenshot_2.png)

**Live URL:** [https://your-live-url.netlify.app](https://your-live-url.netlify.app)  
**GitHub Repo:** [https://github.com/your-username/gamehub](https://github.com/your-username/gamehub)

Gamehub is an engaging online library for discovering and supporting indie game developers.
Users can browse games, read details, and install them if they like.
The project features authentication, protected routes, responsive UI, and a vibrant urban design.

---

## 🧩 Purpose

The goal of **Gamehub** is to provide a visually engaging, user-friendly platform where gamers can explore indie titles while developers showcase their creations.
Built as a **React Single Page Application**, it demonstrates routing, authentication, dynamic data rendering, and animation techniques.

---

## 🌟 Key Features

- Single-page React app with **common header & footer layout**
- **Responsive design** for desktop, tablet, and mobile
- **Dynamic tab titles** for each route
- **Banner Slider** (3+ slides using Swiper)
- **Popular Games section** (sorted by rating)
- **Game Details (Protected Page)** — requires login
- **Firebase Authentication** (Email/Password + Google)
- **Register, Login, Logout & Forget Password**
- **My Profile & Update Information (name + photoURL)**
- **Toast notifications** for success/error
- **404 Not Found page**
- **Additional themed route** (e.g. “Developers” page)
- **Animation integration** using Framer Motion / GSAP
- **Environment variables** for Firebase keys
- Hosted on **Netlify / Surge / Firebase Hosting**

---

## 🧠 Tech Stack & NPM Packages Used

| Category       | Packages                                      |
| -------------- | --------------------------------------------- |
| Core           | `react`, `react-dom`, `react-router-dom`      |
| UI & Styling   | `tailwindcss`, `react-icons`, `swiper`        |
| Authentication | `firebase`                                    |
| State & Utils  | `axios`, `react-hook-form`, `react-toastify`  |
| Animations     | `framer-motion` _(or GSAP / React Spring)_    |
| Dev Tools      | `eslint`, `prettier`, `gh-pages` _(optional)_ |

---

## 🧾 Sample Game Data (`data.json`)

```json
[
  {
    "id": "1",
    "title": "Player Unknowns Battle Ground: PUBG",
    "coverPhoto": "https://example.com/images/pubg.png",
    "category": "FPS",
    "downloadLink": "https://www.pubgmobile.com/en-US/home.shtml",
    "description": "PUBG Mobile is a fast-paced battle royale game where players fight for survival, strategy, and victory on dynamic maps.",
    "ratings": "4.5",
    "developer": "Krafton"
  }
]
```

---

## 🧭 Project Structure

```
/src
 ┣ /components
 ┣ /pages
 ┣ /hooks
 ┣ /data
 ┣ App.jsx
 ┣ index.jsx
.env.example
```

---

## ⚙️ Installation & Setup

1. **Clone Repo**

   ```bash
   git clone https://github.com/your-username/gamehub.git
   cd gamehub
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Create .env File**
   Copy `.env.example` → `.env.local` and add your Firebase keys.

4. **Run Locally**

   ```bash
   npm start
   ```

5. **Build for Production**

   ```bash
   npm run build
   ```

---

## 🔐 Environment Variables

Create `.env` in the root (never commit real values):

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=sender_id
REACT_APP_FIREBASE_APP_ID=app_id
```

🟡 **Note:** Use `.env.example` for placeholders.
🟢 **Never** upload `.env` to GitHub.

---

## 🔥 Firebase Setup

1. Enable **Email/Password** and **Google** sign-in methods.
2. Add **Authorized Domains** (e.g., `your-site.netlify.app`) in Firebase → Authentication → Settings.
3. Copy config keys to `.env`.

---

## 🌍 Routing Setup (Fix Reload 404)

Create a `_redirects` file in `public/`:

```
/*  /index.html  200
```

This ensures SPA routing works on **Netlify/Surge** reloads.

---

## 🔑 Authentication Features

- Firebase `onAuthStateChanged` manages login state.
- Protected routes redirect unauthenticated users to `/login`.
- On login: hide “Login/Register” and show user profile + logout.
- Clicking profile photo opens `/my-profile`.

---

## 🔄 Forget Password

- Redirects to Gmail after reset email is sent.
- Pre-fills email from login form if provided.

---

## 🧍 Update Profile

- `/my-profile` → Update button → `/update-profile`
- Form fields: `photoURL`, `displayName`
- On submit: updates Firebase user data + success toast.

---

## ⚡ Animations

Used **Framer Motion** for:

- Page transitions
- Hover animations on game cards
- Smooth fade-ins for banner & newsletter sections

---

## 📱 Responsiveness

- Fully responsive for **mobile**, **tablet**, and **desktop**.
- Tested with 640px / 1024px breakpoints.
- Uses Tailwind utility classes for adaptive layout.

---

## ❌ 404 & Additional Route

- Custom `NotFound.jsx` page
- Additional route `/developers` for indie dev highlights

---

## 🧾 Example Git Commit Messages

To earn full marks, include **at least 10 meaningful commits**:

1. `init: setup react app and basic folder structure`
2. `feat: add navbar and footer layout`
3. `feat: implement banner slider using swiper`
4. `feat: add popular games section with cards`
5. `feat: configure firebase and setup auth context`
6. `feat: add login/register functionality`
7. `feat: protect game details route`
8. `feat: add forgot password and update profile features`
9. `style: improve responsiveness and theme colors`
10. `chore: add readme and deployment configuration`

---

## 🚀 Deployment

### ▶️ Netlify

1. Connect GitHub repo
2. Set build command: `npm run build`
3. Publish directory: `build`
4. Add environment variables in settings
5. Add `_redirects` file in `public/`

### ▶️ Surge

```bash
npm run build
surge ./build your-site.surge.sh --single
```

Then add domain in Firebase authorized domains.

### ▶️ Firebase Hosting

Add this to `firebase.json`:

```json
"rewrites": [
  { "source": "**", "destination": "/index.html" }
]
```

Then run:

```bash
firebase deploy --only hosting
```

---

## ✅ Submission Checklist

- [x] At least 10 meaningful commits
- [x] README.md with required info
- [x] Responsive design
- [x] Dynamic titles
- [x] Environment variables used
- [x] Authorized Firebase domain
- [x] Hosted live without reload errors

---

## 🙌 Credits

Built by **MD. Khabbab Hossen**
Developed with ❤️ using React, Firebase, Tailwind, and Framer Motion.
