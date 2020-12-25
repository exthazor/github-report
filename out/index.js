"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubApiService();
svc.getUserInfo('aSquare14', function (user) {
    svc.getRepos('aSquare14', function (repos) {
        var sortedRepos = _.sortBy(repos, [function (repo) { return repo.forkCount; }]).reverse();
        user.repos = _.take(sortedRepos, 5);
        console.log(user);
    });
});
