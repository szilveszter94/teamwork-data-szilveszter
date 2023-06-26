let favBooks = [
    {
        "title": "1984",
        "author": "George Orwell",
        "year": 1949,
        "isNewerThan2000": false,
        "age": 74,
        "characters": ["Winston Smith", "Julia", "O'Brian", "Emmanuel Goldstein"]
    },
    {
        "title": "Lord of the Flies",
        "author": "William Golding",
        "year": 1954,
        "isNewerThan2000": false,
        "age": 69,
        "characters": ["Jack", "Ralph", "Piggy", "Simon"]
    }
];

let favMovies = [
    {
        "title": "The Godfather",
        "year": 1972,
        "rating": 9.2,
        "description": "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
        "directors": ["Francis Ford Coppola"],
        "writers": ["Mario Puzo", "Francis Ford Coppola"],
        "stars": ["Marlon Brando", "Al Pacino", "James Caan"],
        "genres": ["Crime", "Drama"]
    },
    {
        "title": "Fight Club",
        "year": 1999,
        "rating": 8.8,
        "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        "directors": ["David Fincher"],
        "writers": ["Chuck Palahniuk", "Jim Uhls"],
        "stars": ["Brad Pitt", "Edward Norton", "Meat Loaf"],
        "genres": ["Drama"]
    },
    {
        "title": "Se7en",
        "year": 1995,
        "rating": 8.6,
        "description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        "directors": ["David Fincher"],
        "writers": ["Andrew Kevin Walker"],
        "stars": ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
        "genres": ["Crime", "Drama", "Mystery"]
    },
    {
        "title": "American Psycho",
        "year": 2000,
        "rating": 7.6,
        "description": "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.",
        "directors": ["Mary Harron"],
        "writers": ["Bret Easton", "EllisMary Harron", "Guinevere Turner"],
        "stars": ["Christian Bale", "Justin Theroux", "Josh Lucas"],
        "genres": ["Crime", "Drama", "Horror"]
    }
];

let favSongs = [
    {
        title: "Break On Through (To the Other Side)",
        artist: "The Doors",
        year: 1967,
        genres: ["Psychedelic rock", "Hard rock", "Bossa Nova"],
        sale: 250000,
        "review": "Hello"
    }, {
        title: "An American Prayer",
        artist: "Jim Morrison & the Doors",
        year: 1978,
        genres: ["Jazz rock", "Poetry", "Spoken word"],
        sale: 1000000,
        "review": "Hello"
    }
]

let ourTeam = {
	name: "RandomNumber Generator(1,6)",
	members:[
		{
			name: "Sándor Szilveszter",
			birthday: { year: 1994, month: "02", day: "23" },
			location: { country: "Hungary", city: "Békéscsaba" },
			codingLevel: {level: 40, seniority: "junior"},
			favorites: {"favMovies": favMovies, "favBooks": favBooks, "favSongs": favSongs},
			colors: {primary: {red: 17, green:45, blue:78}, secondary: {red: 249, green:247, blue:247}}
		}],
}