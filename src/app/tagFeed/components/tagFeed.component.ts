import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { FeedComponent } from 'src/app/shared/components/feed/feed.component';
import { TagsComponent } from 'src/app/shared/components/tags/tags.component';
import { TogglerComponent } from 'src/app/shared/components/toggler/toggler.component';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './tagFeed.component.html',
  standalone: true,
  imports: [FeedComponent, BannerComponent, TagsComponent, TogglerComponent],
})
export class TagFeedComponent implements OnInit {
  apiUrl: string = '';
  tagName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tagName = params['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }
}
