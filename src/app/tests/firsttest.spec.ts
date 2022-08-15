beforeAll(()=>{
    console.log("before");
});

afterAll(()=>{
    console.log("after");
});
afterEach(()=>{
    console.log("afterEach");
});

describe('First Test Suite',()=>{
    it("First Test",()=>{
        console.log("first test");
        expect(1+1).toEqual(2);
    });
    it("Second Test",()=>{
        console.log("second test");
        expect(1-1).toEqual(0);
    })
})