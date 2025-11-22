// const { app, BrowserWindow } = require("electron");
// const path = require("path");

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 500,
//     height: 300,
//     alwaysOnTop: false,
//     frame: false,
//     transparent: true,
//     webPreferences: {
//       preload: path.join(__dirname, "preload.js")
//     }
//   });

//   win.loadURL("http://localhost:3000");
// }

// app.whenReady().then(() => {
//   createWindow();

//   app.on("activate", () => {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow();
//   });
// });

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") app.quit();
// });


const { app, BrowserWindow, screen } = require("electron"); // 1. IMPORT 'screen'
const path = require("path");

function createWindow() {
  // 2. GET SCREEN DIMENSIONS
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width: screenWidth, height: screenHeight } = primaryDisplay.workAreaSize;

  // Define Note Dimensions
  const noteWidth = 200;
  const noteHeight = 200;

  // Calculate top-right position
  // We subtract the note's width from the screen's width for the X position
  const x = screenWidth - noteWidth;
  // We typically use a small margin from the top edge for the Y position (e.g., 20)
  const y = 20; 

  const win = new BrowserWindow({
    // Window Position and Size
    x: x, // New: X-coordinate for top-right
    y: y, // New: Y-coordinate for top-right
    width: noteWidth,
    height: noteHeight,

    // Window Behavior
    alwaysOnTop: false, // As requested
    frame: false,
    
    // Transparency settings (important for custom background/opacity)
    transparent: true, 

    // Custom background color via a `backgroundColor` property (Optional but helps control initial look)
    // We'll set the main background in your CSS for the yellow color, 
    // but this ensures the window itself doesn't have a default white background.
    backgroundColor: '#00000000', // Fully transparent black

    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  win.loadURL("http://localhost:3000");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});