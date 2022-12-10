AFRAME.registerComponent("comics-posters", {
  init: function() {
    this.postersContainer = this.el;
    this.posters();
  },

  posters: function() {
    const postersRef = [
      {
        id: "superman",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkVrhrfUJ4K0zjw90_7RiZx80eifMhCY5jow&usqp=CAU"
      },
      {
        id: "spiderman",
        url: "https://i5.walmartimages.com/asr/1578c3d3-1af4-470d-a2b5-588040098468_1.f2fb6c1f24bbeac5fe116421bb6ccf82.jpeg"
      },

      {
        id: "venom",
        url: "https://c8.alamy.com/comp/2GFGDMX/venom-let-there-be-carnage-aka-venom-2-poster-from-left-woody-harrelson-as-carnage-tom-hardy-as-venom-2021-sony-pictures-releasing-marvel-entertainment-courtesy-everett-collection-2GFGDMX.jpg"
      },
      {
        id: "blackAdam",
        url: "https://media.forbiddenplanet.com/products/4d/5a/29ea7ca0d121011411f39d710d00d7d48267.jpg"
      }
    ];
    let prevoiusXPosition = -60;

    for (var item of postersRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

 
      const borderEl = this.createBorder(position, item.id);


      const poster = this.createPoster(item);
      borderEl.appendChild(poster);

      this.postersContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 40
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#fff" });
    entityEl.setAttribute("cursor-listener", {});
    return entityEl;
  },
  createPoster: function(item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    });

    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  }
});
