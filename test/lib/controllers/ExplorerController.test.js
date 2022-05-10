const ExplorerController = require("./../../../app/lib/controllers/ExplorerController");
describe("Test for the ExplorerController", () =>{
    test("1) get list of explorers by mission", () =>{

        const mission = ("node");
        const explorerInNode = ExplorerController.getExplorersByMission(mission);
        expect(explorerInNode.length).toBe(10);
    });
    test("2) Get explorers name by mission", () => {
        const mission =("node");
        const explorerNames = ExplorerController.getExplorersUsernamesByMission(mission);
        expect(explorerNames.length).toBe(10);
    });
    test("3) Get explorers amount by mission", () => {
        const mission = ("node");
        const explorersAmount = ExplorerController.getExplorersAmountByMission(mission);
        expect(explorersAmount).toBe(10);
    });
});