import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";
import { environment } from '../../environments/environment';
import { CommitItem } from "../commit-item/commit-item";

@Injectable({
    providedIn: 'root'
})
export class GithubService {
    private commitsSubject = new BehaviorSubject<CommitItem[]>([]);
    private isLoadingSubject = new BehaviorSubject<boolean>(false);

    get isLoading() {
        return this.isLoadingSubject.getValue()
    }

    set isLoading(state: boolean) {
        this.isLoadingSubject.next(state);
    }

    get commits() {
        return this.commitsSubject.getValue()
    }

    set commits(newCommits: CommitItem[]) {
        this.commitsSubject.next(newCommits);
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
