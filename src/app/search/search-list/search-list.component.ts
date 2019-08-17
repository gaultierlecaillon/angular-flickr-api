import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SearchService} from '../../services/search.service';
import {Photo} from '../../interfaces/photo';

@Component({
  selector: 'app-search',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css'],
  providers: [SearchService]
})
export class SearchListComponent implements OnInit {

  photos: Photo[];
  contentTypes = [
    {label: 'All', value: 7},
    {label: 'Photo Only', value: 1},
    {label: 'Screenshots Only', value: 2},
    {label: 'Other Only', value: 3}
  ];
  safeSearchs = [
    {label: 'Safe', value: 1},
    {label: 'Moderate', value: 2},
    {label: 'Restricted', value: 3}
  ];
  geoContexts = [
    {label: 'Not defined', value: 0},
    {label: 'Indoors', value: 1},
    {label: 'Outdoors', value: 2}
  ];

  sorts = [
    {label: 'Most relevant', value: 'relevance'},
    {label: 'Most recent posted', value: 'date-posted-asc'},
    {label: 'Most recent taked', value: 'date-taken-asc'},
    {label: 'Most Interesting', value: 'interestingness-desc'}
  ];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const searchInput = form.value.searchInput;
    this.searchService.list(form.value).subscribe((res: Photo[]) => {
      this.photos = res.photos.photo;
    });
  }
}
