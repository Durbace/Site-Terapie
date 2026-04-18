import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar';

type Category = 'Toate' | 'Postură' | 'Relaxare' | 'Recuperare' | 'Stil de viață' | 'Stres';

interface BlogArticle {
  title: string;
  excerpt: string;
  category: Exclude<Category, 'Toate'>;
  readTime: string;
  image: string;
  alt: string;
  link: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink],
  templateUrl: './blog.html'
})
export class BlogComponent {
  activeCategory: Category = 'Toate';

  categories: Category[] = [
    'Toate',
    'Postură',
    'Relaxare',
    'Recuperare',
    'Stil de viață',
    'Stres'
  ];

  featuredArticle: BlogArticle = {
    title: 'Cum recunoști tensiunea acumulată în zona gâtului',
    excerpt:
      'Află care sunt primele semne ale stresului somatic și cum poți interveni prin tehnici simple de relaxare osteopatică înainte ca disconfortul să devină cronic.',
    category: 'Relaxare',
    readTime: '6 min lectură',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAVEpYHfVZyAxB2tPoR21KeA3tpHR86Fx6AMv0SzzyrAqyvraLN3lPq02qz-py22FjbYK68IxbBi5OPKoBDVhYi9dmHmWFgiQVmr_EG1RkprDyiK4Kkttg0n-QamjhbG0uUhqnH8_w42npNC4tKSFurrYAjZdnSzHGGbLU5pea8RMiakTm9zA79RO7oej0VokD-gK7WRJEQq46KPOrF_6snCFG1bDp47krykKTVUbJIISFH3q7oVHXecVaCEdtgQXd2nfI9bvnCANmh',
    alt: 'Articol recomandat',
    link:'/blog'
  };

  articles: BlogArticle[] = [
    {
      title: 'Abordări blânde pentru durerile lombare cronice',
      excerpt:
        'De ce forțarea recuperării poate încetini procesul de vindecare și cum să asculți semnalele corpului.',
      category: 'Recuperare',
      readTime: '5 min lectură',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCiLcIL2qOM7kuFacKhRaQ-edmIzBJb9Bmc8oolt8KLpYT4AYMcHtiVJmi4nczQ4two2gbsHWW4kmZPuoSKWDjpBUd5u-6qCmZRQgsSAsGqQXIWcsFPa0ec-kG6NLqQE_RsKxtGXNHtEob7bbhu4oNUkrSXa18hDN6TSUZouG1-rqgDOwlO5jE2MPSrb9U5YHYNITdN-iOGPdun_JtJFHug8sP4HohNAePomW-UZ9F7Q0xH5ZGwzg44hTe3tBxcrVHRguhyHe0eFfp-',
      alt: 'Recuperare',
      link: '/blog/abordari-blande-pentru-durerile-lombare-cronice'
    },
    {
      title: 'Importanța ergonomiei în lucrul de acasă',
      excerpt:
        'Mici ajustări ale scaunului și monitorului care pot salva sănătatea coloanei tale vertebrale pe termen lung.',
      category: 'Postură',
      readTime: '4 min lectură',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBnNne6vdWHMWEGaKVcQBK3r2WCAIBEWYEL-lnLCKDMZUuAMXS2deDxn2qVK-FgbxZmXzvzySVyj6FVYZgko5eJVg4HWyol-BDR7wzAZP-Oyj1OePu-cC2RiESJr3riF9OfYL40467CbGwe8iMHAuAJwA2V0y7aMHonx-9BLaR7y4rI0nSg90EYDm4aTaCKVTfN__-ILgj5uLgxlKSey862g1rO3-hQxdQNLFfYzgFN1XyvbwxBhZejimBwYryRW4nmj8pETjusM9Pf',
      alt: 'Postură',
      link: '/blog'
    },
    {
      title: 'Ritualuri de seară pentru un somn cu adevărat reparator',
      excerpt:
        'Cum să pregătești sistemul nervos pentru odihnă profundă folosind tehnici de respirație conștientă.',
      category: 'Relaxare',
      readTime: '7 min lectură',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCawG4m9jN-f202XiVw8v51qxDbasG27ho0IamY-uudGkDkMcZyERgyxDm4kGN6x9c16mrsMCepflsvgJZpcQAL6uJoX6D3cKJDrpFZtUs3Xg01VJfRHU1BXFXisi0T1FdCUseEL2lc7ZkbO-6s4jiiESAbn6ISrjOAyR21GBN_dLD3DiFR69-ygTi70TxIPTvH2HrcKz-56nEio-erD-Fz5kvDuBLqt683-0aXpajTcX72mV7wknk1ai8yW-F8ocRvVsbh3_0W8cOW',
      alt: 'Relaxare',
      link: '/blog'
    },
    {
      title: 'Impactul stresului asupra fasciilor musculare',
      excerpt:
        'O privire științifică dar accesibilă asupra modului în care emoțiile se „stochează” în țesutul conjunctiv.',
      category: 'Stres',
      readTime: '6 min lectură',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCIHuDopi4kw2ZUwEjrUkcxvRXpaVZupW4ItWfJUfF97ZAbSMc3Idxk4NjzrRsdDNuz60NgsWMZBNnsEIZcyJ4pCWfjLhfj1xMP1cOUYJAZQXbM1p5cFsPiDEpHlBb7FSaGFjshnYZrSArEla4p6yshxJLWh0VXnUippCUzami3BJWPlUNbbIp8G9Gsf9etdKcskanzYVyLE3QysJmXFEqBa7_FdWYM8D8XX6YTRX-JbgGJLKZ6RcfgwLcC1U6G-NGatAEboi7IZX8u',
      alt: 'Stres',
      link: '/blog'
    },
    {
      title: 'Mersul pe jos – cel mai simplu exercițiu de osteopatie',
      excerpt:
        'Cum să transformi o plimbare banală într-o sesiune de realiniere pentru întregul corp.',
      category: 'Postură',
      readTime: '5 min lectură',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDef-KSSlGpqOY4SSzUcjHoXHJ5hUafpnTu1RIwBTMKxfg9aVvPReBp52G3Y8H8SfSSh7WMZYbiN7U4N9_mZ4jPY1gsGOw6in80LbvqQqRYmdQFmxCIvbyTzGT1tpZdf_fKRAs5XnWbg51SVsS7l4_cFNvIZaq3aIxWB74nXGsv1Q6loG24ktg43__GxI4UZjyMsBA0S45NAqwFoiK7I9ATCd0Dn57KdhcpIMFH8Bp9Yx4s4sgLa4jwEsFPYeVlZD5OEYQa2GZcZSNo',
      alt: 'Postură',
      link: '/blog'
    },
    {
      title: 'Hidratarea și elasticitatea musculară',
      excerpt:
        'De ce apa este esențială nu doar pentru organe, ci și pentru mobilitatea articulațiilor tale.',
      category: 'Relaxare',
      readTime: '4 min lectură',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBE16ttTNe94tmqIXICp3zRfyuvzc-Mo2xD2DGRiqlacj6tfCok3HDHiBoBOslVdGM0SMkW6-sMY44VLeyAHv2XRfKt75Dkx_l1Xrf4I8z8VSZsd7uFY-pXpRp2brww2ahxO-lU_g-Cwt0xvxik2lEUWmvc-Ezylpw79wLOR3bBJBBK9jMchkdVGwu9P2z9dIc55iCffxmqCe4BJpM31dAJxLrhRhPrWGtWFRkQad74kJVd__QVjNAwykchGWyy2jrfg551I2UazZvO',
      alt: 'Relaxare',
      link: '/blog'
    }
  ];

  setCategory(category: Category): void {
    this.activeCategory = category;
  }

  get filteredArticles(): BlogArticle[] {
    if (this.activeCategory === 'Toate') {
      return this.articles;
    }

    return this.articles.filter(article => article.category === this.activeCategory);
  }

  get showFeaturedArticle(): boolean {
    return this.activeCategory === 'Toate' || this.featuredArticle.category === this.activeCategory;
  }
}