const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')

function createWindow() {
  // Erstellen des Browser-Fensters im Vollbildmodus und nicht veränderbar.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true, // Öffnet das Fenster im Vollbildmodus
    resizable: false, // Verhindert die Größenänderung des Fensters
    // Wählt das Icon basierend auf dem Betriebssystem
    icon: path.join(__dirname, 'assets', process.platform === 'win32' ? 'app-icon.ico' : 'app-icon.icns')
  })

  // Laden der index.html der App.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Öffnen der Entwicklertools automatisch, wenn das Fenster bereit ist.
  // Auskommentieren wenn es nicht mehr benötigt wird
  win.webContents.openDevTools();

  // Erstellung eines Menüs.
  const menuTemplate = [
    {
      label: 'Anwendung beenden',
      click() { app.quit(); }
    }
  ];
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)
}

app.on('ready', createWindow)
