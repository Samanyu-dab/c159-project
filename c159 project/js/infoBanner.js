AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      superman: {
        banner_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkVrhrfUJ4K0zjw90_7RiZx80eifMhCY5jow&usqp=CAU",
        title: "Superman",
        released_year: "1983",
        description:
          "Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939.",
      },
      spiderman: {
        banner_url: "https://i5.walmartimages.com/asr/1578c3d3-1af4-470d-a2b5-588040098468_1.f2fb6c1f24bbeac5fe116421bb6ccf82.jpeg",
        title: "Spiderman",
        released_year: "1962",
        description:
          "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.",
      },
      venom: {
        banner_url: "https://c8.alamy.com/comp/2GFGDMX/venom-let-there-be-carnage-aka-venom-2-poster-from-left-woody-harrelson-as-carnage-tom-hardy-as-venom-2021-sony-pictures-releasing-marvel-entertainment-courtesy-everett-collection-2GFGDMX.jpg",
        title: "Venom",
        released_year: "1993  ",
        description:
          "Venom is a character appearing in American comic books published by Marvel Comics. The character is a sentient alien symbiote with an amorphous, liquid-like form, who survives by bonding with a host, usually human. This dual-life form receives enhanced powers and usually refers to itself as Venom",
      },
      blackAdam: {
        banner_url: "https://media.forbiddenplanet.com/products/4d/5a/29ea7ca0d121011411f39d710d00d7d48267.jpg",
        title: "Black Adam",
        released_year: "1945",
        description:
          "Black Adam appears as a featured character in DC's weekly 52 comic book. Depicted as the violent protector of the nation of Kahndaq, Adam kills several supervillains in public and on television to demonstrate his views. As a result, he is distrusted by the superhuman community.",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
