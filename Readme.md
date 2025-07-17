

## 📄 `README.md` – `cctemplates-server`

# ccTemplates Server

This project serves the `ccTemplates` web UI — a collection of pre-written technical response templates used internally at Rapid7 for efficient case handling and knowledge sharing.

## 📁 Project Structure

```
cctemplates-server/
├── app.js                # HTTPS static + metrics server
├── public/               # All HTML, CSS, JS templates
├── static/               # Optional static assets (e.g., icons, images)
├── package.json          # Node.js dependencies
├── metrics.db            # SQLite DB for tracking template usage (not versioned)
├── certificates/         # SSL certs for HTTPS (not versioned)
├── .gitignore
```


## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
````

### 2. Run the Server

```bash
node app.js
```

> ✅ Serves all files from `public/` over HTTPS (port 3443)
> ✅ Tracks template usage via `/increment/:template`
> ✅ Displays usage data via `/metrics`

---

## 🧠 Metrics System

* When a template’s "Copy Text" button is clicked, a POST request is sent to:

  ```
  /increment/templateName
  ```
* This increments the count in a local SQLite DB (`metrics.db`).
* Metrics can be viewed at:

  ```
  https://<server>/metrics.html
  ```

---

## 📦 Deployment Notes

This repo is deployed on both **test** and **production** servers using `pm2`.

To restart the app:

```bash
pm2 restart app
```

To deploy manually to a server:

```bash
git pull origin main
pm2 restart app
```

> 🔒 `metrics.db` and `certificates/` are excluded from Git. Generate or copy these locally per environment.

---

## ��️ Development Workflow

We recommend using a branching strategy:

* `main`: production-ready code
* `dev`: development/test server
* Feature branches: e.g., `feature/metrics-chart`, `fix/template-bug`

---

## 🙋 Maintainers

* jjackson-r7
* jordanf-r7

---

## 📝 License

Internal Rapid7 Use Only. Do not distribute outside the company.
