export type Dealer = {
    id: string;
    name: string;
    contact: string;
    phone: string;
    whatsapp: string;
    address: string;
    city: string;
    district: string;
    province: string;
    lat: number;   // for future real map use
    lng: number;
  };
  
  export const DEALERS: Dealer[] = [
    {
      id: "d1",
      name: "New Jayalath Agro",
      contact: "Mr. Jayalath",
      phone: "0771234567",
      whatsapp: "94771234567",
      address: "No 45, Main Street",
      city: "Kurunegala",
      district: "Kurunegala",
      province: "North Western",
      lat: 7.4863,
      lng: 80.3623,
    },
    {
      id: "d2",
      name: "Green Field Traders",
      contact: "Mr. Nimal",
      phone: "0762345678",
      whatsapp: "94762345678",
      address: "Colombo Road",
      city: "Colombo",
      district: "Colombo",
      province: "Western",
      lat: 6.9271,
      lng: 79.8612,
    },
    {
      id: "d3",
      name: "Rural Agro Mart",
      contact: "Ms. Lakshika",
      phone: "0713456789",
      whatsapp: "94713456789",
      address: "Town Area",
      city: "Anuradhapura",
      district: "Anuradhapura",
      province: "North Central",
      lat: 8.3114,
      lng: 80.4037,
    },
    {
      id: "d4",
      name: "Southern Farm Solutions",
      contact: "Mr. Indika",
      phone: "0784567890",
      whatsapp: "94784567890",
      address: "Matara Road",
      city: "Galle",
      district: "Galle",
      province: "Southern",
      lat: 6.0535,
      lng: 80.2210,
    },
    {
      id: "d5",
      name: "Kandy Agro House",
      contact: "Mr. Chinthaka",
      phone: "0755678901",
      whatsapp: "94755678901",
      address: "Peradeniya Rd",
      city: "Kandy",
      district: "Kandy",
      province: "Central",
      lat: 7.2906,
      lng: 80.6337,
    },
    {
      id: "d6",
      name: "Eastern Growers",
      contact: "Mr. Faisal",
      phone: "0776789012",
      whatsapp: "94776789012",
      address: "Main Bazaar",
      city: "Batticaloa",
      district: "Batticaloa",
      province: "Eastern",
      lat: 7.7170,
      lng: 81.7000,
    },
    {
      id: "d7",
      name: "Jaffna Agro Centre",
      contact: "Mr. Suresh",
      phone: "0727890123",
      whatsapp: "94727890123",
      address: "Hospital Road",
      city: "Jaffna",
      district: "Jaffna",
      province: "Northern",
      lat: 9.6615,
      lng: 80.0255,
    },
    {
      id: "d8",
      name: "Uva Farm Point",
      contact: "Mr. Pradeep",
      phone: "0708901234",
      whatsapp: "94708901234",
      address: "Badulla Town",
      city: "Badulla",
      district: "Badulla",
      province: "Uva",
      lat: 6.9934,
      lng: 81.0550,
    },
  ];
  