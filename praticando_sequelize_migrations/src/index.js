const CarRepository = require('./repositories/CarRepositories')

async function main() {
    const carRepository = new CarRepository()

    const car = {
        model: 'Tracker',
        company_id: 6,
        year: 2020,
        color: 'Branco'
    }

    await carRepository.add(car)

    // const cars = await carRepository.selectAll()

    // console.log(cars[0].dataValues)
}

main()
