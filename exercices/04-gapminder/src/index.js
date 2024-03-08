import {select} from "d3-selection";

// Pour importer les données vous pouvez soit importer directement les csv (@rollup/plugin-dsv), soit utiliser la méthode csv de d3-fetch

// @rollup/plugin-dsv
import populationData from "../data/population_total.csv";
import lifeData from "../data/life_expectancy_years.csv";
import incomeData from "../data/income_per_person_gdppercapita_ppp_inflation_adjusted.csv";


const width = "100%";
const height = 600;
const marginBottom = 70;

const monSvg = select("body")
    .append('svg')
    .attr("width", width)
    .attr("height", height);

console.log(incomeData)

let result1 = populationData.map((pays) => {
    let land = pays.country;

    let lifeDataRow = lifeData.find((e) => e.country === land);
    let pib = lifeDataRow ? lifeDataRow[2021] : 10;

    let incomeDataRow = incomeData.find((e) => e.country === land);
    let income = incomeDataRow ? incomeDataRow[2021] : 1000;

    let new_object = {
        "pays" : land,
        "pib": pib,
        "esperance": income,
        "population": pays[2021]
    }
    console.log(new_object);
    return new_object;
})


const bubbleChart5 = monSvg
    .selectAll("circle")
    .data(result1)
    .join(enter => enter
      .append("cicle")
      .attr("cx", (d, i) => (d.pib)/10)
      .attr("cy", (d, i) => (d.esperance)/1000)
      .attr("r", (d, i) => d.population));