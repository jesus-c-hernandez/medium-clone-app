import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { GetTagsResponseInterface } from './getTagsResponse.interface';

export interface TagsStateInterface {
  isLoading: boolean;
  error: string | null;
  data: PopularTagType[] | null;
}
