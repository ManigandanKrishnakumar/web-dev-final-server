class User {
    username;
    publicKey;
    metaData;

    constructor(_username = '', _publicKey = '', _metaData = '') {
        this.username = _username;
        this.publicKey = _publicKey;
        this.metaData = _metaData;
    }
}

class SpeedTest {
    user_name;
    download;
    hostname;
    ip_address;
    jitter;
    latency;
    maxDownload;
    maxUpload;
    testDate;
    testServer;
    upload;

    constructor(
        _user_name = '',
        _download = '',
        _hostname = '',
        _ip_address = '',
        _jitter = '',
        _latency = '',
        _maxDownload = '',
        _maxUpload = '',
        _testDate = '',
        _testServer = '',
        _upload = ''
    ) {
        this.user_name = _user_name;
        this.download = _download;
        this.hostname = _hostname;
        this.ip_address = _ip_address;
        this.jitter = _jitter;
        this.latency = _latency;
        this.maxDownload = _maxDownload;
        this.maxUpload = _maxUpload;
        this.testDate = _testDate;
        this.upload = _upload;
    }
}

module.exports = {
    User,
    SpeedTest,
};
