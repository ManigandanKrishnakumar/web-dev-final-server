const { Router } = require('express');
const { ROUTES } = require('../constants/route-constants');
const { authenticateToken } = require('../middlewares/jwtverify');
const { fetchAllRequests } = require('../doa/requests-dao');

const accessRequestRouter = Router();

accessRequestRouter.get(
    ROUTES.ACCESS_REQUESTS.FETCH_ALL,
    authenticateToken,
    async (req, res) => {
        try {
            const result = await fetchAllRequests();
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
    accessRequestRouter,
};
