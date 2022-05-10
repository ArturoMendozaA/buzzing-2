const Reader = require("./../../../app/lib/utils/Reader.js");
describe("Test for Reader", () => {
    test("Check if theres some expected objects inside the array ", () => {
        const explorersObject = Reader.readJsonFile ("explorers-copy.json");
        expect(explorersObject).toEqual(expect.arrayContaining([expect.objectContaining({"mission":"node"})
        ])
        );
    });
});