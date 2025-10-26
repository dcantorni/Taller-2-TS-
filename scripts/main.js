import { series } from './dataSerie.js';
let seriesTbody = document.getElementById('seriesTableBody');
const totalSeasonElm = document.getElementById("total-seasons");
const cardContainer = document.getElementById("serie-detail");
renderSeriesInTable(series);
totalSeasonElm.innerHTML = `${getAverageSeasons(series).toFixed(2)}`;
function renderSeriesInTable(seriesList) {
    console.log('Desplegando series');
    seriesList.forEach((serie) => {
        var _a;
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
      <th scope="row">${serie.id}</th>
      <td><a href="#" class="serie-link" data-id="${serie.id}">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.season}</td>
    `;
        (_a = trElement.querySelector(".serie-link")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => {
            event.preventDefault();
            showSerieDetail(serie);
        });
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(seriesList) {
    if (seriesList.length === 0)
        return 0;
    let totalSeasons = 0;
    seriesList.forEach((s) => totalSeasons += s.season);
    return totalSeasons / seriesList.length;
}
function showSerieDetail(serie) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = `
    <div class="card shadow-sm" style="width: 20rem;">
      <img src="${serie.imageUrl}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.url}" target="_blank" class="text-info text-decoration-none">
          ${serie.url}
        </a>
      </div>
    </div>
  `;
}
