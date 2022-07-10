test("", () => {
    let props = {
        name: "Dima",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        adress: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }


    // const age = man.age;
    // const lessons = man.lessons;

    const {age, lessons} = props;
    // const title = props.adress.street.title // если нужно взять из сложного массива данные
    const {title} = props.adress.street


    const a = props.age;
    const l = props.lessons;


    expect(age).toBe(32);
    expect(lessons.length).toBe(2)

    expect(a).toBe(32);
    expect(l.length).toBe(2)

    expect(title).toBe("Nezavisimosti street")

})