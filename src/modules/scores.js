const getAll = async (urlAPI) => (await fetch(urlAPI)).json();

const addScore = async (urlAPI, score) => (await fetch(urlAPI, score)).json();

export { getAll, addScore };
