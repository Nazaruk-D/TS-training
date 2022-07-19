function increaseAge (u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
}

test ('big test', ()=>{

    var user: UserType = {
        name: "Dima",
        age: 30
    }

    increaseAge (user);

    expect(user.age).toBe(31)

    const superman = user;
    superman.age = 1000;

    expect(user.age).toBe(1000)

})