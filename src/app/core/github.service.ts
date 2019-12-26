import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";
import { environment } from '../../environments/environment';
import { CommitItem } from '../commits/commit-item/commit-item';

@Injectable({
    providedIn: 'root'
})
export class GithubService {
    private _commitsState = new BehaviorSubject<CommitItem[]>([]);
    private _isLoadingState = new BehaviorSubject<boolean>(false);

    get isLoading() {
        return this._isLoadingState.getValue()
    }

    set isLoading(state: boolean) {
        this._isLoadingState.next(state);
    }

    get commits() {
        return this._commitsState.getValue()
    }

    set commits(newCommits: CommitItem[]) {
        this._commitsState.next(newCommits);
    }

    constructor(private http: HttpClient) {
    }

    getCommits(): void {
        const url = `repos/${environment.repoOwner}/${environment.project}/commits`;
        this.isLoading = true;
        this.commits = [];
        this.http.get(url).subscribe((response: CommitItem[]) => {
            this.isLoading = false;
            this.commits = response.map(item => new CommitItem(item));
        });
    }
}
