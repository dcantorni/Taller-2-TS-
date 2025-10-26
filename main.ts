import { Serie } from './serie.js';
import { series } from './dataSerie.js';

let seriesTbody: HTMLElement = document.getElementById('seriesTableBody')!;
const totalSeasonElm: HTMLElement = document.getElementById("total-seasons")!;

renderSeriesInTable(series);
totalSeasonElm.innerHTML = `${getAverageSeasons(series).toFixed(2)}`;

function renderSeriesInTable(seriesList: Serie[]): void {
  console.log('Desplegando series');
  seriesList.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
      <th scope="row">${serie.id}</th>
      <td><a href="${serie.url}">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.season}</td>
    `;
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(seriesList: Serie[]): number {
  if (seriesList.length === 0) return 0;
  let totalSeasons = 0;
  seriesList.forEach((s) => totalSeasons += s.season);
  return totalSeasons / seriesList.length;
}
