import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {ActivatedRoute} from '@angular/router';
import {DetailRequest} from '../../interfaces/detailRequest';
import {CommentsRequest} from '../../interfaces/commentsRequest';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers: [SearchService]
})
export class SearchDetailComponent implements OnInit {
  detail: DetailRequest;
  url: string;
  comments: string[];

  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id
    const secret = this.activatedRoute.snapshot.params.secret
    this.searchService.show(id, secret).subscribe((res: DetailRequest) => {
      this.detail = res.photo;
      this.url = 'https://live.staticflickr.com/' + this.detail.server + '/' + this.detail.id + '_' + this.detail.secret +'_b.jpg';
    });
    this.searchService.getComments(id).subscribe((res: CommentsRequest) => {
      this.comments = res.comments.comment;
    });
  }
}
