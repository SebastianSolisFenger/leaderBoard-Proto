import { sendScoreData } from './modules/scores.js';
import { loadMapScores, functionScoreFromUser } from './modules/UI-changes.js';
import './style.css';

const urlAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vHgjZguZh1mV5jrt1yYv/scores';
const refreshBtn = document.querySelector('.refresh-btn');
const addScoreForm = document.getElementById('add-score-form');

window.addEventListener('load', () => loadMapScores(urlAPI));
refreshBtn.addEventListener('click', () => loadMapScores(urlAPI));

addScoreForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  await sendScoreData(urlAPI, functionScoreFromUser());
  loadMapScores(urlAPI);
  addScoreForm.reset();
});
