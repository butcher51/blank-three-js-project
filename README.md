# Three.js Rotating Cube Project

A simple Three.js project that renders a colorful rotating cube using pure JavaScript without any build tools.

## Features

- Rotating cube with different colored faces
- Responsive design that adapts to window resizing
- Pure JavaScript implementation with ES6 modules
- Simple Node.js development server

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `index.html` - Main HTML file with Three.js import map
- `main.js` - Three.js scene setup and animation loop
- `server.js` - Simple Node.js development server
- `package.json` - Project dependencies and scripts

## Technologies Used

- Three.js - 3D graphics library
- ES6 Modules - For clean JavaScript imports
- Node.js - Development server

## How it Works

The project uses ES6 import maps to load Three.js directly from the `node_modules` directory without any build step. The cube rotates continuously around both X and Y axes, and each face has a different color for easy visualization. 