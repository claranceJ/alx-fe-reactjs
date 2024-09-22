# GitHub User Search Application

## Overview
The GitHub User Search Application allows users to search for GitHub profiles using the GitHub API. The application features a search input, displays user information, and links to GitHub profiles. This project was built using React and aims to provide an intuitive user interface for exploring GitHub users.

## Features
- Search for GitHub users by username.
- Display user information such as avatar, name, location, and repositories count.
- Advanced search functionality with filters for location and repository count.
- Responsive design with Tailwind CSS.

## Tools & Technologies
- **React**: For building the user interface.
- **Vite**: For project setup and development server.
- **Axios**: For making HTTP requests to the GitHub API.
- **Tailwind CSS**: For styling the application.
- **Git & GitHub**: For version control and collaboration.
- **Vercel**: For deploying the application.

## Challenges Faced
- **API Integration**: Initially, understanding the GitHub API endpoints and their response structures posed a challenge. Learning to properly handle API requests and responses was essential.
- **State Management**: Managing the state of search results and loading states required careful thought to ensure a smooth user experience.
- **Error Handling**: Implementing proper error handling for API calls was crucial to provide user feedback in case of issues, such as user not found or network errors.
- **Responsive Design**: Ensuring the application was responsive across different devices was challenging but rewarding, as it improved the overall user experience.

## What I Learned
- **React Fundamentals**: Enhanced my understanding of React components, state, and props.
- **API Handling**: Gained experience in making API calls, handling asynchronous operations, and using Axios for HTTP requests.
- **Styling with Tailwind CSS**: Learned how to implement utility-first CSS for rapid styling and responsiveness.
- **Deployment Process**: Understood the steps to deploy a React application on Vercel and how to manage environment variables securely.
- **Version Control**: Improved my skills in using Git for version control and collaboration.

## Getting Started
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/github-user-search.git

    Navigate into the project directory:

    bash

cd github-user-search

Install the dependencies:

bash

npm install

Create a .env file in the root directory and add your GitHub API key:

makefile

REACT_APP_GITHUB_API_KEY=your_api_key

Start the development server:

bash

    npm run dev

    Open your browser and visit http://localhost:3000 to view the application.

Live Demo

Visit the live application at [https://alx-fe-reactjs-indol.vercel.app/].
License

This project is licensed under the MIT License