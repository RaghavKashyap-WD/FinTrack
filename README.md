# 💰 FinTrack

> A comprehensive full-stack finance tracking application that makes managing your money simple, secure, and delightful! 🚀

---

## 📋 Overview

FinTrack is a modern, user-friendly finance tracking application designed to help you take control of your financial life. Built with cutting-edge technologies and a focus on user experience, FinTrack provides everything you need to monitor expenses, track income, and achieve your financial goals.

---

## ✨ Features

• **📊 Full-Stack Finance Tracking** - Complete expense and income management with detailed analytics
• **🔐 Secure Authentication** - Robust user authentication and authorization system
• **🎨 Modern UI/UX** - Clean, intuitive interface built with modern design principles
• **⚡ Smooth Integration** - Seamless data flow between frontend and backend
• **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
• **📈 Real-time Analytics** - Live updates and interactive charts for your financial data
• **💾 Data Security** - Encrypted data storage with backup capabilities
• **🎯 Goal Setting** - Set and track your financial goals

---

## 🛠️ Tech Stack

### Backend

- **Flask** - Python web framework for robust API development
- **MySQL** - Reliable relational database for data persistence
- **SQLAlchemy** - Python SQL toolkit and ORM
- **JWT** - Secure token-based authentication

### Frontend

- **Next.js** - React framework for production-ready applications
- **React** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Chart.js** - Beautiful charts and graphs

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- MySQL Server
- Git

### Backend Setup (Flask + MySQL)

1. **Clone the repository**
```bash
git clone https://github.com/RaghavKashyap-WD/FinTrack.git
cd FinTrack
```

2. **Set up virtual environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install Python dependencies**
```bash
pip install -r requirements.txt
```

4. **Configure MySQL database**
```sql
# Create database
mysql -u root -p
CREATE DATABASE fintrack;
exit
```

5. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env file with your database credentials
```

6. **Run database migrations**
```bash
flask db upgrade
```

7. **Start the Flask server**
```bash
python app.py
```

### Frontend Setup (Next.js)

1. **Navigate to frontend directory**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
# Edit .env.local with your API endpoints
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
   Navigate to http://localhost:3000

---

## 📱 Usage

1. **Sign Up/Login** - Create your account or log in to existing one
2. **Dashboard** - View your financial overview at a glance
3. **Add Transactions** - Record your income and expenses
4. **Categorize** - Organize transactions by categories
5. **Analyze** - Use charts and reports to understand your spending patterns
6. **Set Goals** - Define financial goals and track progress
7. **Export Data** - Download your financial data in various formats

---

## 🤝 Contribution

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

**Important Notice:** By contributing, you agree that your contributions may be used in future commercial, closed-source, or paid versions of this project by the repository owner, with or without credit. If you do not agree, please do not submit your code.

---

## 📞 Support

If you have any questions or need help:

- 📧 Email: kshypraghav@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/RaghavKashyap-WD/FinTrack/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/RaghavKashyap-WD/FinTrack/discussions)

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/RaghavKashyap-WD">Raghav Kashyap</a>
</div>

---

⭐ **Star this repository if you found it helpful!** ⭐
