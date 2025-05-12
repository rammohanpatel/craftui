# 📦 CraftUI CLI

`craftui` is a lightweight CLI tool to easily add reusable UI components to your project in either JavaScript or TypeScript, in your desired folder structure.

---

## 🚀 Getting Started

### 🔹 1. Use It Instantly (No Install Needed)
Use `npx` to run the CLI directly without installing it:

```bash
npx @curious_ram/craftui add <component-name> --lang <js|ts|tsx> --dest <destination-folder>
```
Example:

```bash
npx @curious_ram/craftui add button --lang js --dest ./src/component
````
### 🔹 2. Install It Globally (One-Time Setup)
If you want to use craftui like a system-wide command:

```bash
npm install -g @curious_ram/craftui
```
Now you can run:

```bash
craftui add <component-name> --lang <js|ts|tsx> --dest <destination-folder>
```
Example:

```bash
craftui add card --lang tsx --dest ./src/components
```
### 🔹 3. Add It to Your Project (package.json)
If you'd prefer to install it locally so your team can use it via npm run or pnpm:

```bash
npm install -D @curious_ram/craftui
```
Then in your package.json scripts section:

```json
"scripts": {
  "add:button": "craftui add button --lang js --dest ./src/components"
}
```
Now you can run:

```bash
npm run add:button
```
### 📁 Available Components
Component	Description
button	A simple styled button
card	A responsive UI card

### 🌐 Language Options
Use the ```--lang``` flag to specify the file type:
```
   Flag	         Output File
--lang js	component.js
--lang ts	component.ts
--lang tsx	component.tsx
```
### 📂 Destination Option
Use the ```--dest``` flag to choose where the component should be copied:

```bash
craftui add button --lang js --dest ./src/ui/components
```
If the destination folder doesn't exist, it will be created.


## Using npx
```npx @curious_ram/craftui add button --lang js --dest ./src/components```

## After global install
``` craftui add card --lang tsx --dest ./src/ui```

## As a script in package.json
```npm run add:button```

## 📦 Publish Info
This package is published to npm as:
👉 @curious_ram/craftui

## 🛠️ Author
Created by Ram Mohan Patel