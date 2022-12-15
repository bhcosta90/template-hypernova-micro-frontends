/* eslint-disable quotes */

const axios = require("axios");

module.exports.getProductView = () => {
  return axios
    .post("http://0.0.0.0:3032/batch", {
      content: {
        name: "App",
        data: {
          name: "Bruno Costa",
          brand: "My Brand",
          price: "R$ 150,00",
          finalPrice: "R$ 120,00",
          eco: true,
          cart: true,
          wish: true,
          discount: "-38%",
          free_shipping: true,
          sponsor: true,
          black: true,
          urlImage:
            "https://static.dafiti.com.br/p/Aura-Vestido-Aura-Faixa-Babado-Azul-9387-5557586-1-zoom.jpg",
        },
      },
    })
    .then(({ data }) => {
      return data.results.content;
    });
};
