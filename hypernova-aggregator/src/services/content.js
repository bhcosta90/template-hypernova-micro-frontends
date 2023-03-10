
const axios = require('axios')

module.exports.getContent = () => {
  return axios.post('http://0.0.0.0:3032/batch', {
    content: {
      name: 'App',
      data: {
        title: 'Products',
        items: [
          {
            title: 'Product 1',
            image: 'https://via.placeholder.com/150'
          }
        ]
      }
    }
  })
    .then(({ data }) => {
      return data.results
    })
}
