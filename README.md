# Trekbag

A trip packing checklist built with React. Add items, mark them packed, sort the list, and keep everything in sync via browser storage.



- Add, toggle, and delete packing items
- Bulk actions: mark all complete / incomplete, reset to defaults, remove all
- Sort by default, packed, or unpacked (`react-select`)
- Empty-state UI when the list is cleared
- Live packed / total counter in the header
- Persistent state with Zustand `persist` → `localStorage`

## Tech stack

| Tool | Role |
| --- | --- |
| React 19 | UI |
| Vite | Dev server & build |
| Zustand | Global state |
| react-select | Sorting dropdown |
| CSS | Layout & styling |

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Other scripts

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # ESLint
```

## Project structure

```
src/
├── components/       # UI pieces (form, list, sidebar, header, …)
├── stores/
│   └── itemsStore.js # Zustand store + localStorage persistence
├── constants.js      # Initial packing items
├── index.css         # Global styles
└── main.jsx          # App entry
```

## State management

All item logic lives in `src/stores/itemsStore.js`:

| Action | Description |
| --- | --- |
| `addItem` | Append a new unpacked item |
| `toggleItem` | Flip packed status |
| `deleteItem` | Remove one item |
| `markAllAsComplete` / `markAllAsIncomplete` | Bulk packed status |
| `resetToInitial` | Restore default starter items |
| `removeAllItems` | Clear the list |

Components subscribe with selectors, e.g. `useItemsStore((s) => s.items)`, so only relevant UI re-renders.

Persisted key in `localStorage`: `items`.

## What I practiced

- Lifting shared UI concerns into a global store instead of prop drilling
- Derived UI (packed count) from store data
- Conditional rendering (empty state, sort controls)
- Client-side persistence without a backend

## License

Personal / educational use.
