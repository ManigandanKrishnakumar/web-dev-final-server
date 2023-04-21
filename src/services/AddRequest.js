const { QUERIES } = require('../constants/queries');
const { executeQuery } = require('../utils/db-utils');

const addRequest = async ({ timestamp, user }) => {
    try {
        const res = await executeQuery(QUERIES.REQUESTS.INSERT, [
            user,
            new Date(timestamp),
        ]);
        const data = await executeQuery(QUERIES.REQUESTS.FETCH_BY_ID, [
            res.insertId,
        ]);
        return data;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addRequest,
};
