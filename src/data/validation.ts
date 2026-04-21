export type ValidationItem = {
  id: string;
  videoUrl: string;
  thumbnail: string; 
  customerName: string;
  description: string;
  rating: number; 
};

export const VALIDATIONS: ValidationItem[] = [
  {
    id: "v1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    thumbnail: "/images/validation_01.jpg", 
    customerName: "Farmer from Kurunegala",
    description: "The torque on this model is unmatched for our terrain. Used it for 14 hours straight without a single hitch.",
    rating: 5,
  },
  {
    id: "v2",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/validation_02.jpg",
    customerName: "Esther M. - Highland Tea Estate",
    description: "Precision planting saves us about 15% on seed waste. It's a heavy machine, but the results speak for themselves.",
    rating: 5,
  },
  {
    id: "v3",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/validation_03.jpg",
    customerName: "Ranasinghe W.",
    description: "The support team at 3DHT is the real MVP. Had a question on calibration and they walked me through it in minutes.",
    rating: 5,
  }
];

export const TESTIMONIALS = [
  {
    id: "t1",
    image: "/images/farmer_testimonial_01.jpg",
    quote: "The solar system provided uninterrupted power for our remote assets when the main grid failed.",
    author: "MARCUS THORNE",
    role: "FARM OWNER"
  },
  {
    id: "t2",
    image: "/images/farmer_testimonial_02.jpg",
    quote: "Testing these sprayers for 500+ hours really shows in the field durability.",
    author: "SAMAN K.",
    role: "ESTATE MANAGER"
  }
];