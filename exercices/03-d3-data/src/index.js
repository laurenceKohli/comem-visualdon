import { json } from "d3-fetch"
import {select} from "d3-selection";

const data = Promise.all([json("https://jsonplaceholder.typicode.com/posts"),
json("https://jsonplaceholder.typicode.com/users")
])
    .then(([posts, users]) => {
        // console.log(users)
        // return {
        //     "nom_utilisateur" : users.name,
        //     "ville" : users.city,
        //     "nom_compagnie" : users.company.name,
        //     "titre_post" : posts.title
        // }

        // 1. Nouvel objet
        let result1 = users.forEach(usr => {
            let posts_filtered = posts.filter(post => post.userId === usr.id)

            console.log("Posts filtrés", posts_filtered);

            let new_object = {
                "nom_utilisateur": usr.name,
                "ville": usr.address.city,
                "titres_posts": posts_filtered.map(post => post.title),
            }
            console.log(new_object);
            return new_object;
        });

        // 2. Nombre de posts par user
        let result2 = users.map(usr => {
            let posts_filtered = posts.filter(post => post.userId === usr.id)
            let new_object = {
                "userId": usr.id,
                "userName": usr.name,
                "nPosts": posts_filtered.length
            }
            return new_object;
        })
        console.log("Nouvel objet", result2);
        
        const width = "100%";
        const height = 600;
        const marginBottom = 70;
        
        // Créons un élément SVG avec avec la largeur et la longuer fixées ci-dessus
        const monSvg = select("body")
            .append('svg')
            .attr("width", width)
            .attr("height", height);
        
        
        const barChart = monSvg
            .selectAll("rect")
            .data(result2)
            .join(enter => enter
              .append("rect")
              .attr("x", (d, i) => (i + 1) * 120)
              .attr("y", d => height - d.nPosts * 10 - marginBottom)
              .attr("width", 80)
              .attr("height", d => d.nPosts * 10));
          
          // Rajoutons les étiquettes des partenaires
          const labels = monSvg.selectAll(".partners")
            .data(result2)
            .join(enter => enter.append("text")
              .attr("class", "partners")
              .attr("x", (d, i) => (i + 1) * 120 + 40) 
              .attr("y", d => height - marginBottom + 20 )
              .style("font-size", '12px')
              .text(d => d.userId)
              .attr("text-anchor", "middle")) 

    })
    

