const Dev = require('../models/Dev');

module.exports = {
  async index(request, response) {
    console.log(request.query)

    const techsArray = techs.split(',').map(tech => tech.trim()); 

    return response.json({ oi: true, })
  }
}