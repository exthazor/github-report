import * as _ from 'lodash'
import { User } from './User'
import { Repo } from './Repo'
import { GithubApiService } from './GithubApiService'

let svc = new GithubApiService();
svc.getUserInfo('exthazor', (user:User) => {
    svc.getRepos('exthazor', (repos: Repo[]) => {
        let sortedRepos = _.sortBy(repos, (repo:Repo) => repo.forkCount * -1)
        user.repos = sortedRepos
        console.log(user)
    })
    
})


