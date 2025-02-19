import { SectionType } from "@/utils/interface";
import { propertyData } from "./propertyData";
import { builderData } from "./builderData";

export const sectionData: SectionType[] = [
  {
    title: "Fast-Moving Properties",
    projects: [
      {
        ...propertyData,
        title: "Mantri Alpyra",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-1.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "4, 5 BHK Villas | 5000 Sq. Ft. Onwards",
        location: "Bannerghatta Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-1.png",
          title: "Mantri Developers",
          subtitle: "Luxury Living Experts",
        },
        href: "/property/mantri-alpyra",
      },
      {
        ...propertyData,
        title: "Prestige Golfshire Estates",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-2.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "5, 6 BHK Villas | 8000 Sq. Ft. Onwards",
        location: "Off Sarjapur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-2.png",
          title: "Prestige Group",
          subtitle: "Luxury Living Spaces",
        },
        href: "/property/prestige-golfshire-estates",
      },
      {
        ...propertyData,
        title: "Sobha Windsor",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-3.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "4, 5 BHK Villas | 6000 Sq. Ft. Onwards",
        location: "Bannerghatta Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-3.png",
          title: "Sobha",
          subtitle: "Luxury Homes Built",
        },
        href: "/property/sobha-windsor",
      },
      {
        ...propertyData,
        title: "L&T Raintree Boulevard",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-4.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "5, 6 BHK Villas | 7000 Sq. Ft. Onwards",
        location: "Varthur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-4.png",
          title: "L&T Realty",
          subtitle: "Engineering Excellence",
        },
        href: "/property/lnt-raintree-boulevard",
      },
      {
        ...propertyData,
        title: "DLF Park Place",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-1.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "5, 6 BHK Villas | 10000 Sq. Ft. Onwards",
        location: "Begur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-1.png",
          title: "DLF Limited",
          subtitle: "World-Class Living",
        },
        href: "/property/dlf-park-place",
      },
    ],
  },
  {
    title: "Luxury Properties",
    projects: [
      {
        ...propertyData,
        title: "Subha Belgravia Villas at Subha Ecocity",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-1.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "2, 3, 4 BHK Flats | 750 Sq. Ft. to 2000 Sq. Ft. (Carpet)",
        location: "Chandapura, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-2.png",
          title: "Shuba",
          subtitle: "Quality Home Builders",
        },
        href: "/property/Subha-Belgravia-Villas",
      },
      {
        ...propertyData,
        title: "Godrej Splendour",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-2.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "2, 3 BHK Apartments | 900 Sq. Ft. Onwards",
        location: "Whitefield, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-3.png",
          title: "Godrej Properties",
          subtitle: "Trusted Real Estate",
        },
        href: "/property/godrej-splendour",
      },
      {
        ...propertyData,
        title: "Prestige Lakeside Habitat",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-4.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "2, 3, 4 BHK Apartments | 1000 Sq. Ft. Onwards",
        location: "Varthur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-1.png",
          title: "Prestige Group",
          subtitle: "Luxury Living Spaces",
        },
        href: "/property/prestige-lakeside-habitat",
      },
      {
        ...propertyData,
        title: "Sobha Sentosa",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-1.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "4, 5 BHK Villas | 3000 Sq. Ft. Onwards",
        location: "Electronic City, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-2.png",
          title: "Sobha",
          subtitle: "Luxury Homes Built",
        },
        href: "/property/sobha-sentosa",
      },
      {
        ...propertyData,
        title: "Salarpuria Sattva Serene",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-3.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "4, 5 BHK Villas | 4000 Sq. Ft. Onwards",
        location: "Sarjapur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-4.png",
          title: "Salarpuria Sattva",
          subtitle: "Lifestyle Creators",
        },
        href: "/property/salarpuria-sattva-serene",
      },
      {
        ...propertyData,
        title: "Purvankara Provident Park",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-4.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "2, 3 BHK Apartments | 800 Sq. Ft. Onwards",
        location: "Whitefield, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-1.png",
          title: "Purvankara",
          subtitle: "Building Trust Since",
        },
        href: "/property/purvankara-provident-park",
      },
    ],
  },
  {
    title: "Affordable Homes",
    projects: [
      {
        ...propertyData,
        title: "Mahindra Lifespaces Luminare",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-2.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "4, 5 BHK Villas | 4500 Sq. Ft. Onwards",
        location: "Kanakapura Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-2.png",
          title: "Mahindra Lifespaces",
          subtitle: "Rise. Reimagine. Live.",
        },
        href: "/property/mahindra-lifespaces-luminare",
      },
      {
        ...propertyData,
        title: "Tata Promont",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-3.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "6, 7 BHK Villas | 12000 Sq. Ft. Onwards",
        location: "Electronic City, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-3.png",
          title: "Tata Housing",
          subtitle: "Innovation in Living",
        },
        href: "/property/tata-promont",
      },
      {
        ...propertyData,
        title: "Purvankara Provident Park",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-4.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "2, 3 BHK Apartments | 800 Sq. Ft. Onwards",
        location: "Whitefield, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-2.png",
          title: "Purvankara",
          subtitle: "Building Trust Since",
        },
        href: "/property/purvankara-provident-park",
      },
      {
        ...propertyData,
        title: "Brigade Meadows",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-2.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "2, 3 BHK Apartments | 900 Sq. Ft. Onwards",
        location: "Hosur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-4.png",
          title: "Brigade Group",
          subtitle: "Urban Living Defined",
        },
        href: "/property/brigade-meadows",
      },
      {
        ...propertyData,
        title: "Brigade Meadows",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-2.png",
          },
        ],
        minPrice: 28293423,
        maxPrice: 68492000,
        description: "2, 3 BHK Apartments | 900 Sq. Ft. Onwards",
        location: "Hosur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-3.png",
          title: "Brigade Group",
          subtitle: "Urban Living Defined",
        },
        href: "/property/brigade-meadows",
      },
    ],
  },
];
