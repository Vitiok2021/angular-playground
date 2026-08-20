import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoData } from '../models/seo-data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SeoManager {
  title = inject(Title);
  meta = inject(Meta);
  router = inject(Router);
  document = inject(DOCUMENT);

  private readonly siteName = 'Modern Store';
  private readonly defaultImage = 'https://dummyimage.com/600x400/ffffff/000000&text=Modern+Store';
  updateSeoTags(seoData: SeoData) {
    this.title.setTitle(`${seoData.title} | ${this.siteName}`);
    this.meta.updateTag({ name: 'description', content: seoData.description });
  }
}
