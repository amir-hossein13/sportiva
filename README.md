# Sportiva

A full-stack web application for sports management and engagement.  
👉 [Live Demo](https://sportiva-gamma.vercel.app)
the backend developer github : https://github.com/usernamesepehr
---

## 🚀 Features

- **Fully Responsive Design** – Works seamlessly across desktop, tablet, and mobile.
- **Frontend:** Built with [React](https://react.dev/) for a fast and interactive user experience.
- **Backend:** Powered by [Laravel](https://laravel.com/) for robust server-side logic and RESTful APIs.
- **Admin Panel** – Manage users, content, and system settings with ease.
- **User Panel** – Personalized dashboards for end-users.
- **Authentication System** – Secure login & registration.
- **Scalable Structure** – Easy to extend and maintain.
---

## 📂 Tech Stack

**Frontend** : https://github.com/amir-hossein13
- React  
- react-router-dom
- TailwindCSS 

**Backend** : https://github.com/usernamesepehr
- Laravel  
- MySQL
**Deployment**
- Vercel (Frontend)  
- render.com & liara is 

---

## ⚙️ Installation & Setup

```bash
### 1. clone the repository for front-end

git clone https://github.com/amir-hossein13/sportiva.git  
cd frontend  
npm i  
npm run dev  

### 2. clone the repository for back-end
git clone https://github.com/usernamesepehr/sportiva.git 
cd backend
cd sportiva
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
