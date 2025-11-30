# 📝 Mini Audit Trail Generator  
A full-stack Next.js application that tracks changes made to text by saving multiple versions and displaying the differences (added and removed words), timestamps, and length variations.

This project was built as part of the Software Engineering assignment. It includes version tracking, diff calculation, persistent storage, API routing, and deployment.

---

## 🚀 Live Demo  
🔗 **Deployed URL:** *Add your Vercel link here*  

---

## 📌 Features  

### ✔ Version Tracking  
- Saves every version of the text using the **Save Version** button  
- Tracks words that were **added** and **removed**  
- Each version stores:
  - UUID  
  - Timestamp  
  - Added words  
  - Removed words  
  - Old text length  
  - New text length  

### ✔ Difference Detection  
Automatically computes the difference between the previous version and the new version.

### ✔ Persistent Storage  
- Uses **JSON file (audit.json)** in development  
- Automatically switches to deployment storage (Filesystem-safe)  
- Ensures the history does not disappear on refresh  

### ✔ Backend API Routes  
Built using **Next.js App Router** with full server-side logic.

### ✔ Fully Deployed  
Runs seamlessly on Vercel across all devices.

---

## 🏗️ Tech Stack  

| Layer        | Technology        |
|--------------|-------------------|
| Frontend     | Next.js 14 (App Router) |
| Backend API  | Next.js API Routes |
| Storage      | JSON file (local) |
| Deployment   | Vercel |
| Language     | TypeScript |

---

## 📂 Folder Structure  

```
audit-trail/
├── data/
│   └── audit.json
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── api/
│   │   │   ├── save-version/
│   │   │   │   └── route.ts
│   │   │   ├── versions/
│   │   │   │   └── route.ts
│   ├── lib/
│   │   └── storage.ts
├── public/
├── package.json
└── README.md
```

---

## 🔧 How It Works  

### 1️⃣ User types text in the text area  
### 2️⃣ Clicking **Save Version** triggers a POST request:  

```
POST /api/save-version
```

### 3️⃣ Backend logic performs:  
- Load previous text  
- Split text into words  
- Compare to find **added** and **removed** words  
- Generate an entry object:
```ts
{
  id: uuid(),
  timestamp,
  addedWords,
  removedWords,
  oldLength,
  newLength
}
```

### 4️⃣ Entry is saved into persistent storage  
### 5️⃣ GET request loads all versions:  

```
GET /api/versions
```

### 6️⃣ UI displays all versions in a clean card format.

---

## 🛠️ Installation & Running Locally  

### 1️⃣ Clone the repository  
```
git clone https://github.com/your-username/audit-trail.git
cd audit-trail
```

### 2️⃣ Install dependencies  
```
npm install
```

### 3️⃣ Run the server  
```
npm run dev
```

### 4️⃣ Open in browser  
```
http://localhost:3000
```

---

## 🌐 Deployment  

This application is deployed using **Vercel**, which automatically handles:

- Building the Next.js frontend  
- Deploying API routes  
- Serving the application globally  

Simply connect your GitHub repo to Vercel and click **Deploy**.

---

## 📸 Screenshots  

> Add the screenshots of:  
> - Home Page  
> - Saving a version  
> - Version history with changes  

---

## 🙋‍♂️ Author  
**Your Name**  
B.Tech - Electronics & Communication Engineering  
Minor in Data Science  

---

## ✔ Assignment Requirements Covered  

| Requirement | Status |
|------------|--------|
| Frontend UI | ✅ Done |
| API Endpoints | ✅ Done |
| Version Diff | ✅ Done |
| Storage System | ✅ JSON storage implemented |
| Deployment | ✅ Working on Vercel |
| Documentation | ✅ This README |

---

## 🎉 Conclusion  
This project demonstrates a complete mini full-stack audit trail system using Next.js, including text diffing, API routing, storage, and deployment.

