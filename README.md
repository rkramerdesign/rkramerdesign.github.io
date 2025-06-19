# Carbon Storybook App

This project is a Storybook setup using IBM's Carbon Design System. It provides a structured way to develop and showcase UI components in isolation.

## Project Structure

```
carbon-storybook-app
├── src
│   ├── components
│   │   └── ExampleComponent.jsx
│   └── stories
│       └── ExampleComponent.stories.jsx
├── .storybook
│   ├── main.js
│   ├── preview.js
│   └── manager.js
├── package.json
├── README.md
└── .gitignore
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd carbon-storybook-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run Storybook:**
   ```bash
   npm run storybook
   ```

   This will start the Storybook server, and you can view your components in the browser at `http://localhost:6006`.

## Adding Components

To add a new component:

1. Create a new file in the `src/components` directory.
2. Define your component and export it as a default export.
3. Create a corresponding story file in the `src/stories` directory to showcase your component.

## Customizing Storybook

You can customize Storybook's configuration by modifying the files in the `.storybook` directory:

- **main.js**: Configure addons and specify where to find your stories.
- **preview.js**: Set global decorators and parameters for your stories.
- **manager.js**: Customize the Storybook UI, including themes and layout.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.