/* Aufgabe 1 – Variablen & Datentypen
	1.	Erstelle Variablen für deinen Namen, dein Alter und dein Lieblingshobby.
	2.	Gib alle drei mit console.log() aus.
	3.	Ändere den Hobby-Wert und gib ihn erneut aus.
	4.	Verwende typeof, um den Datentyp anzuzeigen. */

const name = "Arne";
const alter = "28";
const hobby = "running";

console.log(typeof name);
console.log(typeof alter);
console.log(hobby);


/* Aufgabe 2 - Arrays
	1.	Erstelle ein Array mit 4 deiner Lieblingsfilme.
	2.	Gib den ersten und den letzten Film aus.
	3.	Füge einen weiteren Film hinzu (push()) und gib das Array aus. */

const lieblingsfilme = ["Der Hobbit: Eine unerwartete Reise", "Der Hobbit: Smaugs Einöde", "Der Hobbit: Die Schlacht der fünf Heere"];

console.log(lieblingsfilme[0], lieblingsfilme[2]);

lieblingsfilme.push("Der Herr der Ringe: Die Gefährten")

console.log(lieblingsfilme);


/* Aufgabe 3 – Objekte
	1.	Erstelle ein Objekt person mit folgenden Eigenschaften:
	•	name (String)
	•	age (Number)
	•	isStudent (Boolean)
	•	hobbies (Array)
	2.	Gib mit console.log() nur den zweiten Eintrag aus hobbies aus.
	3.	Füge eine neue Eigenschaft city hinzu. */

const person = {name: "Arne", age: 28, isStudent: true, hobbies: ["running", "coding", "hyrox"]}

console.log(person.hobbies[1]);

person.city = "Berlin";

console.log(person);


/*  Aufgabe 4 – Operatoren
	1.	Erstelle zwei Variablen x = 7, y = 3.
	2.	Berechne:
	•	Summe
	•	Differenz
	•	Produkt
	•	Rest bei Division
	•	Potenz (x ** y)
	3.	Lass alles in der Konsole ausgeben. */

const x = 7;
const y = 3;

summe = x + y;
differenz = x - y;
produkt = x * y;
rest = x % y;
potenz = x ** y;

console.log(summe);
console.log(differenz);
console.log(produkt);
console.log(rest);
console.log(potenz);

/* Aufgabe 5 – if/else
	1.	Erstelle eine Variable temperature.
	2.	Wenn temperature > 25, gib „Es ist heiß“ aus. Wenn temperature >= 15, „Angenehm“. Sonst „Kalt“.
	3.	Teste verschiedene Werte. */

const temperature = 20;

if (temperature > 25) {
	console.log("Es ist heiß.")
} else {
	console.log("Es ist kalt.")
}