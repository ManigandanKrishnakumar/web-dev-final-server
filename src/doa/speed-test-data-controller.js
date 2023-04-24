const { ERR_MESSAGES } = require('../constants/app-constants');
const { QUERIES } = require('../constants/queries');
const { SpeedTest } = require('../Interfaces/AppInterfaces');
const { ResponseObject } = require('../Interfaces/ResponseObjects');
const { executeQuery } = require('../utils/db-utils');

/**
 * This method creates a user with Normal User role.
 * @param {SpeedTest} speedTest
 */
const saveTest = async (speedTest) => {
    const responseObject = new ResponseObject();
    try {
        const result = await executeQuery(QUERIES.SPEED_TEST.SAVE_TEST, [
            speedTest.user_name,
            speedTest.download,
            speedTest.hostname,
            speedTest.ip_address,
            speedTest.jitter,
            speedTest.latency,
            speedTest.maxDownload,
            speedTest.maxUpload,
            speedTest.testDate,
            speedTest.testServer,
            speedTest.upload,
            speedTest.isp,
            speedTest.address,
        ]);
        responseObject.isSuccess = true;
        return responseObject;
    } catch (e) {
        responseObject.isSuccess = false;
        responseObject.message = ERR_MESSAGES.GENERAL.ERR_MSG;
        return responseObject;
    }
};

const fetchTests = async (username) => {
    const responseObject = new ResponseObject();
    try {
        const result = await executeQuery(QUERIES.SPEED_TEST.FETCH_TESTS, [
            username,
        ]);
        responseObject.isSuccess = true;
        responseObject.payload = result;
        return responseObject;
    } catch (e) {
        responseObject.isSuccess = false;
        responseObject.message = ERR_MESSAGES.GENERAL.ERR_MSG;
        return responseObject;
    }
};

const deleteTests = async (username) => {
    const responseObject = new ResponseObject();
    try {
        const result = await executeQuery(QUERIES.SPEED_TEST.DELETE_TESTS, [
            username,
        ]);
        responseObject.isSuccess = true;
        responseObject.payload = result;
        return responseObject;
    } catch (e) {
        responseObject.isSuccess = false;
        responseObject.message = ERR_MESSAGES.GENERAL.ERR_MSG;
        return responseObject;
    }
};

module.exports = {
    saveTest,
    fetchTests,
    deleteTests,
};
