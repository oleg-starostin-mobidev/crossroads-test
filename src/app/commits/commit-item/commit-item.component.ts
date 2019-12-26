import { Component, OnInit, Input } from '@angular/core';
import { CommitItem } from './commit-item';

@Component({
  selector: 'app-commit-item',
  templateUrl: './commit-item.component.html',
  styleUrls: ['./commit-item.component.scss']
})
export class CommitItemComponent implements OnInit {
  @Input() commit: CommitItem;

  constructor() { }

  ngOnInit() {
  }

}
