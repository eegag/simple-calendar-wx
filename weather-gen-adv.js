// Identify the current season
var currentSeason = SimpleCalendar.api.getCurrentSeason();

if (currentSeason.name) {
	setWxResults(currentSeason.name);
}

// Create season-specific weather results table
async function setWxResults(season) {

	// Set type of precipitation according to season
	let precipType;
	
	if (season == "Summer") {
		precipType = "Rain";
	} else if (season == "Winter") {
		var precipChance = Math.floor(Math.random() * 10) + 1;
		
		if (precipChance > 6) {
			precipType = "Snow";
		} else  if (precipChance > 4) {
			precipType = "Sleet";
		} else {
			precipType = "Rain";
		}
	} else {
		var precipChance = Math.floor(Math.random() * 10) + 1;

		if (precipChance > 9) {
			precipType = "Snow";
		} else  if (precipChance > 8) {
			precipType = "Sleet";
		} else {
			precipType = "Rain";
		}
	}
	
	// Generate a random weird weather condition
	let weirdWxTable = game.tables.find(t => t.name === `Weird Weather`);
	
	let weirdWx = await weirdWxTable.draw({displayChat: false});

	// Hex flower of weather conditions
	let wxResults = [
		{
			"id": 0,
			"name": "Partly Cloudy NE",
			"description": "Partly cloudy, wind out of the NE.",
			"N": 2,
			"NE": 3,
			"SE": 4,
			"S": 1,
			"SW": 7,
			"NW": 18,
			"X": 0
		},
		{
			"id": 1,
			"name": "Weird CALM",
			"description": weirdWx.results[0].data.text,
			"N": 0,
			"NE": 4,
			"SE": 5,
			"S": 2,
			"SW": 12,
			"NW": 15,
			"X": 1
		},
		{
			"id": 2,
			"name": "Precipitation S",
			"description": precipType + ", wind out of the S.",
			"N": 1,
			"NE": 5,
			"SE": 6,
			"S": 0,
			"SW": 16,
			"NW": 11,
			"X": 2
		},
		{
			"id": 3,
			"name": "Clear NE",
			"description": "Clear, wind out of the NE.",
			"N": 6,
			"NE": 7,
			"SE": 8,
			"S": 4,
			"SW": 10,
			"NW": 17,
			"X": 3
		},
		{
			"id": 4,
			"name": "Partly Cloudy NE",
			"description": "Partly cloudy, wind out of the NE.",
			"N": 3,
			"NE": 8,
			"SE": 9,
			"S": 5,
			"SW": 1,
			"NW": 0,
			"X": 4
		},
		{
			"id": 5,
			"name": "Mostly Cloudy E",
			"description": "Mostly cloudy, wind out of the E.",
			"N": 4,
			"NE": 9,
			"SE": 10,
			"S": 6,
			"SW": 2,
			"NW": 1,
			"X": 5
		},
		{
			"id": 6,
			"name": "Precipitation SW",
			"description": precipType + ", wind out of the SW.",
			"N": 5,
			"NE": 10,
			"SE": 11,
			"S": 3,
			"SW": 17,
			"NW": 2,
			"X": 6
		},
		{
			"id": 7,
			"name": "Clear N",
			"description": "Clear, wind out of the N.",
			"N": 11,
			"NE": 0,
			"SE": 12,
			"S": 8,
			"SW": 3,
			"NW": 16,
			"X": 7
		},
		{
			"id": 8,
			"name": "Partly Cloudy NE",
			"description": "Partly cloudy, wind out of the E.",
			"N": 7,
			"NE": 12,
			"SE": 13,
			"S": 9,
			"SW": 4,
			"NW": 3,
			"X": 8
		},
		{
			"id": 9,
			"name": "Mostly Cloudy Se",
			"description": "Mostly cloudy, wind out of the SE.",
			"N": 8,
			"NE": 13,
			"SE": 14,
			"S": 10,
			"SW": 5,
			"NW": 4,
			"X": 9
		},
		{
			"id": 10,
			"name": "Precipitation SW",
			"description": precipType + ", wind out of the SW.",
			"N": 9,
			"NE": 14,
			"SE": 15,
			"S": 11,
			"SW": 6,
			"NW": 5,
			"X": 10
		},
		{
			"id": 11,
			"name": "Clear NW",
			"description": "Clear, wind out of the NW.",
			"N": 10,
			"NE": 15,
			"SE": 2,
			"S": 7,
			"SW": 18,
			"NW": 6,
			"X": 11
		},
		{
			"id": 12,
			"name": "Clear E",
			"description": "Clear, wind out of the E.",
			"N": 15,
			"NE": 1,
			"SE": 16,
			"S": 13,
			"SW": 8,
			"NW": 7,
			"X": 12
		},
		{
			"id": 13,
			"name": "Partly Cloudy E",
			"description": "Partly cloudy, wind out of the E.",
			"N": 12,
			"NE": 16,
			"SE": 17,
			"S": 14,
			"SW": 9,
			"NW": 8,
			"X": 13
		},
		{
			"id": 14,
			"name": "Mostly Cloudy SE",
			"description": "Mostly cloudy, wind out of the SE.",
			"N": 13,
			"NE": 17,
			"SE": 18,
			"S": 15,
			"SW": 10,
			"NW": 9,
			"X": 14
		},
		{
			"id": 15,
			"name": "Precipitation W",
			"description": precipType + ", wind out of the W.",
			"N": 14,
			"NE": 18,
			"SE": 1,
			"S": 12,
			"SW": 11,
			"NW": 10,
			"X": 15
		},
		{
			"id": 16,
			"name": "Partly Cloudy SE",
			"description": "Partly cloudy, wind out of the SE.",
			"N": 18,
			"NE": 2,
			"SE": 7,
			"S": 17,
			"SW": 13,
			"NW": 12,
			"X": 16
		},
		{
			"id": 17,
			"name": "Mostly Cloudy S",
			"description": "Mostly cloudy, wind out of the S.",
			"N": 16,
			"NE": 6,
			"SE": 3,
			"S": 18,
			"SW": 14,
			"NW": 13,
			"X": 17
		},
		{
			"id": 18,
			"name": "Precipitation W",
			"description": precipType + ", wind out of the W.",
			"N": 17,
			"NE": 11,
			"SE": 0,
			"S": 16,
			"SW": 15,
			"NW": 14,
			"X": 18
		}
	]

	generateWx(wxResults);
}

// Generate weather based on previous day's weather
async function generateWx(wxResults) {

	// Get previous day, month, year in correct format
	var currentDay = SimpleCalendar.api.currentDateTime().day;
	var currentMonth = SimpleCalendar.api.currentDateTime().month;
	var currentYear = SimpleCalendar.api.currentDateTime().year;
	
	var currentTimestamp = SimpleCalendar.api.dateToTimestamp({});
	var timeInterval = SimpleCalendar.api.timestampPlusInterval(0, {day: 1});
	var previousTimestamp = currentTimestamp - timeInterval;
	
	var previousWxDay = SimpleCalendar.api.timestampToDate(previousTimestamp).day;
	var previousWxMonth = SimpleCalendar.api.timestampToDate(previousTimestamp).month;
	var previousWxYear = SimpleCalendar.api.timestampToDate(previousTimestamp).year;

	// Get hex flower result from previous day
	const previousDayNotes = SimpleCalendar.api.getNotesForDay(previousWxYear, previousWxMonth, previousWxDay);

	for (let i = 0; i < previousDayNotes.length; i++) {
		if (previousDayNotes[i].flags["foundryvtt-simple-calendar"].noteData.categories.includes('Weather')) {
			var previousWxNote = previousDayNotes[i];
		}
	}

	let previousWxHexId = "7";
	
	if (previousWxNote) {
		let previousWxContent = previousWxNote.pages.contents[0].text.content;
		previousWxHexId = previousWxContent.replace(/<[^>]+>/g, '');
	}
	console.log(`AUTOMATIC WX NOTES | The previous weather hex was ${previousWxHexId} (${wxResults[previousWxHexId].name}).`);

	// Roll for current day weather results based on previous day
	let r = new Roll("1d8 + 1d6");

	await r.evaluate();
	console.log(`AUTOMATIC WX NOTES | The daily weather roll is ${r.total} (${r.result}).`);

	if (r.total == 2 || r.total == 14) {
		var newWxHexId = wxResults[previousWxHexId].N;
	} else if (r.total <= 4) {
		var newWxHexId = wxResults[previousWxHexId].NE;
	} else if (r.total <= 6) {
		var newWxHexId = wxResults[previousWxHexId].SE;
	} else if (r.total <= 8) {
		var newWxHexId = wxResults[previousWxHexId].S;
	} else if (r.total == 9) {
		var newWxHexId = wxResults[previousWxHexId].X;
	} else if (r.total <= 11) {
		var newWxHexId = wxResults[previousWxHexId].SW;
	} else {
		var newWxHexId = wxResults[previousWxHexId].NW;
	}
	
	console.log(`AUTOMATIC WX NOTES | The new weather hex is ${newWxHexId} (${wxResults[newWxHexId].name}).`);
	
	// Roll for severe conditions. 1-in-6 chance.
	let s = new Roll("1d6");

	await s.evaluate();
	
	if (newWxHexId == 1) {
		
		// Create calendar journal entry with weird weather results and add reminder for referee
		const newWeatherNote = await SimpleCalendar.api.addNote(wxResults[newWxHexId].description,wxResults[newWxHexId].id, {year: currentYear, month: currentMonth, day: currentDay, hour: 0, minute: 0, seconds: 0}, {year: currentYear, month: currentMonth, day: currentDay, hour: 0, minute: 0, seconds: 0}, true, SimpleCalendar.api.NoteRepeat.Never, ['Weather'],undefined,null,undefined,[game.users.current.id]);		
	} else if (s.total == 1) {
		
		console.log(`AUTOMATIC WX NOTES | The daily weather is severe!`);
		
		// Check for precipitation on current day weather
		if (newWxHexId == 2 || newWxHexId == 6 || newWxHexId == 10 || newWxHexId == 15 || newWxHexId == 18) {
			var severeSuffix = "Severe Precipitation";
		} else {
			var severeSuffix = "Severe Weather";
		}
		
		// Determine season
		var currentSeason = SimpleCalendar.api.getCurrentSeason();
		
		// Roll on appropriate severe weather table
		let severeWxTable = game.tables.find(t => t.name === `${currentSeason.name} ${severeSuffix}`);
		
		let severeWxResults = await severeWxTable.draw({displayChat: false});
		
		// Create calendar journal entry with severe weather results and add reminder for referee
		const newWeatherNote = await SimpleCalendar.api.addNote(severeWxResults.results[0].data.text,wxResults[newWxHexId].id, {year: currentYear, month: currentMonth, day: currentDay, hour: 0, minute: 0, seconds: 0}, {year: currentYear, month: currentMonth, day: currentDay, hour: 0, minute: 0, seconds: 0}, true, SimpleCalendar.api.NoteRepeat.Never, ['Weather'],undefined,null,undefined,[game.users.current.id]);	
	} else {
	
		// Create calendar journal entry with current day weather results
		const newWeatherNote = await SimpleCalendar.api.addNote(wxResults[newWxHexId].description,wxResults[newWxHexId].id, {year: currentYear, month: currentMonth, day: currentDay, hour: 0, minute: 0, seconds: 0}, {year: currentYear, month: currentMonth, day: currentDay, hour: 0, minute: 0, seconds: 0}, true, SimpleCalendar.api.NoteRepeat.Never, ['Weather']);
	}
}