# Express Boilerplate (TypeScript + pnpm)

A modern and customizable Express.js boilerplate built with **TypeScript** and managed using **pnpm** for efficient dependency management. Pre-configured with **ESLint**, **Prettier**, and **Husky** to ensure code quality and consistency.

## Features

- **TypeScript**: Strongly typed server-side development.
- **Efficient Package Management**: Uses pnpm for faster and disk-efficient dependency handling.
- **Code Quality Tools**: ESLint and Prettier for linting and formatting.
- **Pre-commit Hooks**: Husky ensures code checks before every commit.
- **Nodemon**: Automatically restarts the server during development.
- **Customizable Folder Structure**: Organized to keep your project modular and maintainable.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org) (v16+ recommended)
- [pnpm](https://pnpm.io) (v8+)

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/express-boilerplate.git
   cd express-boilerplate
   ```

2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

---

### Usage

#### Start the server
```bash
pnpm start
```

#### Start the server in development mode
```bash
pnpm dev
```

---

## Scripts

- **`pnpm start`**: Runs the server in production mode.
- **`pnpm dev`**: Runs the server in development mode with hot-reloading using Nodemon.
- **`pnpm lint`**: Lints the entire codebase using ESLint.
- **`pnpm prettier`**: Formats the codebase using Prettier.
- **`pnpm build`**: Builds the project for production.

---
## Folder Structure

```
express-boilerplate/
├── src/
│   ├── routes/          # Define application routes here
│   ├── controllers/     # Add route logic and business logic here
│   ├── middlewares/     # Custom middleware files
│   ├── utils/           # Utility functions/helpers
│   ├── app.ts           # Main application configuration
│   └── server.ts        # Entry point of the application
├── dist/                # Compiled JavaScript code (output folder)
├── tsconfig.json        # TypeScript configuration
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
├── package.json         # Project metadata and scripts
├── pnpm-lock.yaml       # Dependency lock file for pnpm
├── README.md            # Project documentation
└── .husky/              # Git hooks
```

---

## Code Quality

### TypeScript
- Provides type safety and better developer experience.
- Configuration can be found in `tsconfig.json`.

### ESLint
- Lints the codebase to enforce consistent code style and catch errors.
- Configuration is in `.eslintrc.json`.

### Prettier
- Formats the codebase for consistent styling.
- Configuration is in `.prettierrc`.

### Husky
- Runs linting and formatting checks before every commit to maintain code quality.
- Pre-commit hook configuration is set in the `package.json` under the `husky` section.

---

## Build and Deployment

#### Build for production
```bash
pnpm build
```
---

## Contributing

Contributions are welcome! If you’d like to add features or fix bugs, feel free to fork the repository, make your changes, and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**Ravindra Yadav**  
[MERN Stack Developer](https://ravindrayadav.vercel.app)
### Key Updates for pnpm and TypeScript:
1. **pnpm Integration**:
   - Updated commands to use `pnpm`.
   - Added `pnpm-lock.yaml` to the folder structure.

2. **TypeScript**:
   - Replaced JavaScript file references with TypeScript (`.ts`).
   - Mentioned `tsconfig.json` in the structure.

3. **Build Scripts**:
   - Added `build` and `clean` scripts for production-ready code.

4. **Folder Structure**:
   - Included `dist/` for compiled files and emphasized TypeScript-specific files.

Let me know if you'd like me to assist with the `tsconfig.json` or other configurations!