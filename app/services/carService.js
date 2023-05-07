const carRepository = require("../repositories/carRepository");
const cloudinary = require('cloudinary');

module.exports = {
  create(request) {
    const {name,size, price, image } = request.body;
    const { id } = request.user;
    return carRepository.create({name,size, price, image, createdBy: id});
  },

  update(id,requestBody) {
    return carRepository.update(id, requestBody);
  },

  delete(id) {    
    return carRepository.delete({where:{id}});
  },

  async list() {
    try {
      const cars = await carRepository.findAll();
      const carCount = await carRepository.getTotalCars();

      return {
        data: cars,
        count: carCount,
      };
    } catch (err) {
      throw err;
    }
  },

  get(id) {
    return carRepository.find(id);
  },
};
