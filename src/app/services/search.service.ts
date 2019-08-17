import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../interfaces/photo';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {DetailRequest} from '../interfaces/detailRequest';
import {CommentsRequest} from '../interfaces/commentsRequest';

function generateUrl(method: string, formData: string[]) {
  var url = environment.apiBaseUrl + '?method=';
  url += method;
  url += '&extras=url_s&api_key=' + environment.apiKey + '&format=json&nojsoncallback=1';
  Object.keys(formData).forEach(function(param) {
    if (formData[param] != '' && formData[param] != null) {
      url += '&' + param + '=' + formData[param];
    }
  });
  return url;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url: string;
  constructor(private http: HttpClient) {}

  list(formData: string[]): Observable<Photo[]> {
    this.url = generateUrl('flickr.photos.search', formData);
    return this.http.get(this.url).pipe(
      map((res: Photo[]) => {
        return res;
      })
    );
  }

  show(id: number, secret: string): Observable<DetailRequest> {
    this.url = environment.apiBaseUrl + '?method=flickr.photos.getInfo&api_key=' + environment.apiKey + '&photo_id=' + id + '&secret=' + secret + '&format=json&nojsoncallback=1';
    return this.http.get(this.url).pipe(
      map((res: DetailRequest) => {
        return res;
      })
    );
  }

  getComments(id: number) {
    this.url = environment.apiBaseUrl + '?method=flickr.photos.comments.getList&api_key=' + environment.apiKey + '&photo_id=' + id + '&format=json&nojsoncallback=1';
    return this.http.get(this.url).pipe(
      map((res: CommentsRequest) => {
        return res;
      })
    );
  }
}
