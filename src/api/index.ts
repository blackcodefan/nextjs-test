import {GithubApiProvider} from "@src/api/github";
import {GitLabApiProvider} from "@src/api/gitlab";
import {Api, Provider} from "@src/api/provider-template";

export class ApiProvider {

    private readonly github: GithubApiProvider;
    private readonly gitlab: GitLabApiProvider;
    private currentApiProvider: Api;

    constructor(){
        this.github = new GithubApiProvider();
        this.gitlab = new GitLabApiProvider();
        this.currentApiProvider = this.github;
    }

    set setProvider(provider: Provider){
        switch (provider) {
            case Provider.github:
                this.currentApiProvider = this.github;
                break;
            case Provider.gitlab:
                this.currentApiProvider = this.gitlab;
                break;
            default:
                this.currentApiProvider = this.github;
                break;
        }
    }

    get getProvider(): Provider {
        return this.currentApiProvider.name;
    }

    provider (provider: string): Api {
        if (provider === Provider.github) {
            return this.github;
        }else if (provider === Provider.gitlab) {
            return this.gitlab;
        }else {
            return this.currentApiProvider;
        }
    }
}

export default new ApiProvider();