var getres = require('../lib')

getres({
  image: {
    src: 'http://127.0.0.1:8080/test/fixtures/twinsen.jpg',
    type: 'image'
  }
}).then(({ image }) => {
  console.log(`image width: ${image.width}, height: ${image.height}`)
}).catch((err) => {
  console.error(err)
})
