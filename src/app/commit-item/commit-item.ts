interface Author {
    name: string;
    email: string;
    date: string;
}

interface Committer {
    name: string;
    email: string;
    date: string;
}

export class CommitItem {
    author: Author;
    committer: Committer;
    message: string;
    url: string;
    htmlUrl: string;
    sha: string;

    constructor(data) {
        const { commit } = data;
        this.sha = data.sha;
        this.author = commit.author;
        this.message = commit.message;
        this.url = commit.url;
        this.htmlUrl = data.html_url;
        this.committer = commit.committer
    }
}


