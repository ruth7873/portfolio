# Portfolio Website
Check out the live demo of the project here: [Portfolio-Site](https://ruth7873.github.io/portfolio/)

This project is a personal portfolio website designed to showcase projects and skills. It is built using modern web development tools and practices, including React, TypeScript, and Vite. The site fetches live data from GitHub to display repositories and provides an interactive user experience.



## Features

- **Dynamic Project Showcase**: Automatically fetches repositories from your GitHub profile and displays them in an organized and visually appealing way.
- **Search Functionality**: Allows users to filter projects by name.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Professional Styling**: Clean and modern user interface with customizable themes.
- **GitHub Links**: Each project card includes a direct link to the respective GitHub repository.

## Tech Stack

- **React**: Front-end library for building the user interface.
- **TypeScript**: For type-safe and maintainable code.
- **Vite**: Fast and modern build tool.
- **GitHub Pages**: Hosting the portfolio website.
- **CSS Modules**: For scoped and maintainable styling.

## Setup Instructions

### Prerequisites

- Node.js (version 16 or above)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ruth7873/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio-site
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start a local development server:
```bash
npm run dev
```
The website will be available at `http://localhost:5173`.

### Build

To build the project for production:
```bash
npm run build
```
The built files will be located in the `dist` directory.

### Deployment

This project is configured for deployment on GitHub Pages. To deploy:

1. Update the `homepage` field in `package.json` to:
   ```json
   "homepage": "https://<your-username>.github.io/portfolio"
   ```

2. Run the deploy script:
   ```bash
   npm run deploy
   ```

The website will be deployed to `https://<your-username>.github.io/portfolio`.

## Customization

- Update the `fetchRepositoriesbyUser` function in `src/services/githubService.ts` to use your GitHub username.
- Customize the design by modifying the CSS modules located in `src/styles/`.

## Folder Structure

```
portfolio-site/
├── src/
│   ├── components/        # Reusable React components
│   ├── services/          # API service for fetching GitHub data
│   ├── styles/            # CSS modules
│   ├── types/             # TypeScript type definitions
│   └── App.tsx            # Main application entry point
├── public/                # Static assets
├── dist/                  # Production build files
├── package.json           # Project configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## License

This project is open-source and available under the [MIT License](LICENSE).

---

### Author

[Ruth7873](https://github.com/ruth7873)

Feel free to reach out via [ruth0533137873@gmail.com](mailto:ruth0533137873@gmail.com) for any inquiries or collaborations!
