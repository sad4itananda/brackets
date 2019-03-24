module.exports = function check(str, bracketsConfig) {
	let arrFromStr = str.split('');
	let resultBoolean;

	const checkOverlap = (arr, config) => {
		if (arr == 0) return true;
		for (let i = 0; i < arr.length - 1; i++) {
			for (let j = 0; j < config.length; j++) {
				if	((arr[i] === config[j][0]) && (arr[i + 1] === config[j][1])) {
					arr.splice(i, 2);
					return;
				} 
			}	
		} return false;
	};
	
	while (resultBoolean == undefined) {
		resultBoolean = checkOverlap(arrFromStr, bracketsConfig);
	};
	return resultBoolean;
};
