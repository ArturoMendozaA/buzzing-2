const Reader = require("./../utils/Reader");
class ExplorerService{
    
    static filterByMission(explorers, mission){

        const explorersInNode = Reader.readJsonFile(explorers).filter((explorer) => explorer.mission == mission);
        return explorersInNode;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const numEplorersInNode = ExplorerService.filterByMission(explorers, mission);
        return numEplorersInNode;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorerUsername = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        const githubUsernameByMission = explorerUsername.map((explorer) => explorer.githubUsername);
        return githubUsernameByMission;
    }
}
module.exports = ExplorerService;