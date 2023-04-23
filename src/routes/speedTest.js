const { Router } = require('express');
const { ROUTES } = require('../constants/route-constants');
const { authenticateToken } = require('../middlewares/jwtverify');
const { SpeedTest } = require('../Interfaces/AppInterfaces');
const { saveTest, fetchTests } = require('../doa/speed-test-data-controller');
const { ResponseObject } = require('../Interfaces/ResponseObjects');
const { ERR_MESSAGES } = require('../constants/app-constants');

const speedTestRouter = Router();

speedTestRouter.post(
    ROUTES.SPEEDTEST.SAVE_TEST,
    authenticateToken,
    async (req, res) => {
        const {
            download,
            hostname,
            ip_address,
            jitter,
            latency,
            maxDownload,
            maxUpload,
            testDate,
            testServer,
            upload,
            isp,
            address,
        } = req.body;
        const speedTest = new SpeedTest(
            req.decodeduserName,
            download,
            hostname,
            ip_address,
            jitter,
            latency,
            maxDownload,
            maxUpload,
            new Date(testDate),
            testServer,
            upload,
            isp,
            address
        );
        try {
            const result = await saveTest(speedTest);
            res.status(200).json(result);
        } catch (error) {
            const result = new ResponseObject(
                false,
                ERR_MESSAGES.GENERAL.INTERNAL_SERVER_ERR
            );
            res.status(500).json(result);
        }
    }
);

speedTestRouter.get(
    ROUTES.SPEEDTEST.FETCH,
    authenticateToken,
    async (req, res) => {
        try {
            const result = await fetchTests(req.decodeduserName);
            res.status(200).json(result);
        } catch (error) {
            const result = new ResponseObject(
                false,
                ERR_MESSAGES.GENERAL.INTERNAL_SERVER_ERR
            );
            res.status(500).json(result);
        }
    }
);

module.exports = {
    speedTestRouter,
};
