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
4. Erstelle Validatoren, dass die notwendigen Daten Pflicht sind und URLs im richtigen Format abgespeichert werden ✓
5. Baue eine Route und dazugehörige Methode, die alle Records zurück gibt. Nutze den Suchterm von gestern zum Filtern der Ergebnisse ✓
6. Baue eine Seed Datei, die Records anlegt. Erstelle deine eigenen Daten oder nutze Faker  ✓
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
1. Beende die Aufgaben von letzter Woche.  ✓
2. Benutze einen Build des Frontends aus dem Frontend-Repo und liefere es über dein Backend aus. Du musst nach dem Klonen selbst einen Build erstellen. ✓
3. Kann dein Endpoint vom Frontend ausgelesen werden? Korrigiere ihn, falls nötig.  ✓
```

```js
1. Beende die Aufgaben von gestern. ✓
2. Richte zwei Endpoints ein, mit denen Produkte hinzugefügt und bearbeitet werden können.
3. Verbinde die aktuelle Version des Frontends mit deinem Backend, sodass Produkte hinzugefügt werden können.
4. Überlege dir, wo wir im Frontend die Produktdaten fetchen und verwalten wollen.
```

```js
1. Beende die Aufgaben von gestern
2. Erweitere dein Products Modell um das Feld inventory, was Aussage darüber trifft welcher Bestand des Produkts vorhanden ist. Default sollte dieser 0 und nie kleiner als 0 sein
3. Erstelle ein neues Modell Order, wo die Bestellungen gespeichert werden.
4. Als Felder möchten wir ein Array aus Objekten mit Produkt_id die auf unser produkt Model referenzieren, und Menge, die Bezahlmethode und die Adresse als Subdocument
5. Erstelle eine POST /, eine GET / und eine GET /:id Route. AUFGEPASST. Eine Bestellung sollte nur dann möglich sein, wenn die gewünschte Anzahl auch als inventory vorhanden sind
BONUS: Falls noch nicht vorhanden baue eine User Modell und verweise in deiner Bestellung auch auf den User
```

```js
const success = await action({
    ...formValues,
    id: product?.id,
    year: parseInt(formValues.year),
    price: parseFloat(formValues.price),
});
```

```js
1. Beende die Aufgaben von gestern
2. Baue ein User Model mit den Feldern Passwort und email
3. Baue ein authRouter mit dazugehörigen Controllern. Binde diesen in deinem Server ein
4. Implementiere eine register Route die einen neuen User anlegt und das password gehashed speichert
5.Implementiere eine Login Route, die überprüft, ob der Nutzer vorhanden ist und ob das Passwort stimmt. Falls ja erstelle einen Token und gebe zwei cookies zurück. Einen mit dem token als httpOnly und einen mit der id
6. Mache die Route GET Order nur zugänglich für den dazugehörigen User
```
