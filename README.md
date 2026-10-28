# Trekbag

Trekbag is a lightweight travel packing checklist app built with React. It helps you plan what to pack before a trip, track what is already packed, and keep the list saved in the browser so you can come back later without losing progress.

Whether you are preparing for a weekend getaway or a longer trip, Trekbag keeps your packing list organized and easy to manage.

## Live demo

- Production: https://track-ten-indol.vercel.app
- Hosted on Vercel as project `moirai2/track`

## Features

- Add new packing items to your trip list
- Mark items as packed or unpacked
- Remove individual items
- Bulk actions for all items
- Reset to the default starter list
- Sort items by default, packed, or unpacked
- Empty state when the list is cleared
- Persistent storage using Zustand + `localStorage`
- Simple, responsive interface built for quick trip planning

## Tech stack

- React 19
- Vite
- Zustand
- react-select
- CSS
- Vercel

## Project purpose

This project was built to practice:

- state management with Zustand
- client-side persistence
- UI state derived from application data
- list interactions and filtering
- building a clean single-page app for real-world utility

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (typically `http://localhost:5173`).

## Available scripts

```bash
npm run dev     # start the Vite dev server
npm run build   # create a production build in dist/
npm run preview # preview the production build
npm run lint    # run ESLint checks
```

## Deployment

```bash
vercel
vercel --prod
```

## Project structure

```text
src/
├── components/
│   ├── Additemform.jsx
│   ├── App.jsx
│   ├── Backgroundheading.jsx
│   ├── Button.jsx
│   ├── Buttongroup.jsx
│   ├── Counter.jsx
│   ├── EmptyView.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Itemlist.jsx
│   ├── Logo.jsx
│   └── Sidebar.jsx
├── stores/
│   └── itemsStore.js
├── constants.js
├── index.css
├── main.jsx
└── font.txt
```

## State management

The app uses a Zustand store to manage the packing list:

- `addItem` adds a new item
- `toggleItem` changes packed state
- `deleteItem` removes a single item
- `removeAllItems` clears the list
- `resetToInitial` restores the default set of starter items
- `markAllAsComplete` and `markAllAsIncomplete` bulk-update the list

The `items` state is persisted in `localStorage` using Zustand middleware.

## License

For personal and educational use.
