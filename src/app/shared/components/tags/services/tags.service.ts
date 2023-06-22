import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GetTagsResponseInterface } from '../types/getTagsResponse.interface';
import { environment } from 'src/environments/environment';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  constructor(private http: HttpClient) {}

  getTags(): Observable<PopularTagType[]> {
    const url = `${environment.apiURL}/tags`;
    return this.http
      .get<GetTagsResponseInterface>(url)
      .pipe(map((response) => response.tags));
  }
}
