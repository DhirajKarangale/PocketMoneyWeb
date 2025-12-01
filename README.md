# 🎓 Pocket Money – Student Job Board

A web application connecting students with part-time and internship opportunities across various domains. Built with **React.js** and **Firebase**, it supports real-time job listings, secure authentication, messaging, and dynamic job filters.

**Live Demo:** [https://pocket-money-web.vercel.app/](https://pocket-money-web.vercel.app/)
</br>
**GitHub Repository:** [https://github.com/DhirajKarangale/PocketMoneyWeb](https://github.com/DhirajKarangale/PocketMoneyWeb)

---

## 📝 About

Pocket Money helps students discover and apply for part-time jobs and internships with ease. The platform allows job providers to post opportunities and students to apply, filter, and communicate with providers via email.

**Key Highlights:**

* Real-time job listings with **Firebase Realtime Database**
* Secure user authentication using **Firebase Auth**
* Seeker–provider messaging with **SMTP.js**
* Dynamic filters by role, location, and domain
* Responsive design for desktop and mobile
* Reusable and maintainable React component architecture

---

## 🚀 Features

* 🔐 **User Authentication:** Firebase authentication for secure login/signup
* 📬 **Messaging:** Email-based communication between job seekers and providers
* 📄 **Real-Time Listings:** Jobs updated instantly with Firebase
* 🔎 **Dynamic Filters:** Filter jobs by role, domain, and location
* 📱 **Responsive Design:** Mobile-first UI/UX with clean layout
* ✅ **Form Validation:** Input checks for all forms
* 🔄 **Route Navigation:** Smooth page transitions via React Router
* ⚛️ **Component Architecture:** Reusable and maintainable React components

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* HTML5
* CSS3

**Backend & Database:**

* Firebase Authentication
* Firebase Realtime Database

**Messaging:**

* SMTP.js

---

## 📁 Project Structure

```
/src
  /components     # Reusable UI components (JobCard, Navbar, etc.)
  /pages          # Home, Jobs, Login, Register, Dashboard, Profiles
  /firebase       # Firebase config
  /services       # SMTP.js and other services
  /utils          # Utility functions
App.tsx
index.tsx
/public
  /Screenshots    # Add.png, Dashboard.png, Home.png, JobProviderProfile.png, JobSeekerProfile.png, Login.png, Signup.png
```

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DhirajKarangale/PocketMoneyWeb.git
cd PocketMoneyWeb
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

* Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
* Enable **Authentication** (Email/Password)
* Enable **Firestore / Realtime Database**
* Replace the Firebase config in `src/firebase/config.js` with your own:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

> ⚠️ **Note:** The default config points to a demo Firebase project. Replace it with your own credentials as per your requirements.

### 4. Run the Application

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📸 Preview

![PocketMoney Demo](/public/preview/PocketMoney.gif)

| Home                                 | Add Job                            |
| ------------------------------------ | ---------------------------------- |
| ![Home](public/preview/Home.png) | ![Add](public/preview/Add.png) |

| Dashboard                                      | Job Provider Profile                                             |
| ---------------------------------------------- | ---------------------------------------------------------------- |
| ![Dashboard](public/preview/Dashboard.png) | ![JobProviderProfile](public/preview/JobProviderProfile.png) |

| Job Seeker Profile                                          | Login                                  |
| ----------------------------------------------------------- | -------------------------------------- |
| ![JobSeekerProfile](public/preview/JobSeekerProfil.png) | ![Login](public/preview/Login.png) |

| Signup                                   |
| ---------------------------------------- |
| ![Signup](public/preview/Signup.png) |

---

## 💡 Future Enhancements

* Add **push notifications** for new job postings
* Implement **admin panel** for job moderation
* Add **real-time chat system** for seekers and providers
* Improve **analytics dashboard** for job seekers/providers

---