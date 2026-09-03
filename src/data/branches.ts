export type Branch = {
  name: string;
  role: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
};

export const branches: Branch[] = [
  {
    name: "Harare (Head Office)",
    role: "Head office and primary distribution hub",
    address: "5 Spurn Road, New Ardbennie, P.O. Box CY1199, Causeway, Harare, Zimbabwe",
    phone: "+263 242 621651-5",
    lat: -17.85,
    lng: 31.02,
  },
  {
    name: "Bulawayo Branch",
    role: "Regional sales and distribution",
    address: "Military Road (Off Khami Road), P.O. Box RY115, Raylton, Bulawayo, Zimbabwe",
    phone: "+263 292 68396 / 62059",
    lat: -20.145,
    lng: 28.568,
  },
  {
    name: "Gweru Branch",
    role: "Regional sales and distribution",
    address: "1041 Coventry Road, Gweru, Zimbabwe",
    phone: "+263 54 2222277",
    lat: -19.4614,
    lng: 29.8022,
  },
  {
    name: "Zas Branch",
    role: "Zimbabwe Agricultural Show grounds outlet",
    address: "Stand No. 14, Main Gate, 1st Avenue, Zimbabwe Agricultural Show, Harare",
    phone: "+263 242 751735",
    lat: -17.8265,
    lng: 31.0347,
  },
];
