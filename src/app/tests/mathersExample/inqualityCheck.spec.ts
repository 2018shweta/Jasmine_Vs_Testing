describe('inequality check',()=>{
    var value = 10;
    it('should pass for greater then',()=>{
        expect(value).toBeGreaterThan(8);
    });
    it('should pass for less then',()=>{
        expect(value).toBeLessThan(12);
    });
});