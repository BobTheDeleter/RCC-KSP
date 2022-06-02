# RCC-KSP
Riced Command Centre is my attempt at a modern mission monitoring (and hopefully control) centre for Kerbal Space Program, using the [Telemachus mod](https://github.com/KSP-Telemachus/Telemachus) and [Svelte](https://www.npmjs.com/package/svelte). 

## How to install
### Dependencies
- Kerbal Space Program
- Telemachus Continued
- NPM
### Process
- Navigate to KSP install directory
- Navigate to GameData\Telemachus\Plugins\PluginData\Telemachus
- Clone repo into the folder
- Install dependencies
- Build with npm and svelte
```
cd [KSP_DIRECTORY]
cd  .\GameData\Telemachus\Plugins\PluginData\Telemachus
git clone https://github.com/CHEESEDABEST/RCC-KSP/
cd RCC-KSP
npm install
npm run build
```

## How to use
- Build a craft with any of the Telemachus antenae on it
- Ensure datalink is open on the antena
- Navigate to `localhost:8085/telemachus/rcc-ksp/public/index.html` 

## Why though?
When I saw the Telemachus mod, I could see there was a lot you could do with it, and indeed it comes with many GUIs which have their own styles and features. I simply want to create my own, with a different style (closer to something you'd find on [r/unixporn](https://www.reddit.com/r/unixporn/)) and a few unique features that wouldn't really make sense in the other GUIs, such as a mission outline board, camera feed and potentially other modules which, while not neccesarily helpful in-game, are fun to look at/use.
