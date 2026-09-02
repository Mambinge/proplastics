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
    name: "Harare (Head Office & Factory)",
    role: "Head office, manufacturing plant and primary distribution hub",
    address: "Harare Drive, Msasa, Harare, Zimbabwe",
    phone: "08004464",
    lat: -17.8292,
    lng: 31.1367,
  },
  {
    name: "Bulawayo Branch",
    role: "Regional sales and distribution",
    address: "Bulawayo, Zimbabwe",
    phone: "08004464",
    lat: -20.15,
    lng: 28.5833,
  },
  {
    name: "Mutare Branch",
    role: "Regional sales and distribution",
    address: "Mutare, Zimbabwe",
    phone: "08004464",
    lat: -18.9707,
    lng: 32.6709,
  },
  {
    name: "Gweru Branch",
    role: "Regional sales and distribution",
    address: "Gweru, Zimbabwe",
    phone: "08004464",
    lat: -19.4614,
    lng: 29.8022,
  },
  {
    name: "Masvingo Branch",
    role: "Regional sales and distribution",
    address: "Masvingo, Zimbabwe",
    phone: "08004464",
    lat: -20.0744,
    lng: 30.8328,
  },
];
