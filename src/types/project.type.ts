export type Project = {
  _id: string;
  generalInfo: {
    name: string;
    province: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    price: number;
    type: string;
    rooms: string;
    bathrooms: number;
    size: number;
    living_area: number;
    terrace: number;
    reference: string;
  };
  images: { original: string; small: string; medium: string; large: string }[];
};
