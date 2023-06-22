import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PopularTagType } from '../../types/popularTag.type';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectError, selectIsLoading, selectTagsData } from './store/reducers';
import { LoadingMessageComponent } from '../loadingMessage/loadingMessage.component';
import { ErrorMessageComponent } from '../errorMessage/errorMessage.component';
import { RouterLink } from '@angular/router';
import { tagsActions } from './store/actions';

@Component({
  selector: 'mc-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    LoadingMessageComponent,
    ErrorMessageComponent,
    RouterLink,
  ],
})
export class TagsComponent implements OnInit {
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    tags: this.store.select(selectTagsData),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(tagsActions.getTags());
  }
}
