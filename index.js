var path = require('path');
var package_json_path = path.resolve(path.join(__dirname, 'package.json'));
var package_json = require(package_json_path);
var napi = require("node-pre-gyp/lib/util/napi");
var versioning = require("node-pre-gyp/lib/util/versioning");

var napi_build_version;
if (napi.get_napi_build_versions(package_json)) {
    napi_build_version = napi.get_best_napi_build_version(package_json);
}
var opts = {module_root: path.dirname(package_json_path)};
opts = versioning.evaluate(package_json, opts, napi_build_version);
var extension_name = path.join(opts.module_path, opts.module_name);

module.exports = {
    extension_name: extension_name,
    load: function (database, callback) {
        return database.loadExtension(extension_name, callback);
    }
};

