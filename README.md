# Google Kalender Button (Firefox Add-on)

Dieses Add-on fügt einen Button zu Firefox hinzu, der den Google Kalender direkt in der Wochenansicht in einem neuen Tab öffnet.

## Dateien

Das Projekt besteht aus folgenden Kern-Dateien:
* `manifest.json` - Konfiguration des Add-ons
* `background.js` - Logik für das Öffnen des Tabs
* `icon.svg` - Icon des Add-ons

## Anpassung der Ansicht

Möchten Sie eine andere Ansicht (z.B. Monat oder Tag) als die Wochenansicht öffnen, bearbeiten Sie die Datei `background.js`. Dort finden Sie entsprechende Zeilen, die Sie lediglich einkommentieren müssen.
Natürlich können Sie auch andere Kalender (mit anderen URLs) hinzufügen, indem Sie die URL in der `background.js` Datei anpassen.

## Installation (temporär zur Entwicklung)

1. Öffnen Sie `about:debugging` in Firefox.
2. Klicken Sie auf "Dieses Firefox".
3. Klicken Sie auf "Temporäres Add-on laden...".
4. Wählen Sie die `manifest.json` Datei aus.

## Installation (dauerhaft)

Da Firefox keine unsignierten Add-ons dauerhaft zulässt, muss das Add-on signiert werden.

1. **Packen:**
   Erstellen Sie eine ZIP-Datei, die `manifest.json`, `background.js` und `icon.svg` enthält.

2. **Signieren:**
   * Melden Sie sich im [Mozilla Developer Hub](https://addons.mozilla.org/de/developers/) an.
   * Reichen Sie die ZIP-Datei als "Self-hosted" (On your own) ein.
   * Nach der automatischen Prüfung erhalten Sie eine `.xpi` Datei.

3. **Installieren:**
   * Laden Sie die signierte `.xpi` Datei herunter.
   * Ziehen Sie diese Datei in ein geöffnetes Firefox-Fenster oder installieren Sie sie über `about:addons` ("Add-on aus Datei installieren").
