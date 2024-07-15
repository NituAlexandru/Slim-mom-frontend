# SlimMom App Documentation

## Overview

Slimmom is a web application designed to support mothers in their journey to maintain a healthy lifestyle. This app provides a range of features to help mothers calculate their daily calorie intake, make informed dietary choices based on their blood type, and track their daily food consumption and calorie intake.

## Features

Slimmom offers the following key features to its users:

- **Registration:** Users can create an account on Slimmom, providing essential information to personalize their experience.
- **Calorie Calculator:** Calculate your daily calorie intake based on your individual requirements, helping you maintain a healthy diet.
- **Blood Type Diet Recommendations:** Get personalized dietary recommendations based on your blood type to make healthier food choices.
- **Diary Management:**
  - **Diary List:** Create and manage your daily diary entries to track your food consumption.
  - **Diary Foods Search:** Search for foods and their calorie information to easily add them to your diary.
  - **Diary Calendar:** Visualize your daily diary entries on a calendar to monitor your food habits over time.
- **Authentication:** Securely log in to your account with our user-friendly login form.

## Technology Stack

Slimmom is built using a variety of technologies and tools, including:

- **Frontend:** JavaScript, React + Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:**
  - **Frontend:** GitHub Pages
  - **Backend:** Heroku
- **API Documentation:** Swagger

## Getting Started

### Prerequisites

- **Node.js:** v14 or higher
- **npm:** v6 or higher

### Installation

1. Clone the repository:

   git clone https://github.com/NituAlexandru/Slim-mom-frontend.git
   cd Slim-mom-frontend

2. Install dependencies:

   npm install

   # or

   yarn install

### Development

To start the development server:

```sh
npm run dev
# or
yarn dev
```

### Build

To create a production build:

npm run build

# or

yarn build

**Deployment**

To deploy the application to GitHub Pages:

npm run deploy

# or

yarn deploy

**Routing**

The application uses React Router for navigation. The base path for all routes is /Slim-mom-frontend.

- Home: /
- Login: /login
- Register: /register
- Diary: /diary
- Calculator: /calculator
- 404 Not Found: \*

**Components**

- Header: Contains navigation links and user information.
- MainPage: Home page of the application.
- LoginPage: Form for user login.
- RegistrationPage: Form for user registration.
- DiaryPage: Page to manage daily diary entries.
- CalculatorPage: Page to calculate daily calorie intake.
- NotFound: Page shown for undefined routes.
- Context API
- The application uses Context API for state management, particularly for authentication.

AuthContext: Provides authentication state and functions like login, logout, and updateUserProfile.

**Styling**
The application uses Sass for styling. Styles are organized in the src/styles directory and imported into components as needed.
