# AtlasBooks

![GitHub repo size](https://img.shields.io/github/repo-size/jfmonsa/AtlasBooks-front)
![GitHub contributors](https://img.shields.io/github/contributors/jfmonsa/AtlasBooks-front)
![GitHub last commit](https://img.shields.io/github/last-commit/jfmonsa/AtlasBooks-front)

Welcome to AtlasBooks! This is an academic project developed by a group of systems engineering students, AtlasBooks is a web application that allows users to upload, download, comment on, and rate books freely. Inspired by [Z-Library](https://singlelogin.re/), we believe in their mission and have taken on the challenge to develop this project to showcase our skills in both frontend and backend development.
PERN stack

> [!NOTE]  
> This repo contains the frontend part of AtlasBooks.

<p style="text-align:center;">
  <img alt="" src="./public/home-screenshot.png"  style="height:400px">
</p>

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Features (Include videos)](#2-features)
3. [Technologies Used](#3-technologies-used-tech-stack)
4. [Methodology](#4-methodology)
5. [Future Improvements](#5-future-improvements-todo)
6. [Installation and Contributing Guide](#6-installation-and-contributing-guide)
7. [Team Members](#7-team-members)

## 1. Project Overview

<details>
  <summary>Click to expand!</summary>
  
  The technical implementation of the PERN stack allowed us to structure and develop our virtual library project efficiently and organized. This combination facilitated a clear division between frontend and backend, promoting agile and collaborative     development that resulted in a robust and scalable product. Our project highlighted the importance and benefits of teamwork and effective communication through the Scrum methodology, ensuring continuous delivery of value.

We hope you find AtlasBooks a useful and inspiring project. Thank you for your interest!

</details>
  
## 2. Features
<details>
  <summary>Click to expand!</summary>
  
  
  ### User Profiles
  - **Registration and Authentication**: Users can sign up and authenticate using JWT.
  - **Profile Information**: Each user has a profile with personal information (name, email, country, etc.).
  - **Download History**: Users can view a history of the books they have downloaded.

  <p style="text-align:center;">
    <img alt="" src="./public/home-screenshot.png"  style="height:400px">
  </p>

### Home Page

- **Recommended feed**: 50 books recommended by the backend algorithm.
- **Searcher**: Users can search for books using filters like author, title, publication date, and categories.
  <div style="text-align:center;">
  <video src="feedAndSearch.mp4" autoplay>
  </video>  
  </div>

### Book Uploads

- **Add New Books**: Users can upload books to the library.
- **Upload Form**: Includes fields such as title, author, description, cover, and category also Drag and Drop custom inputs for book files and path cover files

### In the Page of each book

- **Download**: Users can download a book in the available formats
- **Add book to a list**: Users can add a book to a list.
- **Recommendations**: Based on users' book lists and download history, the application suggests books that might interest them.
- **Comments**: Users can comment on books to share their opinions.
- **Book Ratings**: Users can rate the books they have read.
- **Share**: Users can share a book page in the main social networks
- **Report a book**: Users can report a book to the atlasBooks' staff if there is inappropriate content.

<p style="text-align:center;">
  <img alt="" src="./public/home-screenshot.png"  style="height:400px">
</p>

### Book List Management

- **Create Lists**: Users can create personalized book lists.
- **View Lists**: Users can view their lists and the books they've added.
- **Public Lists**: Lists can be made visible to all users on the platform, users can search them by a Searcher.

### Admin options

- **Manage Users**: Admins have additional sections in its profile page that allow them to search for users and ban/un-ban also to look reports made by users
</details>

## 3. Technologies Used (Tech Stack)

<details>
  <summary>Click to expand!</summary>
  
  - **Frontend**: Developed with React.js using Vite, along with CSS (Responsive design), HTML, and JavaScript.
  - **Backend**: Built using Node.js and Express.
  - **Database**: PostgreSQL for efficient data storage and retrieval.
  
  ### Other Tools
  - **Jira**: Used for managing user stories and tasks.
  - **Figma**: Utilized for UI/UX design.
</details>

## 4. Methodology

<details>
  <summary>Click to expand!</summary>
  
  We used agile methodologies, specifically Scrum, to manage our project and Jira as the management tool for the project
</details>

## 5. Future Improvements (TODO)

<details>
    <summary>Click to expand!</summary>
  
  - Proper deployment: Mainly due to backend issues with dynamic storage for books.
  - Replace cookies with local storage due to chrome third-party cookies policy.
  - Discover list page pending (backend + frontend implementation).
</details>

## 6. Installation and Contributing Guide

<details>
    <summary>Click to expand!</summary>
  
  We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) before you start.
</details>

## 7. Team Members

<details>
    <summary>Click to expand!</summary>
  
  If you have any questions, feel free to reach out to us at:
  
  - [Juan Felipe Monsalve Vargas](https://github.com/jfmonsa) - [Email](mailto:juan.felipe.monsalve@correounivalle.edu.co)
  - [Jose Luis Ramos Arango](https://github.com/RamSterB) - [Email](mailto:jose.luis.ramos@correounivalle.edu.co)
  - [Juan Sebastian Marin Serna](https://github.com/JSebastianMarin) - [Email](mailto:juan.marin.serna@correounivalle.edu.co)
  - [Juan Pablo Idarraga](https://github.com/JuanPidarraga) - [Email](mailto:idarraga.juan@correounivalle.edu.co)
  - [Leider Santiago Cortez](https://github.com/LeiderCortes) - [Email](mailto:cortes.leider@correounivalle.edu.co)
</details>
