import {select} from "d3-selection";

// C'est ici que vous allez écrire les premières lignes avec d3.js!
select("body")
    .append("svg")
    .attr("width", 1000)
    .attr("height", 400)
    .attr("class", "monSVG");

const cercle1 = select(".monSVG")
    .append("g")
    .attr("id", "cercle1")
    .append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 40);

select("#cercle1")
    .append("text")
    .text("1")
    .attr("x", 50)
    .attr("y", 110)

const cercle2 = select(".monSVG")
    .append("g")
    .attr("id", "cercle2")
    .append("circle")
    .attr("cx", 150)
    .attr("cy", 150)
    .attr("r", 40);

select("#cercle2")
    .append("text")
    .text("2")
    .attr("x", 150)
    .attr("y", 210)

const cercle3 = select(".monSVG")
    .append("g")
    .attr("id", "cercle3")
    .append("circle")
    .attr("cx", 250)
    .attr("cy", 250)
    .attr("r", 40);

select("#cercle3")
    .append("text")
    .text("3")
    .attr("x", 250)
    .attr("y", 310)

select("#cercle2").attr("fill", "green");

//translations
select('#cercle1').attr("transform", "translate(100, 0)");
select('#cercle2').attr("transform", "translate(100, 0)");

//au clic les alligner
const test = select('#cercle3').on("click", () => {
    select(this).attr("fill", "green");
    //select('#cercle1').attr("cx", 250);
    //select('#cercle2').attr("cx", 250);
});

//graphe en batons
const data = [200, 50, 250, 80, 150];

select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 400)
    .attr("class", "baton")
    .selectAll("rect")
    .data(data)
    .join(enter => enter.append("rect")
        .attr("x", (d, i) => (i *25)) //déplacement horizontal avec espace entre eux
        .attr("y", d => 300 - d) //aligner en bas
        .attr("width", 20)
        .attr("height", d => d)) //hauteur selon valeur