import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../core/github.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }

  getCommits () {
    this.githubService.getCommits();
  }
}
