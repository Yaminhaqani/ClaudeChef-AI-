# ClaudeChef 🍳🤖

ClaudeChef is an AI-powered recipe assistant built with React. Just enter the ingredients you have, and ClaudeChef will generate a delicious recipe for you — even if some ingredients are slightly changed or improvised!

## ✨ Features

- 🔍 Send a list of ingredients
- 🍽️ Get an AI-generated recipe based on your input
- 🤏 Intelligent substitutions when some ingredients are missing

## 🛠 Tech Stack

- React + Vite  
- Tailwind CSS  
- React Markdown  
- React DOM  
- [OpenRouter AI](https://openrouter.ai)  
- Hugging Face Token (optional or planned for later)

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Yaminhaqani/ClaudeChef-AI-.git
cd ClaudeChef-AI-
```

### 2. Install dependencies
```bash
npm install
```

### 3.  Set up your .env file:
You need to get api and access token from [OpenRouter](https://openrouter.ai) 

### 4.  Run the development server:
```bash
npm run dev
```

### **_📋Usage:_** 
Enter a list of available ingredients.

ClaudeChef will analyze them and return a custom recipe using those ingredients.

The AI may intelligently tweak ingredients if needed to create a better recipe.

#### **_📌Notes:_**
🔐 Requires .env file with valid API keys.

🧠 Uses OpenRouter for AI completions.

🚫 No backend — 100% client-side application.