# Project Planner

A project & task manager built while learning React — create projects, track their tasks, and manage due dates through a clean, dark-sidebar UI.

# link :
https://app.netlify.com/projects/react-porject-management/domain-management

## Status

This is a learning project, currently being migrated from JavaScript to TypeScript. Expect a mix of `.jsx` and `.tsx` files during the transition, and expect the feature set to keep growing as new concepts get covered.

## Features

- Create projects with a title, description, and due date
- Select a project from the sidebar to view its details and tasks
- Delete a project (its tasks are cleaned up too — no orphaned data left behind)
- Add tasks to whichever project is currently selected
- Delete individual tasks
- Input validation on the task field — submitting a blank task opens a native `<dialog>` modal instead of failing silently
- Responsive sidebar: full width on small screens, fixed width on `md` and up

## Tech Stack

- **React 19** — using the ref-as-prop pattern (no `forwardRef` needed)
- **Tailwind CSS** for styling
- **TypeScript** — migration in progress
- Native `<dialog>` element + `createPortal` for modals

## Project Structure

```
src/
├── App.jsx / App.tsx
├── types.ts
└── Components/
    ├── ProjectsSideBar
    ├── SelectedProject
    ├── NewProject
    ├── NoProjectsSelected
    ├── NewTask
    ├── Tasks
    ├── Modal
    └── Button
```

## Getting Started

```bash
npm install
npm run dev
```

## Learning Notes

Things worth remembering from building this:

- Arrow function block bodies (`{ ... }`) need an explicit `return` — leaving it out produces silent `undefined` bugs that are easy to miss.
- Automatic Semicolon Insertion can silently kill a `return` statement if JSX starts on the next line — always wrap multi-line JSX returns in parentheses.
- `useImperativeHandle` paired with a native `<dialog>` is a clean way to trigger a modal imperatively via `ref`, without extra boolean state to manage.

## Roadmap

- [ ] Finish the TypeScript migration
- [ ] Add task completion / checkbox state
- [ ] Persist projects and tasks (localStorage or a backend)
- [ ] Support editing existing projects

---

This is a practice project built as part of a self-directed full-stack learning path — feedback is welcome.
