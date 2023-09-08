<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>moca-portfolio
</h1>
<h3>◦ Unleash your creativity with moca-portfolio!</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style&logo=Autoprefixer&logoColor=white" alt="Autoprefixer" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />

<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
</p>
<img src="https://img.shields.io/github/languages/top/Eragon67360/moca-portfolio.git?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/Eragon67360/moca-portfolio.git?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/Eragon67360/moca-portfolio.git?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/Eragon67360/moca-portfolio.git?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The project is a portfolio website that showcases the developer's work and provides contact information. It uses React, Next.js, and Three.js to create an interactive and visually appealing experience. The core functionalities include displaying a 3D model, navigating through different pages, and providing a responsive layout. The purpose is to showcase the developer's skills and projects to potential clients or employers. The project adds value by combining modern web technologies with creative design to create an engaging and memorable portfolio.

---

## ⚙️ Features

| Feature                | Description                           |
| ---------------------- | ------------------------------------- |
| **⚙️ Architecture**     | The codebase follows a modular architecture, with components organized into specific directories. It uses popular frameworks like Next.js and React to build a scalable and maintainable website.    |
| **📖 Documentation**   | The codebase seems to lack detailed documentation. While the file names provide some high-level explanations, more documentation would be beneficial for understanding the project.    |
| **🔗 Dependencies**    | The codebase relies on external libraries like React, Next.js, Three.js, Framer Motion, and Tailwind CSS. These libraries enhance the functionality and styling of the project.    |
| **🧩 Modularity**      | The codebase is organized into multiple components, following a component-based architecture. Each component serves a specific purpose and can be reused throughout the project.    |
| **✔️ Testing**          | There is no specific mention of testing strategies or tools in the codebase or description. Further evaluation and implementation of testing would improve the overall quality and stability of the code.    |
| **⚡️ Performance**      | The codebase shows efforts towards performance optimization, such as preloading 3D models for optimized performance and using Next.js for server rendering. However, further analysis is required to evaluate the system's overall performance.    |
| **🔐 Security**        | The codebase description does not provide explicit information about security measures. It would be crucial to ensure proper security practices, such as input validation and protection against common vulnerabilities.    |
| **🔀 Version Control** | The codebase utilizes Git for version control, which allows for efficient collaboration, code management, and versioning. Regular commits help maintain a history of changes and facilitate teamwork.    |
| **🔌 Integrations**    | Based on the codebase and description, the system interacts with external libraries and frameworks like React, Next.js, Tailwind CSS, and Three.js to enhance functionality and improve user experience. No specific mention of additional integrations is provided.    |
| **📶 Scalability**     | The modularity of the codebase and the use of popular frameworks allow for scalability. However, the provided information doesn't explicitly highlight any strategies or decisions regarding scalability.    |

---


## 📂 Project Structure




---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                      |
| [Laptop.jsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/Laptop.jsx)                                     | This code imports a 3D model of a laptop and its associated animations. It renders the model using React and Three.js, providing a reusable "Model" component. The code uses useRef and useLayoutEffect hooks to play animations and set up the position, rotation, and scale of the model's mesh components. It also preloads the model for optimized performance.                      |
| [next.config.js](https://github.com/Eragon67360/moca-portfolio.git/blob/main/next.config.js)                             | The code exports the configuration object for a Next.js application. It is used to customize various aspects of the application's behavior and settings.                                                                                                                                                                                                                                 |
| [postcss.config.js](https://github.com/Eragon67360/moca-portfolio.git/blob/main/postcss.config.js)                       | This code exports a configuration object with two plugins: Tailwind CSS for styling and Autoprefixer for vendor prefixing. These plugins enhance the functionality of a project by providing CSS utilities and ensuring cross-browser compatibility.                                                                                                                                     |
| [tailwind.config.ts](https://github.com/Eragon67360/moca-portfolio.git/blob/main/tailwind.config.ts)                     | This code file exports a configuration object that defines the core functionalities of the Tailwind CSS library. It sets up the content sources and extends the theme with new background images, colors, and fonts. The plugins array is empty in this code.                                                                                                                            |
| [globals.css](https://github.com/Eragon67360/moca-portfolio.git/blob/main/app\globals.css)                               | This code sets up the basic styling for a web page using the Tailwind CSS framework. It includes a custom font from Google Fonts and supports both light and dark color schemes. The body background is a linear gradient from one color to another, and there's also a utility class for a radial background. Overall, it provides a flexible and visually appealing design foundation. |
| [layout.tsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/app\layout.tsx)                                 | This code defines the layout for a portfolio website. It includes a global CSS file, imports fonts, and sets metadata for SEO. It renders a progress bar, navigation bar, and the main content area. It aims to provide a responsive and visually appealing layout.                                                                                                                      |
| [page.tsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/app\page.tsx)                                     | This code is for a home page component that displays a text title and a 3D model. It uses the Next.js framework with React, Framer Motion, and React Three Fiber libraries. The title has a fade-in animation and the 3D model is rendered using Canvas and OrbitControls.                                                                                                               |
| [page.tsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/app\contact\page.tsx)                             | This code exports a React functional component called "Contact", which renders a simple div with the text "Contact".                                                                                                                                                                                                                                                                     |
| [page.tsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/app\work\page.tsx)                                | The code is a React component that renders a simple "Work" div to display a section of a website or application.                                                                                                                                                                                                                                                                         |
| [ProgressBar.tsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/components\ProgressBar.tsx)                | The code adds a progress bar to a React application. It configures NProgress, a progress bar library, to start and finish when the page changes or the user clicks on a link. It also observes the DOM for new anchor elements and attaches a click event listener to handle link clicks.                                                                                                |
| [Menu.tsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/components\[locale]\Menu.tsx)                     | This code defines a menu component for a web application. It uses React with Next.js and framer-motion for animations. The menu can be opened and closed with a slide animation. It includes links for navigation and a button to toggle between light and dark themes.                                                                                                                  |
| [Data.tsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/components\[locale]\footer\Data.tsx)              | The code is a React component displaying contact information. It includes the ability to send emails, make phone calls, and view a location on Google Maps. It also includes a link to a disclaimer page.                                                                                                                                                                                |
| [index.tsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/components\[locale]\footer\index.tsx)            | This code defines the Footer component in a React application. It renders a container div with a fixed height and background color, containing a Title and Data component in a flex column. It also renders a Logo component beside the flex column. This code represents the footer section of a webpage.                                                                               |
| [Logo.tsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/components\[locale]\footer\Logo.tsx)              | The code imports the necessary files and components from the react and next/image libraries. It defines a functional component called Logo that renders an image using the curefab_logo file as the source, with a specified width and height.                                                                                                                                           |
| [Title.tsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/components\[locale]\footer\Title.tsx)            | This code is a React component that renders a title section with two paragraphs. It applies specific styling classes to achieve a certain design. The title conveys a message and encourages users to contact for custom solutions.                                                                                                                                                      |
| [index.tsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/components\[locale]\navigation\index.tsx)        | The code functions as a cohesive system that performs a range of key operations. It collects user input, processes and validates the data, executes complex calculations, generates meaningful outputs, and incorporates error handling mechanisms. Furthermore, it includes efficient algorithms and utilizes modular design principles for scalability and maintainability.            |
| [index.tsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/components\[locale]\navigation\navbar\index.tsx) | This code is a React component that renders a responsive navbar with a logo, home, work, and contact links, and a menu toggle button. It also manages state for the theme and handles theme toggling. The menu component is passed the menu open state and theme state, and also receives a close function and toggle theme function as props.                                           |
| [Logo.tsx](https://github.com/Eragon67360/moca-portfolio.git/blob/main/components\[locale]\navigation\navbar\Logo.tsx)   | The code defines a functional component called Logo. It renders a styled link with the text "UX MOCA" as the logo. When the logo is clicked, it navigates the user to the homepage. The styling includes a hover effect that changes the text color.                                                                                                                                     |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ Requirement 1`
> - `ℹ️ Requirement 2`
> - `ℹ️ ...`

### 📦 Installation

1. Clone the moca-portfolio repository:
```sh
git clone https://github.com/Eragon67360/moca-portfolio.git
```

2. Change to the project directory:
```sh
cd moca-portfolio
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using moca-portfolio

```sh
npm run build && node dist/main.js
```

### 🧪 Running Tests
```sh
npm test
```

---


## 🗺 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Refactor Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  INSERT-LICENSE-TYPE` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - `ℹ️  List any resources, contributors, inspiration, etc.`

---
