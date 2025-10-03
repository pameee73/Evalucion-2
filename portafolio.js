console.log("hola");

const trabajos = [
    {
        title: "Tugas",
        category: "Textil",
        imagen: "img/tugas.png",
        description: "Este proyecto fue desarrollado en el marco del Taller de Conceptualización y Problematización y consistió en la creación de un álbum de stickers",
    },

      {
        title: "Igual a Jesús",
        category: "Textil",
        imagen: "img/igual a jesus.png",
        description: "Gráfico",
    },
    {
        title: "Chicas pesadas",
        category: "Editorial",
        imagen: "img/album.png",
        description: "Editorial",
    },
    {
        title: "Ironman LEGO",
        category: "Modelado 3d",
        imagen: "img/ironman lego.jpg",
        description: "Editorial",
    },
    {
        title: "Turi",
        category: "Gráfico",
        imagen: "img/turi.jpeg",
        description: "Editorial",
    },
    {
        title: "Turi",
        category: "Web",
        imagen: "img/sss.png",
        description: "Editorial",
    },

 {
        title: "Turi",
        category: "Render",
        imagen: "img/image 19.png",
        description: "Editorial",
    },
    {
        title: "Turi",
        category: "Render",
        imagen: "img/turi1.jpeg",
        description: "Editorial",
    },



];


const galleryGrid = document.querySelector(".gallery-grid");

trabajos.forEach(trabajo => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    item.innerHTML = `
        <img src="${trabajo.imagen}" alt="${trabajo.title}">
        <div class="gallery-overlay">
            <h3>${trabajo.title}</h3>
            <p>${trabajo.category}</p>
        </div>
    `;

    galleryGrid.appendChild(item);
});