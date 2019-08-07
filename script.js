
function Player(name, lastName, number, position, age, picture) {
	this.name = name;
	this.lastName = lastName;
	this.number = number;
	this.position = position;
	this.age = age;
	this.picture =  "./img/" + picture;
}


const burki = new Player("Roberto", "Burki", 1, "GoalKeaper", 29, "burki.jpg");
const hitz = new Player("Matin", "Hitz", 35, "GoalKeaper", 32, "hitz.jpg");
const zagadou = new Player("Dan-Axel", "Zagadou", 2, "Defense", 30, "zagadou.jpg");
const diallo = new Player("Abdou", "Diallo", 4, "Defense", 23, "diallo.jpg");
const guerreiro = new Player("Raphael", "Guerriro", 13, "Defense", 26, "guerreiro.jpg");
const piszczek = new Player("Lukasz", "Piszczek", 26, "Defense", 34, "piszczek.jpg");
const akanji = new Player("Manuel", "Akanji", 16, "Defense", 24, "akanji.jpg");
const schmelzer = new Player("Marcel", "Schmelzer",29, "Defense", 31, "schmelzer.jpg");
const delaney = new Player("Thomas", "Delaney", 6, "Midfield", 28, "delaney.jpg");
const gotze = new Player("Mario", "Gotze", 10, "Midfield", 27, "gotze.jpg");
const gomez = new Player("Sergio", "Gomez", 17, "Midfield", 19, "gomez.jpg");
const witsel = new Player("Axel", "Witsel", 28, "Midfield", 30, "witsel.jpg");
const reus = new Player("Marco", "Reus", 11, "Forward", 30, "reus.jpg");
const larsen = new Player("Jacob Bruun", "Larsen", 34, "Forward", 21, "larsen.jpg");
const wolf = new Player("Marius", "Wolf", 27, "Forward", 24, "wolf.jpg");

//Team object

const team = {
	teamLogo: "./img/logo.jpg",
	teamName: "Borussia Dortmund",
	players: [burki, hitz, zagadou, diallo, guerreiro, piszczek, akanji, schmelzer, delaney, gotze, gomez, witsel, reus, larsen, wolf]
}

const addLogo = () => {
	const logo = document.createElement('img');
	const header = document.querySelector('header .header-inner');

	logo.setAttribute('src', team.teamLogo);
	header.prepend(logo);

}
addLogo();

const addTitle = () => {
	const title = document.createElement('h1');
	const header = document.querySelector('header')
	title.textContent = team.teamName;
	header.appendChild(title);
}
addTitle();

let teamCopy = [...team.players];

let firstSquad = document.querySelector('.first-squad');
let bench = document.querySelector('.bench-players');

const getRandom = arr => {
	return Math.round(Math.random() * (arr.length - 1));
}

const addPlayer = () => {
	while (teamCopy.length) {
		let randomPlayerNumber = getRandom(teamCopy);
		let randomPlayer = teamCopy[randomPlayerNumber];

		if (teamCopy.length > 4) {
			firstSquad.appendChild(createPlayer(randomPlayer));
		} else {
			bench.appendChild(createPlayer(randomPlayer));
		}

		teamCopy.splice(randomPlayerNumber, 1);
	}
}

const createPlayer = (playerData) => {

	let playerID = document.createElement('div');

	playerID.classList.add('player');

	let image = `<img src= ${playerData.picture} />`;
	let name = `<p>Name: ${playerData.name} </p>`;
	let lastName = `<p>Last Name: ${playerData.lastName} </p>`;
	let number = `<p>Number: ${playerData.number} </p>`;
	let position = `<p>Position: ${playerData.position} </p>`;
	let age = `<p>Age: ${playerData.age} </p>`;

	playerID.innerHTML = `${image} ${name} ${lastName} ${number} ${position} ${age}`;

	return playerID;

}

const switchPlayers = () => {

   let firstSquadPlayers = firstSquad.querySelectorAll(".player");
   let benchPlayers = bench.querySelectorAll(".player");

   let firstPlayerNumber = getRandom(firstSquadPlayers);
   let benchPlayerNumber = getRandom(benchPlayers);
   
   let firstPlayer = firstSquadPlayers[firstPlayerNumber];
   let benchPlayer = benchPlayers[benchPlayerNumber];
   
   let prevBenchPlayer = benchPlayer.previousSibling;
   let nextBenchPlayer = benchPlayer.nextSibling;

   firstPlayer.before(benchPlayer);
   prevBenchPlayer ? prevBenchPlayer.after(firstPlayer) : nextBenchPlayer.before(firstPlayer);
}

addPlayer();

setInterval(() => switchPlayers(), 1000);


