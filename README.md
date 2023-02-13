# Plattenladen-Backend

Plattenladen wo Produkte verkauft werden

```js
Aufgaben 7. Februar
1. Richte ein Repository für dein Backend-Projekt ein. Achte auf die passenden Branches, eine klare Struktur und die notwendigen "ersten Schritte": Module, Environment, Skripte.✓
2. Erstelle einen Express-Server, der auf `GET /` mit Status 200 und einem leeren Response antwortet.✓
3. Deploye deinen Server auf render.com. Wähle den passenden Branch dafür aus.✓
4. Beginne mit der Umsetzung der User Story zur Produktliste. Versuche so lange wie möglich ohne Datenbank auszukommen, indem du in den einzelnen Schritten Dummy-Daten verwendest.✓
Committe regelmäßig und mit aussagekräftigen Messages!
```

```js
Aufgaben 8. Februar
1. Beendet die Aufgaben von gestern ✓
2. Implementiert für die Get All Products Route, dass man einen Such Term als Query Parameter erwartet✓
3. Überlegt euch, wie ihr mithilfe von mongoose den Suchterm nutzen kann um Künstler und Titel zu suchen ✓
```

```js
Aufgaben 9. Februar
1. beendet Aufgaben von gestern ✓
2. Erstelle eine Datenbankverbindung zu deiner mongodb auf Atlas ✓
3. Erstelle eine Model für Records ✓
4. Erstelle Validatoren, dass die notwendigen Daten Pflicht sind und URLs im richtigen Format abgespeichert werden
5. Baue eine Route und dazugehörige Methode, die alle Records zurück gibt. Nutze den Suchterm von gestern zum Filtern der Ergebnisse
6. Baue eine Seed Datei, die Records anlegt. Erstelle deine eigenen Daten oder nutze Faker
BONUS: Erstelle ein Model für User und die notwendigen Methoden und Routen für Login und Register inkl. hashing und Token
```

```js
Tipp: Für die Suche in Künster und Titel könnt ihr folgende mongoose Funktion nutzen
result = await Record.find({
        $or: [
            {
                title: {
                    $regex: '.*' + search + '.*'
                }
            },
            {
                artist: {
                    $regex: '.*' + search + '.*' }
                }
        ]
    })
```

```js
1. Beende die Aufgaben von letzter Woche.
2. Benutze einen Build des Frontends aus dem Frontend-Repo und liefere es über dein Backend aus. Du musst nach dem Klonen selbst einen Build erstellen.
3. Kann dein Endpoint vom Frontend ausgelesen werden? Korrigiere ihn, falls nötig.
```
