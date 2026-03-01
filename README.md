# Web Chat
## A web based chat app using MERN Stack and socket.io

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, Tailwind CSS v4, Vite
- **Backend**: Express.js (Node.js), MongoDB, Socket.io (coming soon)

## Project Structure
```
chat_app_web/
├── Frontend/
│   ├── index.html              # SPA entry point
│   ├── package.json
│   ├── src/
│   │   ├── input.css           # Tailwind theme config
│   │   ├── output.css          # Generated (gitignored)
│   │   ├── styles/
│   │   │   ├── style.css       # Base styles & design tokens
│   │   │   └── components.css  # Component-level styles
│   │   ├── scripts/
│   │   │   ├── main.js         # App entry & route definitions
│   │   │   ├── router.js       # Hash-based SPA router
│   │   │   ├── login.js        # Login page & validation
│   │   │   └── signup.js       # Signup page & validation
│   │   ├── components/
│   │   │   ├── navbar.js       # Shared navbar (Abdul Rasheed)
│   │   │   ├── footer.js       # Shared footer (Abdul Rasheed)
│   │   │   ├── chatWindow.js   # Chat window (Ali Raza)
│   │   │   ├── sidebar.js      # Sidebar (Ali Raza)
│   │   │   └── inputMessage.js # Message input (Ali Raza)
│   │   ├── pages/
│   │   │   ├── home.js         # Landing page (Abdul Rasheed)
│   │   │   └── chat.html       # Chat page ref (Ali Raza)
│   │   └── assets/
│   │       ├── favicon/
│   │       ├── images/
│   │       └── svg/
│   └── .gitignore
├── Backend/
│   └── README.md
└── README.md
```

## Getting Started

### Frontend
```bash
cd Frontend
npm install
```

**Run Tailwind CSS watcher** (generates `output.css`):
```bash
npm run tailwind
```

**Run dev server** (in a separate terminal):
```bash
npm run dev
```

## Tasks

### Abdul Rasheed ✅
Frontend → Landing page (Home), Login page, Signup page, SPA Router, Navbar, Footer

### Ali Raza
Frontend → Chat page interface (sidebar, chat window, message input)

## How the SPA Router Works
All pages load inside `index.html` via JavaScript. The URL hash (`#/`, `#/login`, `#/signup`) determines which page to show. No full-page reloads — just like React Router.

**Ali Raza**: To add your chat page, create a `renderChatPage()` and `initChatPage()` function, then uncomment the chat route in `main.js`.