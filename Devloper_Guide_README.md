# 🧰 Developer Guide — react-vite-ts-boilerplate

This guide explains how to contribute new features, hooks, constants, components, and more in a consistent and scalable way.

---

## 📦 Project Structure Overview

<pre>
react-vite-ts-boilerplate/
│
├── src/
│   ├── api/             # Shared API hooks
│   ├── constants/       # Global constants
│   ├── features/        # Domain-specific features
│   ├── libs/
│   │   ├── design/      # Reusable UI components
│   │   ├── hooks/       # Global shared hooks
│   │   ├── icons/       # App-wide icons
│   │   └── provider/    # Context providers
│   ├── App.tsx          # Root app component
│   └── main.tsx         # Entry point
│
├── public/              # Static assets
├── eslint.config.js     # ESLint config
├── vite.config.ts       # Vite config with path aliases
└── README.md            # How to get started
</pre>

---

## 🔌 `api/` — Shared API Hooks

> Central place for API hooks that are used across multiple features.

### To create a new API hook:

- Create a folder with the name in **kebab-case**
- Inside the folder:
  - Create the hook file in **useCamelCase.ts**
  - Create an `index.ts` that exports the hook and related types
- General/shared types should go in a `types.ts`

📁 Example:

```
api/
└── examples/
    ├── useGetExamples.ts
    ├── types.ts
    └── index.ts
```

---

## 📌 `constants/` — Shared Constants

### To add new constants:

- Create a file in **camelCase.ts**
- Add an `export` statement in `index.ts` for each file

📁 Example:

```
constants/
├── appConfig.ts
├── routes.ts
└── index.ts
```

---

## 🧩 `features/` — Feature Modules

> Each feature gets its own isolated folder.

### To create a new feature:

- Create a folder with the feature name in **kebab-case**
- Inside the folder:
  - Create the feature component in **PascalCase.tsx**
  - Create an `index.ts` file that exports the component and types
- Export the feature from the global `features/index.ts`
- APIs used only within this feature should go in a local `api/` subfolder

📁 Example:

```
features/
└── exmaples/
    ├── ExamplesOverview.tsx
    ├── api/
    │   └── useGetExamples.ts
    │   └── types.ts
    │   └── index.ts
    └── index.ts
```

---

## 🧱 `libs/` — Shared Libraries

### 📦 `libs/design/` — UI Components

> All design system components (buttons, cards, etc.)

- Create a folder with the component name in **kebab-case**
- Inside the folder:
  - Component file in **PascalCase.tsx**
  - Export it via `index.ts`
- Shared types go in `types.ts`

📁 Example:

```
libs/design/
└── button/
    ├── Button.tsx
    ├── types.ts # if needed
    └── index.ts
```

---

### 🪝 `libs/hooks/` — Shared Hooks

- Folder name in **use-kebab-case**
- Hook file name in **useCamelCase.ts**
- Export from `index.ts`
- Shared types go in `types.ts`

📁 Example:

```
libs/hooks/
└── use-disclosure/
    ├── useDisclosure.ts
    ├── types.ts # if needed
    └── index.ts
```

---

### 🎨 `libs/icons/` — Application Icons

- Create icon files using **PascalCase.tsx**
- Export all icons from `index.ts`

📁 Example:

```
libs/icons/
├── SearchIcon.tsx
└── index.ts
```

---

### 🧪 `libs/provider/` — React Context Providers

- Folder name in **kebab-case**
- Provider component in **PascalCase.tsx**
- Export via `index.ts`
- Shared types go in `types.ts`

📁 Example:

```
libs/provider/
└── theme-provider/
    ├── ThemeProvider.tsx
    ├── types.ts
    └── index.ts
```

---

### 🧪 Component Testing

> All components should include unit tests in a co-located `__test__` folder.

#### Structure:

- Place tests inside a `__test__` folder within the component's directory.
- Use the component name followed by `.test.tsx` for the test file.
- Prefer **React Testing Library** and **Vitest** for component/unit testing.

📁 Example:

```
libs/design/
└── button/
    ├── Button.tsx
    ├── index.ts
    └── __test__/
        └── Button.test.tsx
```

---

## 🧼 Naming & Formatting Conventions

| Type             | Convention     | Example                 |
| ---------------- | -------------- | ----------------------- |
| Folder Name      | kebab-case     | `product-list`          |
| Hook Name        | useCamelCase   | `useProductList`        |
| File Name        | PascalCase.tsx | `ProductList.tsx`       |
| Type File        | types.ts       |                         |
| Constant File    | camelCase.ts   | `appConfig.ts`          |
| Component Export | `index.ts`     | `export * from './XYZ'` |

---

## ✅ Best Practices

- Keep all feature-specific logic inside the feature folder
- Keep shared logic and UI in `libs/`
- Keep code strongly typed
- Keep file structure flat and scalable
- Keep import paths clean using aliases (`@features`, `@libs`, etc.)

---

Happy hacking! 🚀
