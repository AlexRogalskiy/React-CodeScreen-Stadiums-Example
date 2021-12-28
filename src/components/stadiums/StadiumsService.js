
class StadiumsService {

    /**
     * @param country the name of the country we are retrieving stadium info for.
     * @returns a list of data about stadiums in the given country.
     */
    getStadiumData(country) {
        //TODO Implement
    }

}

StadiumsService.stadiumsEndpointURL = 'https://app.codescreen.com/api/assessments/stadiums';

// Your API token. Needed to successfully authenticate when calling the stadiums endpoint.
// This needs to be included in the Authorization header (using the Bearer authentication scheme) in the request you send to the stadiums endpoint.
StadiumsService.apiToken = '8c5996d5-fb89-46c9-8821-7063cfbc18b1';

module.exports.StadiumsService = StadiumsService;
