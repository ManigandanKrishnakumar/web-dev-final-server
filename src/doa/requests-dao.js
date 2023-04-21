const { ERR_MESSAGES } = require('../constants/app-constants');
const { QUERIES } = require('../constants/queries');
const { ResponseObject } = require('../Interfaces/ResponseObjects');
const { executeQuery } = require('../utils/db-utils');

const fetchAllRequests = async () => {
    const responseObject = new ResponseObject();

    try {
        const result = await executeQuery(QUERIES.REQUESTS.FETCH_ALL);
        responseObject.isSuccess = true;
        responseObject.payload = result;
        return responseObject;
    } catch (error) {
        console.log(error);
        responseObject.isSuccess = false;
        responseObject.message = ERR_MESSAGES.GENERAL.ERR_MSG;
        return responseObject;
    }
};

module.exports = {
    fetchAllRequests,
};
