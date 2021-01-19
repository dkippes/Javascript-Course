//Las etiquetas template no se renderizan en el dom - Es para hacer un modelo a seguir donde se le ponen objetos u estructuras
const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnologia",
            img: "https://placeimg.com/200/200/tech"
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals"
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch"
        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people"
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature"
        }
    ]
    
    cardContent.forEach(el => {
        $template.querySelector("img").setAttribute("src", el.img);
        $template.querySelector("img").setAttribute("alt", el.title);
        $template.querySelector("figcaption").textContent = el.title;

        //Cloneo el template - se le pasa un boleano para copiar toda la estructura
        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    })

    $cards.appendChild($fragment);
    