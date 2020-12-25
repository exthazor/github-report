export class Repo{
    name: String;
    description: String;
    url: String;
    size: Number;
    forkCount: Number;

    constructor(repo:any){
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.size;
        this.forkCount = repo.forks;
    }
}