const favGame2 = [
	{"title": "Minecraft",
    	"developer": "Mojang Studios",
    	"year": 2011,
   	"geres": ["Sandbox", "Survival"],
	"review": `Minecraft holds a special place in my heart because it allows me to unleash my creativity and build extraordinary worlds. The freedom and endless possibilities the game offers ignite my imagination and keep me coming back for more. Whether I'm exploring caves, constructing intricate structures, or embarking on epic adventures with friends, Minecraft never fails to captivate me with its enchanting charm.` 
    	},
	{"title": "Stronghold Crusader",
    	"developer": "Firefly Studios",
    	"year": 2001,
   	"geres": ["Strategy", "Simulation"],
	 "review": `I love Stronghold Crusader because it combines strategic depth with addictive gameplay. The thrill of planning and executing successful castle defenses or launching relentless sieges against my opponents keeps me engrossed for hours on end. The game's emphasis on resource management, troop deployment, and fortification strategies challenges my tactical skills and keeps me constantly engaged.`
	}];

const favGame = [
	{"title": "Diablo II",
    	"developer": "Blizzard North",
    	"year": 2000,
   	"geres": ["Action role-playing", "Hack and slash"],
	"review": `I love the nostalgic charm and timeless appeal of Diablo II. Its classic isometric graphics, haunting music, and immersive atmosphere transport me back to the dark and treacherous world of Sanctuary. The game's addictive loot system, intense combat, and endless character customization options make it an enduring favorite that I can always return to for an unforgettable gaming experience.` 
    	},
	{"title": "World of Warcraft (WoW)",
    	"developer": "Blizzard Entertainment",
    	"year": 2004,
   	"geres": ["Massively multiplayer online", "Role-playing"],
	 "review": `I love the constant evolution and support that WoW receives from its developers, ensuring that the game remains fresh and engaging. From regular content updates and expansions to quality-of-life improvements and balancing adjustments, the dedication to enhancing the gameplay experience keeps me invested and excited to see what's next in Azeroth.`
	}];

const favBooks = [
    {"title": "1984",
    "author": "George Orwell",
    "year": 1949,
    "characters": ["Winston Smith", "Julia", "O'Brian", "Emmanuel Goldstein"],
	"review": `I love the book '1984' by George Orwell for its haunting portrayal of a dystopian society and its thought-provoking exploration of the dangers of totalitarianism and the importance of individual freedom.` 
    },
    {"title": "Lord of the Flies",
    "author": "William Golding",
    "year": 1954,
    "characters": ["Jack", "Ralph", "Piggy", "Simon"],
	"review": `I love the book "Lord of the Flies" by William Golding for its chilling depiction of human nature and the inherent struggle between civilization and savagery, which leaves a lasting impact on your understanding of the complexities of society and the darkness that can reside within us all.` 
    }];

const favSongs = [{
	"title": "Break On Through (To the Other Side)",
	"artist": "The Doors",
	"year": 1967,
	"genres": ["Psychedelic rock", "Hard rock", "Bossa Nova"],
	"sale": 250000,
	"review": `I love the song "Break On Through (To the Other Side)" by The Doors for its electrifying energy, mesmerizing lyrics, and Jim Morrison's powerful vocals that take you on a transcendent musical journey, making it an unforgettable anthem of rebellion and exploration.`
},{
	"title": "An American Prayer",
	"artist": "Jim Morrison & the Doors",
	"year": 1978,
	"genres": ["Jazz rock", "Poetry", "Spoken word"],
	"sale": 1000000,
	"review": `I love the song "American Prayer" by The Doors for its poetic and introspective lyrics, combined with the band's signature sound. The song's fusion of rock, blues, and spoken word creates a captivating and thought-provoking experience.`
}]

const favMovies = [{
	"title":"The Godfather",
	"year":1972,
	"rating":9.2,
	"directors":["Francis Ford Coppola"],
	"writers":["Mario Puzo", "Francis Ford Coppola"],
	"stars":["Marlon Brando", "Al Pacino", "James Caan", "Richard S. Castellano"],
	"genres":["Crime", "Drama"],
	"review": `I love the movie "The Godfather" for its masterful storytelling, brilliant performances, and immersive portrayal of the Italian-American mafia. The film's intricate plot, iconic characters, and powerful themes of loyalty, power, and family dynamics have made it a timeless classic that continues to captivate audiences and influence cinematic storytelling.` 
},
{
	"title":"Fight Club",
	"year":1999,
	"rating":8.8,
	"directors":["David Fincher"],
	"writers":["Chuck Palahniuk", "Jim Uhls"],
	"stars":["Brad Pitt", "Edward Norton", "Meat Loaf", "Zach Grenier"],
	"genres":["Drama"],
	"review": `I love the movie "Fight Club" for its provocative and unconventional exploration of masculinity, consumerism, and societal conformity. The film's gritty style, mind-bending narrative twists, and intense performances by Brad Pitt and Edward Norton create an unsettling yet thought-provoking experience that challenges societal norms and leaves a lasting impact on your perception of identity and rebellion.`
},
{
	"title":"Se7en",
	"year":1995,
	"rating":8.6,
	"directors":["David Fincher"],
	"writers":["Andrew Kevin Walker"],
	"stars":["Morgan Freeman", "Brad Pitt", "Kevin Spacey", "Gwyneth Paltrow"],
	"genres":["Crime", "Drama", "Mystery"],
	"review": `I love the movie "Se7en" for its gripping and darkly atmospheric storytelling. The film's intricate plot, meticulous attention to detail, and chilling performances by Morgan Freeman and Brad Pitt create a haunting and suspenseful experience. Its exploration of the seven deadly sins and the depths of human depravity leaves a lasting impression, making it a gripping psychological thriller that resonates long after the credits roll.` 
},
{
	"title":"American Psycho",
	"year":2000,
	"rating":7.6,
	"directors":["Mary Harron"],
	"writers":["Bret Easton", "EllisMary Harron", "Guinevere Turner"],
	"stars":["Christian Bale", "Justin Theroux", "Josh Lucas", "Willem Dafoe"],
	"genres":["Crime", "Drama", "Horror"],
	"review": `I love the movie "American Psycho" for its unsettling and satirical portrayal of a Wall Street investment banker's descent into madness and obsession. The film's sharp social commentary, dark humor, and Christian Bale's mesmerizing performance create a disturbing yet captivating experience. Its exploration of identity, materialism, and the veneer of perfection in American society challenges and disturbs, making it a thought-provoking and memorable psychological thriller.` 
}]

const ourTeam = {
	name: "RandomNumber Generator(1,6)",
	members:[
		{
			name: "Sándor Szilveszter",
			birthday: { year: "1994", month: "02", day: "23" },
			location: { country: "Hungary", city: "Békéscsaba" },
			codingLevel: {level: 40, seniority: "junior"},
			favorites: {"favMovies": favMovies, "favBooks": favBooks, "favSongs": favSongs},
			colors: {primary: {red: 17, green:45, blue:78}, secondary: {red: 249, green:247, blue:247}}
		}],
}
