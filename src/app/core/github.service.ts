import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";
import { environment } from '../../environments/environment';
import { CommitItem } from "../commit-item/commit-item";

@Injectable({
    providedIn: 'root'
})
export class GithubService {
    private state = new BehaviorSubject<CommitItem[]>([]);

    get commits() {
        return this.state.getValue()
    }

    set commits(newCommits: CommitItem[]) {
        this.state.next(newCommits);
    }

    constructor(private http: HttpClient) {
    }

    getCommits(): void {
        const url = `repos/${environment.repoOwner}/${environment.project}/commits`;
        this.http.get(url).subscribe((response: CommitItem[]) => {
            this.commits = response.map(item => new CommitItem(item));
        });
    }
}
