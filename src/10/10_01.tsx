export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}

export function makeHairStyle (u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power}
    // copy.hair = u.hair / power;
    return copy
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBookType = {
    books: Array<string>
}


export function moveUser (u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, city}}
        // copy.address = {...copy.address, city: city}
}


export function updateUserLaptop (u: UserWithLaptopType, title: string) {
    return {...u, laptop: {...u.laptop, title}}
    // copy.address = {...copy.address, city: city}
}

export function moveUserToOtheHouse (u: UserWithLaptopType & UserWithBookType, house: number) {
    return {...u, address: {...u.address, house}}
    // copy.address = {...copy.address, city: city}
}

export function addNewBooksToUser (u: UserWithLaptopType & UserWithBookType, newBook: string) {
    return {...u, books: [...u.books, newBook]}

}