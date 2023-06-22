import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TagsService } from '../services/tags.service';
import { tagsActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';

export const getTagsEffect = createEffect(
  (actions$ = inject(Actions), tagsService = inject(TagsService)) => {
    return actions$.pipe(
      ofType(tagsActions.getTags),
      switchMap(() => {
        return tagsService.getTags().pipe(
          map((tags: PopularTagType[]) => {
            return tagsActions.getTagsSuccess({ tags });
          }),
          catchError(() => {
            return of(tagsActions.getTagsFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
