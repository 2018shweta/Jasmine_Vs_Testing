describe('sequential check',()=>{
    it('example of contain',()=>{
        expect([1,2,3,4]).toContain(3);
    });
    it('example of close to',()=>{
        expect(12.34).toBeCloseTo(12.3,1);
    });
    it('example of match',()=>{
        expect("www.google.com").toMatch(/com/);
    });
});