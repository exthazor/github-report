import * as _ from 'lodash'
import { User } from './User'
import { Repo } from './Repo'
import { GithubApiService } from './GithubApiService'

let svc = new GithubApiService();
if(process.argv.length < 3){
    console.log("Please enter the required Github username.")
}
else{
    let username = process.argv[2]
    svc.getUserInfo('username', (user:User) => {
        svc.getRepos('username', (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo:Repo) => repo.forkCount ]).reverse()
            user.repos = _.take(sortedRepos, 5)
            console.log(user)
        })
        
    })
}


