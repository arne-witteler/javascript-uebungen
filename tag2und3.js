/* Aufgabe 1 – Funktionen
	1.	Schreibe eine Funktion sayHello, die einen Namen entgegennimmt und "Hallo <Name>!" in der Konsole ausgibt.
	2.	Schreibe eine Funktion add, die zwei Zahlen addiert und das Ergebnis zurückgibt (return).
	3.	Teste beide Funktionen mit unterschiedlichen Werten.
	4.	Schreibe eine Arrow Function square, die eine Zahl quadriert (mal sich selbst). */

function sayHello (name) {
  console.log("Hallo " + name);
}
sayHello("Arne");


function add(zahl1, zahl2) {
  sum = zahl1 + zahl2;
  return sum;
}
add(1, 2);
console.log(sum);


const square = (zahl3) =>  (zahl3 ** 2);
console.log(square(3));

/* Aufgabe 2 – forEach()
	1.	Erstelle ein Array mit 5 Tiernamen.
	2.	Gib für jedes Tier "<Tier> ist ein schönes Tier" in der Konsole aus. (z. B. „Hund ist ein schönes Tier“)
	3.	Nutze dafür forEach(). */

const tiere = ["Hund", "Katze", "Maus", "Orca", "Faultier"];
tiere.forEach((tier) => console.log(tier + " ist ein schönes Tier"));

/* Aufgabe 3 – map()
	1.	Erstelle ein Array mit Zahlen von 1 bis 5.
	2.	Erstelle ein neues Array, in dem jede Zahl verdoppelt ist.
	3.	Gib beide Arrays aus, um den Unterschied zu sehen. */

const zahlen = [1, 2, 3, 4, 5]
const verdoppelteZahlen = zahlen.map((zahl) => zahl*2);
console.log(verdoppelteZahlen);

/* Aufgabe 4 – filter()
	1.	Erstelle ein Array mit verschiedenen Alterwerten: [12, 17, 18, 22, 30, 15].
	2.	Filtere alle, die mindestens 18 sind.
	3.	Gib das gefilterte Array aus. */

const alterwerte = [12, 17, 18, 22, 30, 15];
const adult = alterwerte.filter((alterwert) => alterwert >= 18);
console.log(adult);

/* Aufgabe 5 – Kombination
	1.	Erstelle ein Array von Objekten mit Namen und Alter. 
  2.	Filtere alle, die über 18 sind.
	3.	Erstelle daraus ein neues Array mit nur den Namen (map() nutzen).
	4.	Gib das Ergebnis aus.*/

const people = [
  { name: "Arne", age: 28 },
  { name: "Tom", age: 17 },
  { name: "Chris", age: 22 },
  { name: "Lea", age: 23 },
  { name: "Simone", age: 16 },
];

const adultPeopleWithAge = people.filter(ages => ages.age >= 18);
const adultPeople = adultPeopleWithAge.map(ages => ages.name);

console.log(adultPeopleWithAge);
console.log(adultPeople);

/* Bonus
Schreib eine Funktion getAdults(people), die genau diese Filterung übernimmt — also ein echtes kleines Programm. */

function getAdults(people) {
  const adultPeopleWithAge = people.filter(person => person.age >= 18);
  const adultPeople = adultPeopleWithAge.map(person => person.name);
  return adultPeople;
}

console.log(getAdults(people));