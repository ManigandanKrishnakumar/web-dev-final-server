const { Router } = require('express');
const { ROUTES } = require('../constants/route-constants');
const { authenticateToken } = require('../middlewares/jwtverify');
const { fetchAllRequests, deleteRequest } = require('../doa/requests-dao');
const { ResponseObject } = require('../Interfaces/ResponseObjects');
const { ERR_MESSAGES } = require('../constants/app-constants');
const { adminUpdatesUser } = require('../doa/admin-doa');

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

accessRequestRouter.post(
    ROUTES.ACCESS_REQUESTS.DELETE,
    authenticateToken,
    async (req, res) => {
        try {
            if (req.decodeduserRole !== 'Admin') {
                throw new Error('Not Authorized');
            }
            const { id } = req.body;
            const result = await deleteRequest(id);
            res.status(200).json(result);
        } catch (error) {
            if (error.message === 'Not Authorized') {
                const result = new ResponseObject(
                    false,
                    ERR_MESSAGES.GENERAL.AUTHORIZATION_FAILED
                );
                res.status(401).json(result);
            } else {
                const result = new ResponseObject(
                    false,
                    ERR_MESSAGES.GENERAL.INTERNAL_SERVER_ERR
                );
                res.status(500).json(result);
            }
        }
    }
);

accessRequestRouter.post(
    ROUTES.ACCESS_REQUESTS.APPROVE,
    authenticateToken,
    async (req, res) => {
        try {
            const { username, meta_data, id } = req.body;

            await adminUpdatesUser(
                username,
                'Normal-User',
                req.decodeduserRole,
                meta_data
            );
            const result = await deleteRequest(id);

            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            if (error.message === 'Not Authorized') {
                const result = new ResponseObject(
                    false,
                    ERR_MESSAGES.GENERAL.AUTHORIZATION_FAILED
                );
                res.status(401).json(result);
            } else {
                const result = new ResponseObject(
                    false,
                    ERR_MESSAGES.GENERAL.INTERNAL_SERVER_ERR
                );
                res.status(500).json(result);
            }
        }
    }
);

module.exports = {
    accessRequestRouter,
};
