const QUERIES = {
    USERS: {
        CREATE_USER: `INSERT INTO users (user_name, public_key, meta_data) VALUES (?, ?, ?)`,
        CHECK_USERNAME: `SELECT EXISTS(SELECT 1 FROM users WHERE user_name = ?) as is_available`,
        UPDATE_USER: 'UPDATE users SET meta_data = ? WHERE user_name = ?',
        EXTRACT_USERINFO: 'SELECT meta_data FROM users WHERE user_name = ?',
        DELETE_USER: 'Delete from users WHERE user_name = ?',
    },
    SIGN_IN: {
        EXTRACT_PUBLICKEY: 'SELECT public_key FROM users WHERE user_name = ?',
        EXTRACT_METADATA:
            'SELECT user_role, meta_data FROM users WHERE user_name = ?',
    },
    ADMIN: {
        LIST_USERS: `SELECT user_name, user_role, meta_data FROM users`,
        ADMIN_UPDATES_USER: `UPDATE users SET user_role = ?, meta_data = ? WHERE user_name = ?`,
        ADMIN_DELETES_USER: `DELETE FROM users WHERE user_name = ?`,
    },
    SPEED_TEST: {
        SAVE_TEST: `INSERT INTO speedTests (id, user_name, download, hostname, ip_address, jitter, latency, maxDownload, maxUpload, testDate, testServer, upload) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        FETCH_TESTS: `SELECT * FROM speedTests WHERE user_name = ? ORDER BY testDate DESC`,
    },
};

module.exports = { QUERIES };
