#  Page Pulse - Website Audit & SEO Analyzer

A modern web application that analyzes any public website and generates a detailed audit report including SEO, accessibility-related metadata, page statistics, and performance insights.

Built for the **Digital Heroes Software Development Internship Qualification Task**.

---

## 🌐 Live Demo

### Frontend (Vercel)

https://page-pulse-three-blue.vercel.app/

### Backend (Render)

https://page-pulse-1cnk.onrender.com/

---

##  Preview

<img width="100%" alt="Page Pulse Preview" src="https://via.placeholder.com/1200x650.png?text=Page+Pulse+Website+Audit+Dashboard">

> Replace the above image with an actual screenshot of your application after deployment.

---

#  Features

### Website Analysis

-  HTTP Status Code
-  Response Time
-  Page Title
-  Meta Description
-  Word Count
-  H1 Count
-  Total Images
-  Images Missing ALT Text
-  Total Links
-  HTML Language
-  Page Size
-  Heading Structure

---

### SEO Insights

- SEO Score
- Missing Meta Description Detection
- Missing ALT Text Detection
- SEO Recommendations

---

### Error Handling

The application safely handles:

- Invalid URLs
- Website Timeout
- Non-HTML Responses
- Network Errors
- Server Errors

---

### User Experience

- Responsive Design
- Modern Glassmorphism UI
- Animated Dashboard
- Loading Spinner
- Mobile Friendly
- Dark Theme
- Professional Cards
- Lighthouse Optimized

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

---

## Backend

- Node.js
- Express.js
- Axios
- Cheerio
- CORS
- Helmet
- Morgan

---

## Deployment

Frontend

- Vercel

Backend

- Render

---

#  Project Structure

```
PagePulse
│
├── backend
│   ├── routes
│   │      analyze.js
│   ├── utils
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── css
│   │      style.css
│   ├── js
│   │      script.js
│   ├── assets
│   └── index.html
│
├── README.md
└── .gitignore
```

---

#  Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/page-pulse.git
```

Move into the project

```bash
cd page-pulse
```

Install backend dependencies

```bash
cd backend
npm install
```

Run the server

```bash
npm start
```

The backend runs on

```
http://localhost:5000
```

Open

```
frontend/index.html
```

using Live Server.

---

# 📡 API Documentation

## Analyze Website

### Endpoint

```
POST /api/analyze
```

---

### Request

```json
{
    "url":"https://github.com"
}
```

---

### Success Response

```json
{
    "status":200,
    "responseTime":"178 ms",
    "pageSize":"11.81 KB",
    "title":"GitHub",
    "metaDescription":"GitHub helps developers build software together.",
    "wordCount":1345,
    "h1Count":1,
    "images":16,
    "missingAlt":2,
    "links":54,
    "language":"en",
    "headings":[
        "Build Software Better"
    ],
    "seoScore":92,
    "recommendations":[]
}
```

---

### Error Response

```json
{
    "error":"Invalid URL"
}
```

---

#  Testing

The project includes test cases for:

- Happy Path
- Invalid URL
- Timeout Handling

Run tests

```bash
npm test
```

---

#  Lighthouse Score

| Category | Score |
|----------|-------|
|  Performance | 99 |
|  Accessibility | 93 |
|  Best Practices | 100 |
|  SEO | 90 |

---

#  Design Decisions

## 1. Express + Cheerio

Cheerio was chosen because it provides fast and lightweight HTML parsing without launching a browser.

---

## 2. Separate Frontend and Backend

Keeping the frontend and backend independent makes deployment easier and improves maintainability.

---

## 3. Graceful Error Handling

Instead of crashing, every failure returns a structured JSON response so the frontend can display meaningful messages.

---

#  Future Improvements

If more development time were available, I would add:

- Google Lighthouse Integration
- Open Graph Analysis
- Canonical URL Detection
- Robots.txt Analysis
- Sitemap Detection
- SSL Certificate Information
- Page Speed API Integration
- PDF Report Export
- JSON Report Download
- Previous Audit History
- User Authentication
- Dashboard Analytics
- Accessibility Score

---

#  Author

**Udugundla Praveen**

AI & Machine Learning Engineer

Portfolio

https://portfolio-website-theta-azure-22.vercel.app/

GitHub

https://github.com/Praveen775D


---

#  License

This project was created for the **Digital Heroes Internship Qualification Task**.

---

#  Acknowledgements

- Express.js
- Node.js
- Axios
- Cheerio
- Vercel
- Render

---

## 🔗 Live Links

Frontend

https://page-pulse-three-blue.vercel.app/

Backend

https://page-pulse-1cnk.onrender.com/

---

### Built for Digital Heroes Training Task

https://digitalheroesco.com