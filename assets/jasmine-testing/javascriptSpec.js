describe('mastermind', function() {
    describe('Adding stats', function() {
        it('Should return 35', function() {
            expect(addingTotalStats(15, 20)).toBe(35);
        });
        it('Should return 50', function() {
            expect(addingTotalStats(21, 29)).toBe(50);
        })
    });
});