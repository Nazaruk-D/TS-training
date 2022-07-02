import {StudentType} from "../02/02";
import {addSkill} from "./03";
import {waitForElementToBeRemoved} from "@testing-library/react";


let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Dima",
        age: 30,
        isActive: true,
        address: {
        streetTitle: "Makaenka",
            city: {
            title: "Minsk",
                countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
};
})

test ("New tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, "JS");
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();

})