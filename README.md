User Story Set: Calender


		I. User Story: Terminübersicht im Pool ermöglichen

Beschreibung: Als Supporter muss ich, um mich tatsächlich einbringen zu können, an den verschiedenen Treffen teilnehmen können. Dafür benötige ich zunächst einmal die Information wann und wo derartige Treffen stattfinden. Diese sollen im Pool auf der Landing Page nach dem Login ausgegeben werden.

Akzeptanzkriterien:

1. Ein Termin hat ein Datum und ggf. ein Uhrzeit: 

2. Ein Termin hat einen Ort. Dieser kann dabei auch ein virtueller Raum (wie etwa Skype) sein: 
- getAppointmentLocation()

3. Angezeigte Termine können gefiltert werden nach:
- Region: 
- Bereich (Bildung, Netzwerk, Aktionen, Finanzen):
- Aufgaben
	
4. Export in eigene Kalender ist möglich (CalDAV, Google Kalender, Microsoft Outlock Kalender, Yahoo Kalender, iCloud Kalender, Fruux Kalender): tbd

5. Benachrichtigungssystem: Kommt ein neuer Termin hinzu, wird der Nutzer mittels einer Benachrichtigung informiert; Benachrichtigung erfolgt nicht via Mail


* Feature Requests: *

Landing page: für Akzeptanzkriterien (AK) 1 und 2

Termine sind in einer Tabelle sichtbar 
Spalten: Datum, Uhrzeit, Ort
Zeilen: Termine mit Angaben
getAppointmentDate(), getAppointmentTime(), etc.


Filter-button (on the right side of the table): für AK 3

Öffnet ein kleines Fenster, in dem die Filteroptionen mit Kontrollkästchen und Dropdown-Menü angezeigt werden.
Unten ist ein "Suchen"-button


Export-button: für AK 4

Öffnet ein Fenster, in dem eine Liste der Exportoptionen angezeigt wird.
Unten befindet sich eine "Export"-button


Benachrichtigungssystem: für AK 5

Ein Fenster wird geöffnet, wenn eine neue Benachrichtigung eintrifft.
Oben auf der Seite: Button zum Öffnen und Schließen einer Liste der letzten Benachrichtigungen.
Unten in der Liste: Option, die ein Fenster mit allen eingegangenen Benachrichtigungen in chronologischer Reihenfolge anzeigt.
Benachrichtigungen sind unterteilt in: "Lesen" und "Ungelesen". (unterschiedliche Hintergrundfarbe)
systemMessage(), systemNotification()




		II. US: Erfassung von Terminen

Beschreibung: 

Als Supporter muss ich mich mit anderen Supportern treffen können. Daher muss ich diese im System eingeben können

Akzeptanzkriterien:

1. Besteht aus:
- Datum
- [optional] Uhrzeit
- Ort (auch virtueller Ort möglich – z.B. Skype)
- Region
- [optional] Bereich
- Zugangsverfahren (frei zugänglich, Anmeldung erforderlich, Bewerbung erforderlich)
- Teilnehmer

2. Region und Bereich werden aus Informationen des erstellenden Nutzers ausgelesen, können aber bei der Erstellung angepasst werden

3. Möglichkeit einen Termin hinsichtlich Ort und Zeit abzustimmen besteht (impliziert die Notwendigkeit andere Nutzer einzuladen)

4. Wird keine Zugangsbeschränkung gewählt, muss ein Hinweis ausgegeben werden, dass die Ortsinformationen öffentlich sichtbar sind (falls jemand seine Privatadresse angibt – siehe User Story „Zugänglichkeit regionaler Termine ohne Pool Zugang“)

* Feature Requests: *

Termin hinzufügen: für AK 1

- Ein Fenster mit leeren Feldern wird geöffnet, um einen neuen Termin einzugeben.
- Option zum automatischen Ausfüllen von "Region" und "Bereich" mit Benutzerinformationen. 
- Button die eine Liste von Benutzer öffnet, die zum Termin eingeladen werden sollen.
- Button zum Erstellen eines Termins, Fehler anzeigen, falls ein Pflichtfeld leer ist.
- Benutzer benachrichtigen, dass keine Zugangsbeschränkung vorliegt.
- createAppointment(), postAppointment(), putAppointment() 




		III. US: Visualisierung des Zugangs zum Termin

Beschreibung: 

Als Supporter muss ich wissen, ob ich an einem Termin teilnehmen kann und darf. Neben der Information wann und wo ein Termin stattfindet (siehe User Story „Terminübersicht im Pool ermöglichen“) wird es dafür auch notwendig sein zu klären ob ich daran teilnehmen kann (frei zugänglich, Anmeldung erforderlich, Bewerbung erforderlich).

Akzeptanzkriterien:

1. Das Zugangsverfahren ist dem Nutzer in jeder Form der Präsentation über ein Icon ersichtlich

2. In jeder Form der Präsentation steht eine Möglichkeit bereit durch einen einzigen Interaktionsschritt das Zugangsverfahren einzuleiten

* Feature Requests: *



		IV. US: Zugänglichkeit regionaler Termine ohne Pool Zugang

Beschreibung: 

Als interessierter Außenstehender möchte ich wissen auf welche Weise ich partizipieren kann. Dafür muss ich bereits aktive Menschen treffen. Um die Hemmschwelle zu reduzieren zunächst einen Pool-Account anlegen zu müssen, sollen die regionalen Termininformationen auf einer Pool-Landing Page sichtbar sein, die ohne vorherige Authentifizierung aufgerufen werden kann. Der Nutzer soll nach der gewünschten Region filtern können.

Akzeptanzkriterien:

1. Termine werden äquivalent zur Beschreibung in User Story „Terminübersicht im Pool ermöglichen“ ausgegeben, mit folgenden Anpassungen:

- Zugangsbeschränkte Termine werden mit dem Hinweis ausgegeben, dass eine vorherigen Anmeldung im Pool erforderlich ist

- Zugangsbeschränkte Termine werden ohne Ortsdaten ausgegeben, um die Privatsphäre der Supporter zu schützen

2. Filterung kann nach Region und Bereich (Netzwerk, Bildung, Aktionen, Finanzen) erfolgen

3. Im Standardfall wird eine Liste von Terminen ausgegeben, die nur hinsichtlich der Region gefiltert ist, insofern die IP Adresse des Nutzers auf eine Region im Sinne von VcA schließen lässt


* Feature Requests: *
