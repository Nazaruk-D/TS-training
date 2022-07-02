import {CityType} from "./02_02";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buildedAt: 2012, reapired: false,
            address: {
                number: 100, street: {title: "White street"}
            }
        },
            {
                buildedAt: 2008, reapired: false,
                address: {
                    number: 100, street: {title: "Happy street"}
                }
            },
            {
                buildedAt: 2020, reapired: false,
                address: {
                    number: 101, street: {title: "Happy street"}
                }
            }
        ],
        governmentBuildings: [],
        citizensNumber: 1000000
    }
})

test ("Test city should be contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");
    expect(city.houses[2].reapired).toBe(false);



})

