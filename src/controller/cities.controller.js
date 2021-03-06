import citiesModel from './../models/cities.model';
import beautify from 'json-beautify';

const citiesController = {
    suggestions: (request, response) => {
        if (request === "/suggestions") {
            return response.end(
                JSON.stringify({ "suggestions": [] })
            );
        } else {
            const result = citiesModel.getSuggestions(request);
            if (result && result.suggestions.length > 0) {
                response.writeHead(200, { 'Content-Type': 'text/plain' });
            }
            return response.end(
                beautify(result, null, 2)
            );
        }
    }
};

export default citiesController;