function saturdayFun(val="roller-skate") {
	return `This Saturday, I want to ${val}!`;
} 

function mondayWork(val = 'go to the office') {
	return `This Monday, I will ${val}.`;
}

function wrapAdjective(adjective) {
	return function (statement) {
		return `You are ${adjective}${statement}${adjective}!`
	}
}