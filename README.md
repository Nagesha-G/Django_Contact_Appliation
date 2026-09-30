# 📇 Django Contact Manager

A simple and practical **Contact Management Web Application** built with **Python, Django, MySQL, HTML, CSS, and JavaScript**.

The project was created to understand how a Django application communicates with a relational database through the Django ORM and how a complete CRUD application works from the browser to the database.

---

## 🚀 Features

* 🏠 Home page
* 👥 View all contacts
* ➕ Add new contacts
* ✏️ Edit existing contacts
* 🗑️ Delete contacts
* 🔍 Search contacts by name
* 📱 Responsive user interface
* 🔐 CSRF protection for forms
* 🗄️ MySQL database integration
* 🧩 Django ORM
* 🌐 Django URL routing
* ⚡ JavaScript browser interactions
* 🎨 Custom CSS interface
* ✨ Three.js visual effects

---

## 🛠️ Technology Stack

| Technology | Purpose              |
| ---------- | -------------------- |
| Python     | Programming language |
| Django     | Web framework        |
| MySQL      | Relational database  |
| Django ORM | Database interaction |
| HTML5      | Page structure       |
| CSS3       | UI and styling       |
| JavaScript | Browser interactions |
| Three.js   | 3D visual effects    |
| Git        | Version control      |
| GitHub     | Source code hosting  |

---

## 🏗️ Application Architecture

```text
                Browser
                   │
                   ▼
              Django URLs
                   │
                   ▼
              Django Views
                   │
          ┌────────┴────────┐
          ▼                 ▼
      Django Forms       Django ORM
                              │
                              ▼
                           MySQL
                              │
                              ▼
                        Contact Data
                              │
                              ▼
                         HTML Template
                              │
                              ▼
                           Browser
```

---

## 📂 Project Structure

```text
djnago_mysql_demo/
│
├── manage.py
│
├── contacts/
│   ├── migrations/
│   ├── templates/
│   │   └── contacts/
│   │       ├── home.html
│   │       ├── contact_list.html
│   │       ├── add_contact.html
│   │       ├── edit_contact.html
│   │       └── delete_contact.html
│   │
│   ├── static/
│   │   └── contacts/
│   │       ├── style.css
│   │       └── app.js
│   │
│   ├── forms.py
│   ├── models.py
│   ├── urls.py
│   └── views.py
│
├── static/
│   └── contacts/
│       ├── style.css
│       └── app.js
│
├── .gitignore
├── README.md
└── requirements.txt
```

---

## 🗄️ Database Model

The main model is `Contact`.

```python
class Contact(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField()

    def __str__(self):
        return self.name
```

Django creates and manages the corresponding MySQL table through migrations.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

```bash
cd djnago_mysql_demo
```

### 2. Create a virtual environment

Windows:

```cmd
python -m venv .venv
```

### 3. Activate the virtual environment

```cmd
.venv\Scripts\activate
```

### 4. Install dependencies

```cmd
pip install -r requirements.txt
```

---

## 🗄️ MySQL Configuration

Create a MySQL database:

```sql
CREATE DATABASE contact_manager;
```

Then configure Django's database settings.

**Do not put your real MySQL password in GitHub.**

Use environment variables for credentials when deploying.

---

## 🔄 Run Migrations

```cmd
python manage.py makemigrations
```

```cmd
python manage.py migrate
```

---

## ▶️ Run the Application

```cmd
python manage.py runserver
```

Open:

```text
http://127.0.0.1:8000/
```

---

## 🔍 Search

The application supports searching contacts by name.

Example:

```text
/contacts/?search=nagesha
```

Django processes the request through the ORM:

```python
Contact.objects.filter(
    name__icontains=search
)
```

---

## 🔐 Security

The application uses Django's CSRF protection for POST requests.

Example:

```html
{% csrf_token %}
```

Sensitive information such as database passwords should be stored outside the source code using environment variables.

---

## 📚 What I Learned

This project helped me understand:

* Django project structure
* Django applications
* Models
* Migrations
* Django ORM
* QuerySets
* Forms
* CRUD operations
* URL routing
* Views
* Templates
* GET and POST requests
* CSRF protection
* MySQL integration
* Static files
* CSS
* JavaScript
* Git and GitHub
* Basic application architecture

Most importantly, I learned how data travels through a web application:

```text
User
 ↓
Browser
 ↓
HTTP Request
 ↓
Django URL
 ↓
Django View
 ↓
Django ORM
 ↓
MySQL
 ↓
Django Response
 ↓
HTML
 ↓
Browser
```

---

## 🔮 Future Improvements

Planned improvements include:

* User authentication
* User-specific contacts
* Better form validation
* Pagination
* Contact categories
* Profile management
* REST API using Django REST Framework
* API authentication
* Production deployment
* Cloud database
* Improved responsive UI
* Automated testing

---

## 👨‍💻 Author

**Nagesha G**

BCA Graduate | Python & Django Developer | Software Engineering Learner

---

## ⭐ Project Status

**Status:** Active Development

This project is continuously being improved while learning Django, backend development, databases, and software engineering fundamentals.

---

## 📄 License

This project is available for learning and educational purposes.
