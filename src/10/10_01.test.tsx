import {
    addNewBooksToUser, deleteBook,
    makeHairStyle,
    moveUser,
    moveUserToOtheHouse, updateBook,
    updateUserLaptop,
    UserType,
    UserWithBookType,
    UserWithLaptopType
} from "./10_01";



test ('reference type test', ()=>{

    let user: UserType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        }
    }

    const cutUser = makeHairStyle (user, 2);

    expect(cutUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    // копию, которая создана на 4 строке сделалась только поверхностно, на все остальные вложенные объекты идёт ссылка на старый объект
    expect(cutUser.address).toBe(user.address)

})


test ('change address', ()=>{

    let user: UserWithLaptopType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBool"
        }
    }

    const movedUser = moveUser (user, "Kiev");

   expect(user).not.toBe(movedUser);
   expect(user.address).not.toBe(movedUser.address);
   expect(user.laptop).toBe(movedUser.laptop);
   expect(movedUser.address.city).toBe("Kiev");
})

test ('upgrade laptop to mackBook', ()=>{

    let user: UserWithLaptopType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBool"
        }
    }

    const newLaptopUser = updateUserLaptop (user, "MacBook");

    expect(user).not.toBe(newLaptopUser);
    expect(user.laptop).not.toBe(newLaptopUser.laptop);
    expect(newLaptopUser.laptop.title).toBe("MacBook");
    expect(user.laptop.title).toBe("ZenBool");
})

test ('upgrade laptop', ()=>{

    let user: UserWithLaptopType & UserWithBookType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBool"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCope = moveUserToOtheHouse (user, 99);

    expect(user).not.toBe(userCope);
    expect(user.books).toBe(userCope.books);
    expect(user.laptop).toBe(userCope.laptop);
    expect(user.address).not.toBe(userCope.address);
    expect(userCope.address.house).toBe(99);
})

test ('add new book to user', ()=>{

    let user: UserWithLaptopType & UserWithBookType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBool"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCope = addNewBooksToUser (user, 'ts' );

    expect(user).not.toBe(userCope);
    expect(user.laptop).toBe(userCope.laptop);
    expect(user.address).toBe(userCope.address);
    expect(user.books).not.toBe(userCope.books);
    expect(userCope.address.house).toBe(12);
    expect(userCope.books[4]).toBe('ts');
})

test ('update  js to ts', ()=>{

    let user: UserWithLaptopType & UserWithBookType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBool"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCope = updateBook (user, 'js', 'ts' );

    expect(user).not.toBe(userCope);
    expect(user.laptop).toBe(userCope.laptop);
    expect(user.address).toBe(userCope.address);
    expect(user.books).not.toBe(userCope.books);
    expect(userCope.books[2]).toBe('ts');
})

test ('delete book', ()=>{

    let user: UserWithLaptopType & UserWithBookType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBool"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCope = deleteBook (user, 'js');

    expect(user).not.toBe(userCope);
    expect(user.laptop).toBe(userCope.laptop);
    expect(user.address).toBe(userCope.address);
    expect(user.books).not.toBe(userCope.books);
    expect(userCope.books[2]).toBe('react');
    expect(userCope.books.length).toBe(3);
})