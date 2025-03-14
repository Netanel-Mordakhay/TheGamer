import halo900x600 from "../mock/articles/halo900x600.jpg";
import eldenring900x600 from "../mock/articles/eldenring900x600.jpg";
import gow900x600 from "../mock/articles/gow900x600.jpg";
import cyberpunk900x600 from "../mock/articles/cyberpunk900x600.jpg";
import starfield900x600 from "../mock/articles/starfield900x600.jpg";
import indie900x600 from "../mock/articles/indiegames900x600.jpg";
import gtavi900x600 from "../mock/articles/gtavi900x600.jpg";
import ai900x600 from "../mock/articles/AIgaming900x600.jpg";
import horizonzerodawn900x600 from "../mock/articles/horizonzerodawn900x600.jpg";
import codblackops900x600 from "../mock/articles/codblackops6900x600.jpg";
import valorant900x600 from "../mock/articles/valorant900x600.jpg";
import esports900x600 from "../mock/articles/esports900x600.jpg";
import nintendo900x600 from "../mock/articles/nintendoswitch2900x600.jpg";
import psvr900x600 from "../mock/articles/psvr900x600.jpg";
import pse900x600 from "../mock/articles/psexclusive900x600.jpg";
import keyboards900x600 from "../mock/articles/gamingkeyboard900x600.jpg";
import gamingpc900x600 from "../mock/articles/gamingpc900x600.jpg";
import rdr2900x600 from "../mock/articles/rdr2900x600.jpg";
import gamingchairs900x600 from "../mock/articles/gamingchairs900x600.jpg";
import anticipated2025games900x600 from "../mock/articles/acshadows900x600.jpg";
import nextgenconsoles900x600 from "../mock/articles/mobilegaming900x600.jpg";
import mobilegaming900x600 from "../mock/articles/gamingpc900x600.jpg";
import gamingstreaming900x600 from "../mock/articles/gamingstreaming900x600.jpg";
import aingames900x600 from "../mock/articles/aingames900x600.jpg";
import retrogaming900x600 from "../mock/articles/retrogaming900x600.jpg";

export interface Article {
  id: number;
  title: string;
  description: string;
  imageURL: string;
  review: boolean;
  rating: number | null;
  featured: boolean;
  topArticle: boolean;
  authorId: number;
  timestamp: string;
}

export interface Comment {
  id: number;
  articleId: number;
  user: string;
  text: string;
  timestamp: string;
}

export interface Author {
  id: number;
  name: string;
  avatar: string;
  bio: string;
}

const authors = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Gaming journalist with 10 years of experience.",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Esports enthusiast and indie game reviewer.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Tech and gaming hardware expert.",
  },
];

const comments = [
  {
    id: 1,
    articleId: 18,
    user: "Gamer123",
    text: "This review is spot on!",
    timestamp: "2025-03-06T12:00:00Z",
  },
  {
    id: 2,
    articleId: 18,
    user: "NoobSlayer99",
    text: "I disagree with this take.",
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 3,
    articleId: 18,
    user: "EsportsFan",
    text: "Great insights into the new update!",
    timestamp: "2025-03-06T14:15:00Z",
  },
  {
    id: 4,
    articleId: 5,
    user: "Gamer123",
    text: "This review is spot on!",
    timestamp: "2025-03-06T12:00:00Z",
  },
  {
    id: 5,
    articleId: 9,
    user: "NoobSlayer99",
    text: "I disagree with this take.",
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 6,
    articleId: 9,
    user: "EsportsFan",
    text: "Great insights into the new update!",
    timestamp: "2025-03-06T14:15:00Z",
  },
  {
    id: 7,
    articleId: 9,
    user: "Gamer123",
    text: "This review is spot on!",
    timestamp: "2025-03-06T12:00:00Z",
  },
  {
    id: 8,
    articleId: 9,
    user: "NoobSlayer99",
    text: "I disagree with this take.",
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 9,
    articleId: 10,
    user: "EsportsFan",
    text: "Great insights into the new update!",
    timestamp: "2025-03-06T14:15:00Z",
  },
  {
    id: 10,
    articleId: 11,
    user: "Gamer123",
    text: "This review is spot on!",
    timestamp: "2025-03-06T12:00:00Z",
  },
  {
    id: 11,
    articleId: 11,
    user: "NoobSlayer99",
    text: "I disagree with this take.",
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 12,
    articleId: 14,
    user: "EsportsFan",
    text: "Great insights into the new update!",
    timestamp: "2025-03-06T14:15:00Z",
  },
  {
    id: 13,
    articleId: 14,
    user: "Gamer123",
    text: "This review is spot on!",
    timestamp: "2025-03-06T12:00:00Z",
  },
  {
    id: 14,
    articleId: 15,
    user: "NoobSlayer99",
    text: "I disagree with this take.",
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 15,
    articleId: 16,
    user: "EsportsFan",
    text: "Great insights into the new update!",
    timestamp: "2025-03-06T14:15:00Z",
  },
  {
    id: 16,
    articleId: 17,
    user: "Gamer123",
    text: "This review is spot on!",
    timestamp: "2025-03-06T12:00:00Z",
  },
  {
    id: 17,
    articleId: 20,
    user: "NoobSlayer99",
    text: "I disagree with this take.",
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 18,
    articleId: 20,
    user: "EsportsFan",
    text: "Great insights into the new update!",
    timestamp: "2025-03-06T14:15:00Z",
  },
];

const articles: Article[] = [
  // Reviews (5)
  {
    id: 1,
    title: "Halo Infinite Review",
    description: "Deep dive into Halo Infinite gameplay.",
    imageURL: halo900x600,
    review: true,
    rating: 8,
    featured: false,
    topArticle: false,
    authorId: 1,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 2,
    title: "Elden Ring Review",
    description: "Elden Ring redefines the open-world RPG genre.",
    imageURL: eldenring900x600,
    review: true,
    rating: 9,
    featured: false,
    topArticle: false,
    authorId: 1,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 3,
    title: "God of War Ragnarok Review",
    description: "Kratos returns in an epic Norse adventure.",
    imageURL: gow900x600,
    review: true,
    rating: 10,
    featured: false,
    topArticle: false,
    authorId: 2,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 4,
    title: "Cyberpunk 2077 Phantom Liberty Review",
    description: "Does the DLC redeem Cyberpunk 2077?",
    imageURL: cyberpunk900x600,
    review: true,
    rating: 7,
    featured: false,
    topArticle: false,
    authorId: 3,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 5,
    title: "Starfield Review",
    description: "Is Starfield the space RPG we've been waiting for?",
    imageURL: starfield900x600,
    review: true,
    rating: 6,
    featured: false,
    topArticle: false,
    authorId: 3,
    timestamp: "2025-03-06T13:30:00Z",
  },

  // Featured Articles (5)
  {
    id: 6,
    title: "Top 10 Indie Games of 2025",
    description: "A curated list of must-play indie gems.",
    imageURL: indie900x600,
    review: false,
    rating: null,
    featured: true,
    topArticle: false,
    authorId: 2,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 7,
    title: "GTA VI Release Date Confirmed",
    description: "Rockstar finally confirms the highly anticipated sequel.",
    imageURL: gtavi900x600,
    review: false,
    rating: null,
    featured: true,
    topArticle: false,
    authorId: 1,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 8,
    title: "AI in Game Development",
    description: "How AI is changing the future of gaming.",
    imageURL: ai900x600,
    review: false,
    rating: null,
    featured: true,
    topArticle: false,
    authorId: 3,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 9,
    title: "Horizon Forbidden West DLC Announced",
    description: "Guerrilla Games teases new adventures.",
    imageURL: horizonzerodawn900x600,
    review: false,
    rating: null,
    featured: true,
    topArticle: false,
    authorId: 2,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 10,
    title: "Call of Duty 2025 Preview",
    description: "Everything we know so far about the next COD.",
    imageURL: codblackops900x600,
    review: true,
    rating: 8.5,
    featured: true,
    topArticle: false,
    authorId: 1,
    timestamp: "2025-03-06T13:30:00Z",
  },

  // Top Articles (5)
  {
    id: 11,
    title: "Valorant Patch 8.01 Breakdown",
    description: "All the agent buffs and nerfs in patch 8.01.",
    imageURL: valorant900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: true,
    authorId: 2,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 12,
    title: "The Rise of Esports in 2025",
    description: "Why competitive gaming is bigger than ever.",
    imageURL: esports900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: true,
    authorId: 3,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 13,
    title: "Nintendo Switch 2 Rumors",
    description: "Everything we know about the next-gen Switch.",
    imageURL: nintendo900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: true,
    authorId: 1,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 14,
    title: "The Future of VR Gaming",
    description: "How VR is evolving in the next decade.",
    imageURL: psvr900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: true,
    authorId: 2,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 15,
    title: "Upcoming PS5 Exclusives",
    description: "A list of the biggest PS5 exclusives coming soon.",
    imageURL: pse900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: true,
    authorId: 3,
    timestamp: "2025-03-06T13:30:00Z",
  },

  // Regular Articles (5)
  {
    id: 16,
    title: "Best Gaming Keyboards in 2025",
    description: "A roundup of the best mechanical keyboards.",
    imageURL: keyboards900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 3,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 17,
    title: "How to Build a Gaming PC",
    description: "A step-by-step guide for beginners.",
    imageURL: gamingpc900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 1,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 18,
    title: "The Evolution of Open-World Games",
    description: "How open-world design has changed over the years.",
    imageURL: rdr2900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 2,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 19,
    title: "Gaming Chairs: Are They Worth It?",
    description: "We tested top gaming chairs so you don’t have to.",
    imageURL: gamingchairs900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 3,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 20,
    title: "The Most Anticipated Games of 2025",
    description: "What games should you be excited for this year?",
    imageURL: anticipated2025games900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 1,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 21,
    title: "Next-Gen Console War: PlayStation 6 vs. Xbox Series Z",
    description:
      "A deep dive into what we know so far about the next-gen console battle.",
    imageURL: nextgenconsoles900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 2,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 22,
    title: "The Rise of Mobile Gaming in 2025",
    description:
      "How mobile games are becoming more advanced and rivaling console experiences.",
    imageURL: mobilegaming900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 1,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 23,
    title: "Streaming Services for Gamers: Which One is Best?",
    description:
      "Comparing Game Pass, PlayStation Plus, and other gaming subscriptions.",
    imageURL: gamingstreaming900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 3,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 24,
    title: "The Impact of AI on Game Development",
    description:
      "How artificial intelligence is shaping the future of game design.",
    imageURL: aingames900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 2,
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 25,
    title: "Retro Gaming Revival: Why Old Games Are Making a Comeback",
    description:
      "Exploring the nostalgia-fueled return of classic video games.",
    imageURL: retrogaming900x600,
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 1,
    timestamp: "2025-03-06T13:30:00Z",
  },
];

export { articles, authors, comments };
