const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 500,
    useContentSize: true, // Width and height refer to web page's size and excludes the window frame
    resizable: false, // Can't resize the window
    webPreferences: {
      contextIsolation: true,
    },
  });

  win.setMenu(null); // Remove default application menu
  win.loadFile("./src/index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
