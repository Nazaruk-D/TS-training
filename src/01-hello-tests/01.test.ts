import {splitIntoWords, sum, mult} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    //action
    const result1 = sum(a, b);
    const result2 = sum(a, c);

    //expert result
    expect(result1).toBe(3);
    expect(result2).toBe(4);
})

test('multiply should be correct', () => {
    //action
    const result1 = mult(a, b);
    const result2 = mult(b, c);

    //expert result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('splitting into worlds should be correct', () => {
    //data
    const sent1 = "Hello my friend";
    const sent2 = "JS - the best programming language";
    //action
    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    //expert result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friend");

    expect(result2.length).toBe(6);
    expect(result2[0]).toBe("js");
    expect(result2[2]).toBe("the");
    expect(result2[3]).toBe("best");
})