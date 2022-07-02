import {createGreetingMessage, ManType} from "./05";

let people: Array<ManType> = []

beforeEach( () => {
    people = [
        {name: "Andrei Ivanov", age: 33},
        {name: "Alex Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18}
    ]
})


test("should get array from greatting messages", () => {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrei. Welcome!")
    expect(messages[1]).toBe("Hello Alex. Welcome!")
    expect(messages[2]).toBe("Hello Dmitry. Welcome!")
})