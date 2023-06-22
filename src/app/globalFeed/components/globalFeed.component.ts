import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { FeedComponent } from 'src/app/shared/components/feed/feed.component';
import { TagsComponent } from 'src/app/shared/components/tags/tags.component';
import { TogglerComponent } from 'src/app/shared/components/toggler/toggler.component';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [FeedComponent, BannerComponent, TagsComponent, TogglerComponent],
})
export class GlobalFeed {
  apiUrl: string = 'articles';
}
