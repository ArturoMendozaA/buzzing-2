const FizzbuzzService = require("../../../app/lib/services/FizzbuzzService");
describe("test for Fizzbuzz Service", () => {
    test("Validacion score 1",() => {
        const explorer1 = {name: "Explorer1", score: 1};
        FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorer1.trick).toBe(1);
    });
    test("Validation score 3", ()=>{
        const explorer3 = {name: "Explorer3", score: 3};
        FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorer3.trick).toBe("FIZZ");
    });
    test("Validation for score 5", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorer5.trick).toBe("BUZZ");
    });
    test("Validation for score 15", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorer15.trick).toBe("FIZZBUZZ");
    });
    
});
