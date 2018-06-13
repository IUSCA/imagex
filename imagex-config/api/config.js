'use strict';


module.exports = function(winston) {
    var exports = {};

    exports.default_site_options = {  //if config entries not found in DB, use these to create initial load
        _guest: {
            _enabled: false,
            _search: true,
            _download: false
        },
        _registration: 'open',  // open|invite
        _users: {
            _upload: true,
            _delete: false,
            _sharing: 'all',  //  choose|none|all
            _quota: 1e10   // default upload limit in bytes
        },
        _demo: false,  //enable demo mode
        _maxfilesize: 1e9, // maximum file size for individual upload in bytes
        _title: 'ImageX 3.0',
        _admin_email: 'youngmd@iu.edu'
    };

    exports.express = {
        port: 12809
    };

    exports.mongodb = 'mongodb://imagex-mongodb:27017/imagextest';

    exports.auth = {
        //default user object when registered
        default: {
            //scopes can be empty.. but don't remove it! (a lot of app expects scopes object to exist)
            scopes: {
                sca: ["user"],
            },
            gids: [1],
        },

        quota: 1e10,

        //issuer to use for generated jwt token
        iss: "https://imagex.sca.iu.edu",
        //ttl for jwt
        ttl: 24 * 3600 * 1000, //1 day

        //TODO - fix this
        secret: 'shhhhhhared-secret',

        admin: {
            email: 'admin@localhost',
            name: 'Admin',
            default_password: 'change-this'
        },
        guest: {
            email: 'guest@localhost',
            name: 'Guest',
            default_password: 'guest'
        }
    };

    exports.local = {
        email_confirmation: {
            from: 'no-reply@imagex.sca.iu.edu',
            subject: 'Confirm imagex.sca.iu.edu account'
        },
        url: 'https://imagex.sca.iu.edu/'
    };

    exports.logger = {
        winston: {
            transports: [
                //display all logs to console
                new winston.transports.Console({
                    timestamp: function () {
                        var d = new Date();
                        return d.toString(); //show timestamp
                    },
                    level: 'debug',
                    colorize: true
                }),
            ]
        },
    };

    return exports;
}
