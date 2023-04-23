const ROUTES = {
    BASE: '/api',
    AUTH: {
        BASE: '/auth',
        SIGN_UP: '/sign-up',
        SIGN_IN: '/sign-in',
        GET_CHALLENGE: '/challenge',
        LOG_OUT: '/logout',
    },
    USER: {
        BASE: '/user',
        CREATE_USER: '/create-user',
        CHECK_USERNAME: '/check-username',
        UPDATE_USER: '/update-user',
        DELETE_USER: '/delete-user',
        SEARCH_USER: '/search-user',
        LOGGED_IN: '/logged-in',
        LIST_USERS: '/list-users',
        USER_PUBLIC_INFO: '/public-info',
    },
    ADMIN: {
        BASE: '/admin-dashboard',
        LIST_USERS: '/list-users',
        ADMIN_UPDATES_USER: '/admin-updates-user',
        ADMIN_DELETES_USER: '/admin-deletes-user',
    },
    SPEEDTEST: {
        BASE: '/speed-test',
        SAVE_TEST: '/save',
        FETCH: '/fetch',
    },
    ACCESS_REQUESTS: {
        BASE: '/access-requests',
        FETCH_ALL: '/fetch-all',
        DELETE: '/delete',
        APPROVE: '/approve',
    },
};

const API_ROUTES = {
    AUTH: `${ROUTES.BASE}${ROUTES.AUTH.BASE}`,
    USER: `${ROUTES.BASE}${ROUTES.USER.BASE}`,
    ADMIN: `${ROUTES.BASE}${ROUTES.ADMIN.BASE}`,
    SPEEDTEST: `${ROUTES.BASE}${ROUTES.SPEEDTEST.BASE}`,
    ACCESS_REQUESTS: `${ROUTES.BASE}${ROUTES.ACCESS_REQUESTS.BASE}`,
};

module.exports = {
    ROUTES,
    API_ROUTES,
};
