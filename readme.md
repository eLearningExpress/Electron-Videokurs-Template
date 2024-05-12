# Electron Video Kurs Template

![](https://github.com/eLearningExpress/Electron-Videokurs-Template/blob/main/assets/electron_video_kurs.jpg)

### Projektbeschreibung

Electron Video Kurs ist eine plattformübergreifende Desktop-Anwendung, entwickelt mit Electron, die strukturierte Lerninhalte in Videoform bereitstellt. Diese Anwendung ist ideal für Benutzer, die eine interaktive und benutzerfreundliche Lernumgebung suchen.

### Systemanforderungen
- **Windows:** 7 oder neuer
- **macOS:** 10.10 (Yosemite) oder neuer
- **Linux:** Ubuntu 12.04 oder neuer, Fedora 21, Debian 8 oder eine ähnliche Linux-Distribution

## Schritt-für-Schritt-Installation

### Schritt 1: Installation von Node.js und npm
1. Besuchen Sie die offizielle [Node.js Website](https://nodejs.org/) und laden Sie die neueste Version für Ihr Betriebssystem herunter.
2. Führen Sie den heruntergeladenen Installer aus und folgen Sie den Anweisungen, um Node.js und npm zu installieren.
3. Öffnen Sie ein Terminal oder eine Eingabeaufforderung und geben Sie folgendes ein, um zu überprüfen, ob die Installation erfolgreich war:

```javascript
node -v
npm -v
```

Diese Befehle sollten die aktuell installierten Versionen von Node.js und npm zurückgeben.

### Schritt 2: Einrichtung des Projekts
1. Klone das Projekt-Repository von GitHub:

```javascript
git clone https://github.com/eLearningExpress/Electron-Videokurs-Template.git
```

2.  Wechseln Sie in das Verzeichnis des geklonten Projekts:

```javascript
cd Electron-Videokurs-Template
```

### Schritt 3: Installation der Projekt-Abhängigkeiten
1. Installieren Sie alle erforderlichen Node-Module mit npm:

```javascript
npm install
```

### Schritt 4: Installation von Electron und Electron Builder
1. Fügen Sie Electron zum Projekt hinzu:

```javascript
npm install electron --save-dev
```

2.  Installieren Sie Electron Builder, der für das Packaging und die Distribution der Anwendung verwendet wird:

```javascript
npm install electron-builder --save-dev
```

## Build-Anweisungen
Um die Anwendung zu bauen und eine ausführbare Datei für Ihr Betriebssystem zu erstellen, führen Sie den folgenden Befehl im Wurzelverzeichnis des Projekts aus:

```javascript
npm run dist
```

Dies erstellt eine ausführbare Datei im `dist`-Ordner.

## Anpassung der Inhalte
Fügen Sie neue Videos oder Lektionen hinzu, indem Sie die `index.html`-Datei bearbeiten und neue `<li>`-Einträge für die Videos in den entsprechenden Abschnitten hinzufügen. Laden Sie die entsprechenden Videodateien in den `/videos`-Ordner hoch.

## Dateistruktur
- **`/videos`:** Enthält alle Videodateien, die in der Anwendung verwendet werden.
- **`/assets`:** Enthält statische Ressourcen wie App-Icons und Hintergrundbild.
- **`/css`:** Enthält CSS-Dateien für das Styling der Anwendung.
- **`/js`:** Enthält JavaScript-Dateien für die Funktionalität der Anwendung.

## Verwendete Technologien
- **Bootstrap 5.3.3:** Für die Sidebar und UI-Komponenten.

## Entwicklerwerkzeuge deaktivieren
Um die Entwicklerwerkzeuge in der produzierten Version der Anwendung auszuschalten, kommentieren Sie die Zeile `win.webContents.openDevTools();` in der `createWindow`-Funktion der main.js aus.

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz veröffentlicht.

