# Project Grid with Custom Pagination and Image Slider

## Description

This project is a responsive grid for displaying project cards with custom pagination and an image slider. It is built using React, React Hooks, TypeScript, and Styled-components.

## Features

- **Adaptive Grid Layout:** Dynamically adjusts to different screen sizes for a seamless user experience.
- **Custom Pagination:** Allows users to navigate through project pages.
- **Image Slider:** Each project card includes an interactive image slider for better visualization.
- **Error Handling & Loading State:** Displays appropriate messages for loading states and errors.

## Technologies Used

- **React** – Component-based UI development
- **React Hooks** – State management and lifecycle methods
- **TypeScript** – Strongly-typed JavaScript for improved maintainability
- **Styled-components** – Component-scoped styling with CSS-in-JS
- **ESLint & Prettier** – For code formatting and linting
- **Module Aliases** – For better import management

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/RaznoOleg/project-showcase-grid.git
   ```
2. Navigate to the project folder:
   ```sh
   cd project-showcase-grid
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   REACT_APP_API_URL=your_api_url
   REACT_APP_ACCESS_KEY=your_access_key
   REACT_APP_SECRET_KEY=your_secret_key
   ```
5. Start the development server:
   ```sh
   npm start
   ```

## Usage

- Navigate through project pages using the **Prev** and **Next** buttons.
- Hover over a project card to interact with the image slider.
- View project details including name, price, location, and size.

## Project Structure

```
📂 src/
├── 📂 components/
│   ├── 📂 ImageSlider/     # Component for browsing project images
│   ├── 📂 ProjectCard/     # Card displaying project details
│   ├── 📂 ProjectGrid/     # Container for arranging project cards in a grid
│   ├── 📂 StatusMessage/   # Displays status messages (loading, error, etc.)
├── 📂 constants/
│   ├── color.ts             # Color constants for styling
│   ├── fontSizes.ts         # Font size definitions
├── 📂 hooks/
│   ├── useProjects.ts       # Custom hook for fetching and managing projects
├── 📂 types/
│   ├── project.type.ts      # Type definitions for project objects
│   ├── apiResponse.type.ts  # API response structures
├── App.tsx                  # Main application component
└── index.tsx                # Application entry point
```

## Deployment

The project is deployed on **Vercel** for fast and seamless hosting.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, reach out to razno.oleg@gmail.com.
