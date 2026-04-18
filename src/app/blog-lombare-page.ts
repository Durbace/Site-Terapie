import { Component } from '@angular/core';
import {
  BlogArticleData,
  BlogArticleTemplateComponent,
} from './blog-article-template/blog-article-template';

@Component({
  selector: 'app-blog-lombare-page',
  standalone: true,
  imports: [BlogArticleTemplateComponent],
  template: `
    <app-blog-article-template [article]="article"></app-blog-article-template>
  `,
})
export class BlogLombarePageComponent {
  article: BlogArticleData = {
    category: 'Recuperare',
    readTime: '5 min lectură',
    title: 'Abordări blânde pentru durerile lombare cronice',
    excerpt:
      'De ce forțarea recuperării poate încetini procesul de vindecare și cum să asculți semnalele corpului.',

    authorName: 'Echipa Respirația Liniștii',
    authorRole: 'Articol informativ',
    authorImage: 'assets/images/blog/author-placeholder.jpg',
    publishedAt: '18 Aprilie 2026',

    heroImage: 'assets/images/home.webp',
    heroImageAlt: 'Pietre echilibrate, simbol al recuperării blânde',

    learnings: [
      'De ce durerile lombare cronice nu răspund bine la forțare.',
      'Cum recunoști diferența dintre mobilizare utilă și suprasolicitare.',
      'Ce obiceiuri zilnice pot susține recuperarea zonei lombare.',
      'Când este momentul să ceri ajutor specializat.',
    ],

    quote:
      'Recuperarea reală nu începe când forțezi corpul, ci când înveți să lucrezi împreună cu el.',

    sections: [
      {
        id: 'de-ce-apare-durerea',
        title: 'De ce durerile lombare cronice persistă',
        level: 'h2',
        paragraphs: [
          'Durerea lombară cronică nu este întotdeauna rezultatul unei singure probleme structurale. De multe ori, ea apare dintr-o combinație de tensiune musculară, lipsă de mobilitate, postură prelungită și stres acumulat.',
          'Atunci când corpul stă mult timp în poziții fixe, zona lombară începe să compenseze. În timp, aceste compensări devin un tipar, iar durerea apare chiar și la mișcări obișnuite.',
        ],
      },
      {
        id: 'de-ce-fortarea-nu-ajuta',
        title: 'De ce forțarea recuperării nu ajută',
        level: 'h2',
        paragraphs: [
          'Mulți oameni încearcă să “rezolve repede” durerea prin exerciții intense, întinderi agresive sau mișcări făcute peste pragul de confort. Din păcate, această abordare poate irita și mai mult țesuturile deja sensibile.',
          'Corpul are nevoie de siguranță, ritm și progres gradual. Când insiști prea tare, sistemul nervos percepe mișcarea ca pe o amenințare și poate amplifica senzația de durere.',
        ],
        tipTitle: 'Sfat util',
        tipText:
          'Caută senzația de ușurare sau de mobilitate controlată, nu durerea intensă. În recuperare, mai mult nu înseamnă automat mai bine.',
      },
      {
        id: 'semnele-corpului',
        title: 'Semne că organismul îți cere o abordare mai blândă',
        level: 'h3',
        bullets: [
          'durerea crește după exerciții și persistă multe ore',
          'simți rigiditate mai mare a doua zi, nu mai puțină',
          'teama de mișcare începe să crească',
          'ai impresia că trebuie să “suporți” tot mai mult pentru a progresa',
        ],
        paragraphs: [
          'Aceste semne nu înseamnă că trebuie să te oprești complet, ci că poate fi nevoie să reduci intensitatea și să alegi un ritm mai potrivit pentru corpul tău.',
        ],
      },
      {
        id: 'ce-ajuta-cu-adevarat',
        title: 'Ce ajută cu adevărat în recuperare',
        level: 'h2',
        numberedItems: [
          {
            title: 'Mișcare dozată:',
            text: 'plimbări scurte, mobilitate ușoară și exerciții făcute fără grabă.',
          },
          {
            title: 'Pauze regulate:',
            text: 'schimbarea poziției în timpul zilei reduce presiunea constantă pe zona lombară.',
          },
          {
            title: 'Respirație și relaxare:',
            text: 'un corp tensionat recuperează mai greu, iar respirația profundă poate reduce apărarea musculară.',
          },
          {
            title: 'Evaluare personalizată:',
            text: 'uneori durerea lombară vine și din șolduri, bazin sau torace, nu doar din zona de jos a spatelui.',
          },
        ],
      },
      {
        id: 'cand-ceri-ajutor',
        title: 'Când este bine să ceri ajutor specializat',
        level: 'h2',
        paragraphs: [
          'Dacă durerea persistă de săptămâni sau luni, dacă reapare frecvent ori dacă îți afectează somnul, mersul sau activitățile zilnice, este util să ceri o evaluare profesionistă.',
          'O abordare terapeutică blândă poate identifica ce tipare întrețin durerea și ce pași mici, dar eficienți, te pot ajuta să recapeți încredere în mișcare.',
        ],
      },
    ],

    keyTakeaways: [
      {
        label: 'Ritm',
        text: 'Recuperarea lombară eficientă este graduală, nu agresivă.',
      },
      {
        label: 'Ascultare',
        text: 'Semnalele corpului sunt ghiduri utile, nu obstacole de ignorat.',
      },
    ],

    faq: [
      {
        question: 'Este normal să mă doară mai tare după ce fac exerciții?',
        answer:
          'Un disconfort ușor poate apărea uneori, dar o agravare clară și prelungită sugerează că intensitatea este prea mare sau că exercițiile nu sunt potrivite pentru etapa ta actuală.',
      },
      {
        question: 'Ar trebui să evit complet mișcarea dacă am dureri lombare cronice?',
        answer:
          'De obicei nu. În multe cazuri, mișcarea blândă și bine dozată este mai utilă decât repausul complet, dar trebuie aleasă corect și adaptată simptomelor.',
      },
      {
        question: 'Cât durează până apar primele îmbunătățiri?',
        answer:
          'Depinde de cauză, de vechimea durerii și de stilul de viață, dar multe persoane observă schimbări când încep să reducă suprasolicitarea și să fie mai constante cu pașii mici.',
      },
      {
        question: 'Osteopatia poate ajuta în durerile lombare cronice?',
        answer:
          'Poate fi utilă ca parte dintr-o abordare personalizată, mai ales când problema este întreținută de tensiune, mobilitate redusă și compensări posturale.',
      },
    ],

    relatedArticles: [
      {
        category: 'Postură',
        title: 'Importanța ergonomiei în lucrul de acasă',
        imageSrc: 'assets/images/blog/related-ergonomie.jpg',
        imageAlt: 'Ergonomie la birou',
        link: '/blog/importanta-ergonomiei',
      },
      {
        category: 'Relaxare',
        title: 'Ritualuri de seară pentru un somn cu adevărat reparator',
        imageSrc: 'assets/images/blog/related-somn.jpg',
        imageAlt: 'Relaxare și somn',
        link: '/blog/ritualuri-de-seara',
      },
      {
        category: 'Recuperare',
        title: 'Cum recunoști tensiunea acumulată în zona gâtului',
        imageSrc: 'assets/images/blog/related-gat.jpg',
        imageAlt: 'Tensiune cervicală',
        link: '/blog/tensiunea-din-zona-gatului',
      },
    ],

    sidebarCtaTitle: 'Vrei o evaluare personalizată?',
    sidebarCtaText:
      'Programează o consultație și află ce poate susține recuperarea ta, în ritmul potrivit pentru corpul tău.',
    sidebarCtaLabel: 'Programare acum',
    sidebarCtaLink: '/contact',

    finalCtaTitle: 'Recuperarea începe cu pași mici, făcuți corect.',
    finalCtaText:
      'Dacă durerea lombară persistă, o abordare blândă și personalizată poate face diferența.',
    finalCtaPrimaryLabel: 'Programează o ședință',
    finalCtaPrimaryLink: '/contact',
    finalCtaSecondaryLabel: 'Vezi toate articolele',
    finalCtaSecondaryLink: '/blog',
  };
}