# ⚛️ React Essentials — Deep Dive (Part 2)

Continuation of the React Essentials deep dive from **"React - The Complete Guide (incl. Next.js, Redux)"** by Maximilian Schwarzmüller (Udemy). This section builds directly on Part 1, going deeper into component structure, props, and — most importantly — **React state**, culminating in a full **Tic-Tac-Toe game** built from scratch.

`react` `javascript` `jsx` `state-management` `component-design` `immutability`

---

## 🎯 What This Section Covers

### JSX & Component Structure
- Alternatives to JSX (`React.createElement`)
- Working with **Fragments** to avoid unnecessary wrapper elements
- Deciding **when to split components**, and splitting by feature vs. by state
- Fixing the "props aren't forwarded to inner elements" problem
- **Forwarding props** to wrapped/inner elements properly

### Flexible, Reusable Components
- Working with **multiple JSX slots** (more than one `children`-like prop)
- **Setting component types dynamically** (passing a component as a prop)
- Setting **default prop values**
- Recognizing that **not all content must live inside components**
- `public/` vs `assets/` — the right way to store and reference images

### 🕹️ Project: Tic-Tac-Toe
A new project built to reinforce and repeat core concepts in a real app:
- First steps & project setup
- Reapplying component splitting and reusable component patterns
- Reapplying state fundamentals in a fresh context
- Understanding that **component instances work in isolation**

### State Management — Core Concepts
- Handling **conditional content** and spotting a suboptimal way of updating state
- ✅ **Best practice:** updating state based on *previous* state correctly
- **Two-way binding** with user input
- Rendering **multi-dimensional lists** (e.g. a game board / grid)
- ✅ **Best practice:** updating **object state immutably**
- **Lifting state up** *(core concept)*
- Avoiding **intersecting states** (conflicting pieces of state that get out of sync)

### Computed Values vs. State
- Preferring **computed values** over unnecessary extra state
- **Deriving state from props**
- **Sharing state** across components
- Reducing state management & identifying state that shouldn't exist
- Conditionally disabling buttons based on computed values
- Outsourcing static data into a separate file
- **Lifting computed values up**
- Deriving computed values from *other* computed values

### Finishing the Game
- Building the **"Game Over" screen** and checking for a draw
- Why **immutability matters** — always
- **When NOT to lift state up**
- An alternative approach to lifting state up
- Final polishing & improving component structure

---

## 🗂️ Folder Structure

```
02-react-essentials-deep-dive-part2/
└── (Tic-Tac-Toe project source, components, and assets)
```

---

## 🧠 Key Takeaways

| Concept | Why It Matters |
|---|---|
| Lifting state up | Keeps a single source of truth shared between sibling components |
| Immutable state updates | Prevents React from missing re-renders due to unchanged object references |
| Computed values | Avoids redundant state that can fall out of sync with the data it's derived from |
| Component isolation | Each component instance manages its own state independently |
| Prop forwarding | Ensures props (like `className` or event handlers) reach the actual DOM element |

---

Course: [React - The Complete Guide (incl. Next.js, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) by Maximilian Schwarzmüller
