<div align="center">
  <img src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" width="100"/>
  <h1>💻 Juicebox OS</h1>
  <h3>🧃 A full fake Operating System — running entirely in your browser</h3>
  <p>Built with ❤️ by a team of engineering students from Middlesex University Dubai.</p>
  
  <a href="https://github.com/Anushdcosta/juicebox-os/stargazers">
    <img src="https://img.shields.io/github/stars/Anushdcosta/juicebox-os?style=for-the-badge&color=yellow" alt="Stars"/>
  </a>
  <a href="https://github.com/Anushdcosta/juicebox-os/forks">
    <img src="https://img.shields.io/github/forks/Anushdcosta/juicebox-os?style=for-the-badge&color=orange" alt="Forks"/>
  </a>
  <a href="https://github.com/Anushdcosta/juicebox-os/issues">
    <img src="https://img.shields.io/github/issues/Anushdcosta/juicebox-os?style=for-the-badge&color=red" alt="Issues"/>
  </a>
  <img src="https://img.shields.io/badge/Build-WASM%20+%20Vite-blueviolet?style=for-the-badge"/>
</div>

---

## 🧠 What is Juicebox OS?

> **Juicebox OS** is a full-blown *browser-based* operating system simulator — with real compiled programs, a virtual file system, and a retro interface inspired by the early days of computing.

💡 It's not just a fake UI — it actually compiles and runs C++ programs (like a text editor, shell, and more) **in your browser tab** via **WebAssembly**.  
You’ll find Clippy, a BSOD generator, and even the ability to fake viruses for fun. It’s Windows 98... in JavaScript.

---

## 🚀 Live Demo (Coming Soon)

Want to test it? A live deployment will be hosted here:
🔗 **https://juicebox-os.vercel.app**

---

## ⚙️ Tech Stack

| Layer | Tech |
|-------|------|
| 🧠 Core Logic | `C++` → `WebAssembly (WASM)` |
| 💾 File System | `SQLite` (browser-based) |
| 🖥️ Shell / UI | `JavaScript`, `HTML`, `CSS` |
| ⚡ Bundler | `Vite` |
| 🔌 Emulator | Custom JS terminal shell |
| 🤖 Extras | Clippy AI, Fake BSODs, Virus simulator |

---

## ✨ Key Features

- 📝 Fully functioning **text editor**
- 📁 Virtual **file system** with SQLite
- 🧠 **Compiled apps** in browser memory (C++ → WASM)
- 🖱️ Window management (drag, resize, minimize)
- 🧻 Retro **CLI shell**
- 💀 BSOD & fake virus triggers
- 🐤 Reimagined **Clippy** for emotional support

---

## 🔧 Installation


# Clone the repository
git clone https://github.com/Anushdcosta/juicebox-os.git
cd juicebox-os

# Install dependencies
npm install

# Run in development mode
npm run dev
