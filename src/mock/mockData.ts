import valorant900x600 from "../mock/articles/valorant900x600.jpg";
import esports900x600 from "../mock/articles/esports900x600.jpg";
import nintendo900x600 from "../mock/articles/nintendoswitch2900x600.jpg";
import psvr900x600 from "../mock/articles/psvr900x600.jpg";
import pse900x600 from "../mock/articles/psexclusive900x600.jpg";

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
    articleId: 1,
    user: "Gamer123",
    text: "This review is spot on!",
    timestamp: "2025-03-06T12:00:00Z",
  },
  {
    id: 2,
    articleId: 2,
    user: "NoobSlayer99",
    text: "I disagree with this take.",
    timestamp: "2025-03-06T13:30:00Z",
  },
  {
    id: 3,
    articleId: 3,
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
    imageURL: "https://halo.com/review.jpg",
    review: true,
    rating: 8,
    featured: false,
    topArticle: false,
    authorId: 1,
  },
  {
    id: 2,
    title: "Elden Ring Review",
    description: "Elden Ring redefines the open-world RPG genre.",
    imageURL: "https://eldenring.com/review.jpg",
    review: true,
    rating: 9,
    featured: false,
    topArticle: false,
    authorId: 1,
  },
  {
    id: 3,
    title: "God of War Ragnarok Review",
    description: "Kratos returns in an epic Norse adventure.",
    imageURL: "https://godofwar.com/review.jpg",
    review: true,
    rating: 10,
    featured: false,
    topArticle: false,
    authorId: 2,
  },
  {
    id: 4,
    title: "Cyberpunk 2077 Phantom Liberty Review",
    description: "Does the DLC redeem Cyberpunk 2077?",
    imageURL: "https://cyberpunk.com/review.jpg",
    review: true,
    rating: 7,
    featured: false,
    topArticle: false,
    authorId: 3,
  },
  {
    id: 5,
    title: "Starfield Review",
    description: "Is Starfield the space RPG we've been waiting for?",
    imageURL: "https://starfield.com/review.jpg",
    review: true,
    rating: 6,
    featured: false,
    topArticle: false,
    authorId: 3,
  },

  // Featured Articles (5)
  {
    id: 6,
    title: "Top 10 Indie Games of 2025",
    description: "A curated list of must-play indie gems.",
    imageURL: "https://indiegames.com/top10.jpg",
    review: false,
    rating: null,
    featured: true,
    topArticle: false,
    authorId: 2,
  },
  {
    id: 7,
    title: "GTA VI Release Date Confirmed",
    description: "Rockstar finally confirms the highly anticipated sequel.",
    imageURL: "https://gta.com/news.jpg",
    review: false,
    rating: null,
    featured: true,
    topArticle: false,
    authorId: 1,
  },
  {
    id: 8,
    title: "AI in Game Development",
    description: "How AI is changing the future of gaming.",
    imageURL: "https://ai.com/gaming.jpg",
    review: false,
    rating: null,
    featured: true,
    topArticle: false,
    authorId: 3,
  },
  {
    id: 9,
    title: "Horizon Forbidden West DLC Announced",
    description: "Guerrilla Games teases new adventures.",
    imageURL: "https://horizon.com/dlc.jpg",
    review: false,
    rating: null,
    featured: true,
    topArticle: false,
    authorId: 2,
  },
  {
    id: 10,
    title: "Call of Duty 2025 Leaks",
    description: "Everything we know so far about the next COD.",
    imageURL: "https://cod.com/leaks.jpg",
    review: false,
    rating: null,
    featured: true,
    topArticle: false,
    authorId: 1,
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
  },

  // Regular Articles (5)
  {
    id: 16,
    title: "Best Gaming Keyboards in 2025",
    description: "A roundup of the best mechanical keyboards.",
    imageURL: "https://hardware.com/keyboards.jpg",
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 3,
  },
  {
    id: 17,
    title: "How to Build a Gaming PC",
    description: "A step-by-step guide for beginners.",
    imageURL: "https://pcbuild.com/guide.jpg",
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 1,
  },
  {
    id: 18,
    title: "The Evolution of Open-World Games",
    description: "How open-world design has changed over the years.",
    imageURL: "https://openworld.com/history.jpg",
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 2,
  },
  {
    id: 19,
    title: "Gaming Chairs: Are They Worth It?",
    description: "We tested top gaming chairs so you don’t have to.",
    imageURL: "https://chairs.com/review.jpg",
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 3,
  },
  {
    id: 20,
    title: "The Most Anticipated Games of 2025",
    description: "What games should you be excited for this year?",
    imageURL: "https://games.com/anticipated.jpg",
    review: false,
    rating: null,
    featured: false,
    topArticle: false,
    authorId: 1,
  },
];

export { articles, authors, comments };
