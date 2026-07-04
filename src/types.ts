export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  specs: {
    channels: string;
    constellations: string;
    rtkAccuracy: string;
    staticAccuracy: string;
    battery: string;
    weight: string;
    protection: string;
  };
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  detailDescription: string;
  icon: string;
  benefits: string[];
  recommendedDevices: string[];
  caseStudy: {
    title: string;
    location: string;
    result: string;
  };
}

export interface News {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string[];
  image: string;
  author: string;
  readTime: string;
}

export interface VideoClip {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  youtubeId?: string;
  subtitleList: { time: number; text: string }[];
}
