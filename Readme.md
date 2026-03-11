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

* When a template's "Copy Text" button is clicked, a POST request is sent to:

  ```${url}/increment/templateName
  ```
* This increments the count in a local SQLite DB (`metrics.db`).
* Metrics can be viewed at:

  ```${url}/metrics.html
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

## 🛠️ Development Workflow

We recommend using a branching strategy:

* `main`: production-ready code
* `dev`: development/test server
* Feature branches: e.g., `feature/metrics-chart`, `fix/template-bug`

---

## 🔔 Email Notifications

This repo uses a GitHub Actions workflow to send an email whenever code is pushed to any branch. To enable it, add the following secrets in the repository's **Settings → Secrets and variables → Actions**:

| Secret name       | Description                                      |
|-------------------|--------------------------------------------------|
| `MAIL_SERVER`     | SMTP server hostname (e.g. `smtp.gmail.com`)     |
| `MAIL_PORT`       | SMTP port (e.g. `465` for SSL, `587` for TLS)   |
| `MAIL_USERNAME`   | SMTP login / sender email address                |
| `MAIL_PASSWORD`   | SMTP password or app-specific password           |
| `NOTIFY_EMAIL_TO` | Recipient email address(es), comma-separated     |

Once the secrets are configured, every push to any branch will trigger the workflow and send an email with the commit details and a link to the diff.

---

## 🙋 Maintainers

* jjackson-r7
* jordanf-r7

---

## 📝 License

Internal Rapid7 Use Only. Do not distribute outside the company.