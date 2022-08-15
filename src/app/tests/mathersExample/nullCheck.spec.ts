describe('nullCheck', () => {
    it('should be defined', () => {
        var value = 0;
        expect(value).toBeDefined();
    });
    it('should be undefined', () => {
        var vall;
        expect(vall).toBeUndefined();
    });
    it('should be null', () => {
        var vall = null;
        expect(vall).toBeNull();
    });
});