import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export const articleActions = createActionGroup({
  source: 'article',
  events: {
    // Get
    'Get article': props<{ slug: string }>(),
    'Get artcicle success': props<{ article: ArticleInterface }>(),
    'Get article failure': emptyProps(),
    // Delete
    'Delete article': props<{ slug: string }>(),
    'Delete artcicle success': emptyProps(),
    'Delete article failure': emptyProps(),
  },
});
