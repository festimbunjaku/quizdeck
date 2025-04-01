# QuizDeck

![QuizDeck Logo](https://raw.githubusercontent.com/festimbunjaku/quizdeck/main/public/assets/logo.png)

QuizDeck is an interactive quiz platform built with Laravel and React, offering customizable question sets, real-time scoring, and user progress tracking.

## 🚀 Features

- **User Authentication**: Secure registration and login system
- **Quiz Creation**: Create and manage custom quizzes with multiple categories
- **Dynamic Questions**: Multiple choice, true/false, and open-ended question support
- **Real-time Scoring**: Instant feedback and score calculation
- **Leaderboards**: Global and category-specific leaderboards
- **User Progress Tracking**: Track completion rates and performance over time
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## ⚙️ Tech Stack

### Backend
- **Laravel**: PHP framework for robust API development
- **MySQL**: Relational database for data storage
- **JWT Authentication**: Secure token-based authentication

### Frontend
- **React**: JavaScript library for building the user interface
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Next-generation frontend tooling

## 📋 Prerequisites

- PHP 8.1 or higher
- Composer
- Node.js and npm
- MySQL

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/festimbunjaku/quizdeck.git
cd quizdeck
```

2. Install PHP dependencies:
```bash
composer install
```

3. Install JavaScript dependencies:
```bash
npm install
```

4. Copy the environment file and configure your database:
```bash
cp .env.example .env
```

5. Generate application key:
```bash
php artisan key:generate
```

6. Run database migrations and seed:
```bash
php artisan migrate --seed
```

7. Build frontend assets:
```bash
npm run dev
```

8. Start the development server:
```bash
php artisan serve
```

9. Access the application at `http://localhost:8000`

## 🏗️ Project Structure

```
quizdeck/
├── app/                  # Laravel PHP files
│   ├── Http/             # Controllers, Middleware, Requests
│   ├── Models/           # Eloquent models
│   └── ...               # Other Laravel app files
├── database/             # Migrations, seeds, factories
├── frontend/             # React frontend application
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   └── ...               # Other frontend files
├── public/               # Publicly accessible files
├── resources/            # Views and assets
├── routes/               # API and web routes
└── ...                   # Config files, etc.
```

## 📱 Usage

1. Register a new account or log in with existing credentials
2. Browse available quiz categories
3. Select a quiz to start
4. Answer questions within the time limit
5. View your score and performance statistics
6. Check leaderboards to see how you rank

## 🧪 Running Tests

```bash
# Run PHP tests
php artisan test

# Run JavaScript tests
npm test
```

## 🔄 API Documentation

The QuizDeck API provides endpoints for quiz management, question retrieval, and user progress tracking. API documentation is available at `/api/documentation` when running the application.

## 🚧 Roadmap

- [ ] Add support for image-based questions
- [ ] Implement timed quiz sessions
- [ ] Develop social sharing features
- [ ] Create an admin dashboard
- [ ] Add multi-language support

## 📝 License

[MIT License](LICENSE)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

For questions or support, please reach out to the project maintainer.

---

*Built with ❤️ by Festim Bunjaku*