describe("helloWorld", () =>{
    it ("returns hello world", ()=>{
        var actual = hello();
        expect(actual).toBe("hello world");
    });
});

describe("suma", () =>{
    it ("returns sum 5 si 3=8", ()=>{
        var actual = hello();
        expect(numar(5,3)).toEqual(8);
    });
});
describe("suma reale", () =>{
    it ("returns sum 1.4 si 0.7 = 2.1", ()=>{
        var actual = hello();
        expect(numar(1.4,0.7)).toEqual(2.1);
    });
});
describe("inmultire", () =>{
    it ("returns 1 si 2  = 2", ()=>{
        var actual = hello();
        expect(inmultire(1,2 )).toEqual(2);
    });
});