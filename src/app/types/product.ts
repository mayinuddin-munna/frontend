export interface Medium {
  type: string;
  url: string;
}

export interface Checklist {
  title: string;
  description: string;
}

export interface CtaText {
  text: string;
  url: string;
}

export interface Seo {
  title: string;
  description: string;
  image: string;
}

export interface Section {
  type: "instructor" | "features" | "pointers" | "exclusive" | "about";
  title: string;
  description: string;
  items: any[]; // Adjust based on actual response structure
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}
