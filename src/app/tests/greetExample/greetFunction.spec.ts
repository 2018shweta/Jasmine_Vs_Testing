import { greet } from "./greetfunction";


describe('greet function',()=>{
    it('greet by name',()=>{
        const expectedName="testing_ism";
        const result= greet(expectedName);
        expect(result).toContain(expectedName);
    });
});