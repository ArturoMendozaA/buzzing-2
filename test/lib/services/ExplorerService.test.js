const ExplorerService = require("./../../../app/lib/services/ExplorerService");

describe("Test for ExplorerService", () => {
    test("1) filter by mission", () => {
        const explorers = ("explorers-copy.json");
        const mission = ("node");
        const explorersInNode = ExplorerService.filterByMission(explorers,mission);
        expect(explorersInNode.length).toBe(10);
    });
    test("2) Returns the number of explorers",() => {
        const explorers = ("explorers-copy.json");
        const mission = ("node");
        const numExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        expect(numExplorersInNode.length).toBe(10);
    });
    test("3) Test if it returns an expected name", () => {
        const explorers = ("explorers-copy.json");
        const mission = ("node");
        const nameExplorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        expect(nameExplorersInNode)
            .toEqual(expect.arrayContaining(["ajolonauta1"])
            );
    });
});