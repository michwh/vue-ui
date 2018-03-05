const db = require('../config/db.js') 
const listModel = '../schema/list.js'
const NothingLeftDB = db.NothingLeft
const List = NothingLeftDB.import(listModel)

//const id = 1;

const releaseMessage = async function (data) {
  await List.create({
    id: data.id,
    user_name: data.userName,
    avatar: data.avatar,
    price: data.price,
    product_img: data.productImg,
    title: data.title,
    illustration: data.illustration,
    date: data.date,
    contact: data.contact
  })
  return 200
}

module.exports = {
  releaseMessage
};