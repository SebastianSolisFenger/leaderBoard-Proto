const getAllData = async (urlAPI) => (await fetch(urlAPI)).json();

const sendScoreData = async (urlAPI, score) => (await fetch(urlAPI, score)).json();

export { getAllData, sendScoreData };
