export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrei Ivanov", age: 33},
    {name: "Alex Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

const dimychTranformator = (man: ManType) => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
})


export const Devs = people.map(dimychTranformator);
export const Devs2 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
}))

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome!`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome!`)
}
