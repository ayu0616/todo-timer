/** 日付をフォーマットした文字列を返す
 * yyyy年MM月dd日（EEE曜日） HH時mm分ss秒SSS
 */
export const formatDate = (date: Date, format: string) => {
	format = format.replace(/yyyy/g, date.getFullYear().toString());
	format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
	format = format.replace(/dd/g, ("0" + date.getDate()).slice(-2));
	format = format.replace(/HH/g, ("0" + date.getHours()).slice(-2));
	format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
	format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
	format = format.replace(/SSS/g, ("00" + date.getMilliseconds()).slice(-3));
	const weekdays = "日月火水木金土".split("");
	format = format.replace(/EEE/g, weekdays[date.getDay()]);
	return format;
};

export const createId = () => {
	const dateString = new Date().getTime().toString(16);
	const randString = Math.floor(Math.random() * 10 ** 4).toString(16);
	return dateString + randString;
};

/**先頭に"0"をcount個つける */
export const headZero = (value: string | number, count: number) => {
	const valueString = typeof value === "number" ? value.toString() : value;
	return ("0".repeat(count) + valueString).slice(-count);
};
