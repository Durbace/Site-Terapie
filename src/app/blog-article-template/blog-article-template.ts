import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar';
import { FooterComponent } from '../footer/footer';
import { RevealOnScrollDirective } from '../../reveal-on-scroll.directive';

export interface BlogArticleSection {
  id: string;
  title: string;
  level?: 'h2' | 'h3';
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
  tipTitle?: string;
  tipText?: string;
  bullets?: string[];
  numberedItems?: { title: string; text: string }[];
}

export interface BlogArticleFaq {
  question: string;
  answer: string;
}

export interface BlogRelatedArticle {
  category: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
}

export interface BlogArticleData {
  category: string;
  readTime: string;
  title: string;
  excerpt: string;

  authorName: string;
  authorRole?: string;
  authorImage: string;
  publishedAt: string;

  heroImage: string;
  heroImageAlt: string;

  learnings: string[];
  quote?: string;

  sections: BlogArticleSection[];

  keyTakeaways: { label: string; text: string }[];

  faq: BlogArticleFaq[];

  relatedArticles: BlogRelatedArticle[];

  sidebarCtaTitle: string;
  sidebarCtaText: string;
  sidebarCtaLabel: string;
  sidebarCtaLink: string;

  finalCtaTitle: string;
  finalCtaText: string;
  finalCtaPrimaryLabel: string;
  finalCtaPrimaryLink: string;
  finalCtaSecondaryLabel: string;
  finalCtaSecondaryLink: string;
}

@Component({
  selector: 'app-blog-article-template',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent, RevealOnScrollDirective],
  templateUrl: './blog-article-template.html',
})
export class BlogArticleTemplateComponent {
  @Input({ required: true }) article!: BlogArticleData;

  get tocSections(): BlogArticleSection[] {
    return this.article.sections.filter(section => !!section.id);
  }
}