const config = require("../shared/config");
const Observable = require("data/observable").Observable;
const ObservableArray = require("data/observable-array").ObservableArray;

function CarsListViewModel() {
    const viewModel = new Observable();

    viewModel.isLoading = false;
    viewModel.cars = new ObservableArray([]);

    viewModel.load = function () {
        this.set("isLoading", true);

        fetch(`${config.apiUrl}Cars`)
            .then(handleErrors)
            .then((response) => response.json())
            .then((data) => {
                data.Result.forEach((car) => {
                    viewModel.cars.push({
                        name: car.Name,
                        id: car.Id,
                        hasAC: car.AC,
                        description: car.Description,
                        seats: car.Seats,
                        luggage: car.Luggage,
                        class: car.Class,
                        doors: car.Doors,
                        price: car.Price,
                        transmission: car.Transmission,
                        imageUrl: car.ImageUrl
                    });
                });

                viewModel.set("isLoading", false);
            });
    };

    viewModel.empty = function () {
        while (this.cars.length) {
            this.cars.pop();
        }
    };

    return viewModel;
}

function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }

    return response;
}

module.exports = CarsListViewModel;
