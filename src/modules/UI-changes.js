import { getAll } from './scores.js';

const userInput = document.getElementById('user');
const scoreInput = document.getElementById('score');
const dashboard = document.getElementById('scores-table');

const functionScoreFromUser = () => {
  const scoreObjData = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: userInput.value.trim(),
      score: scoreInput.value.trim(),
    }),
  };
  return scoreObjData;
};

const loadMapScores = async (urlAPI) => {
  const { result } = await getAll(urlAPI);
  dashboard.innerHTML = result
    .sort((a, b) => b.score - a.score)
    .map((score) => `<tr><td>${score.user}: ${score.score}</td></tr>`)
    .join('');
};

export { functionScoreFromUser, loadMapScores };
