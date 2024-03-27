import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const form = [
    {
        title: "Academic Year",
        values: ["2021", "2022"]
    }
]

export const form2 = [
    {
        title: "Academic Year",
        values: ["2021", "2022"]
    }
]

export const years = ["2024", "2023", "2022", "2021", "2020", "2019"]

// faculty/department/curriculum
export const faculties = [
    {
        name: "Engineering",
        department: [
            {
                name: "Telecommucations Engineering",
                curriculum: ["Telecommunications Engineering", "Communications and Electronics Engineering (Continuing Program)", "Communications and Network Engineering", "Space and Geospatial Engineering", "Telecommunications and Network Engineering"]
            },
            {
                name: "Electrical Engineering",
                curriculum: ["Electrical Engineering", "Electrical Energy Engineering", "Energe Engineering"]
            },
            {
                name: "Electronic Engineering",
                curriculum: ["Biomedical Engineering", "Electronics Engineering"]
            },
            {
                name: "Control Engineering",
                curriculum: ["Control Engineering", "Mechatronics Engineering"]
            },
            {
                name: "Computer Engineering",
                curriculum: ["Computer Engineering", "Computer Engineering (Continuing Education)", "Information Engineering", "Software Engineering (International program)", "IoT System and Information Engineering", "Computer Engineering (International program)", "Music Engineering and Multimedia"]
            },
            {
                name: "Mechanical Engineering",
                curriculum: ["Mechanical Engineering", "Mechanical Engineering (Argriculture)", "Rail Transportation Engineering"]
            },
            {
                name: "Instrumentation Engineering",
                curriculum: ["Intrumentation Engineering", "Automation Engineering", "Mechatronics and Automation Engineering"]
            },
            {
                name: "Civil Engineering",
                curriculum: ["Civil Engineering", "Civil Engineering (Continuing)", "Civil Engineering (Internation program)"]
            },
            {
                name: "Agricultural Engineering",
                curriculum: ["Agricultural Engineering", "Agro-Industrial Systems Engineering", "Agri-Intelligence Engineering"]
            },
            {
                name: "Chemical Engineering",
                curriculum: ["Chemical Engineering", "Chemical Engineering (International program)", "Petrochemical Engineering"]
            },
            {
                name: "Food Engineering",
                curriculum: ["Food Engineering"]
            },
            {
                name: "Industrial Engineering",
                curriculum: ["Industrial Engineering and Digital Management Systems (Internation Program)", "Financial Engineering (International program)", "Industrial Engineering", "Industrial Engineering and Logistics Management (Internation program)", "Integrated Production Engineering", "Production Design and Materials Engineering"]
            },
            {
                name: "Aeronautical Engineering and Commercial Pilot",
                curriculum: ["Aeronaitical Engineering and Commercial Pilot"]
            },
            {
                name: "Mechatronics Engineering",
                curriculum: ["Mechanical Engineering (International program)"]
            },
            {
                name: "Biomedical Engineering",
                curriculum: ["Biomedical Engineering (International program)"]
            },
            {
                name: "School of International and Interdisciplinary Engineering Programs (SIIE)",
                curriculum: ["Mechanical Engineering (International program)", "Electrical Engineering (International program)", "Engineering and Technology Management (International program)", "Computer Innovation Engineering (International program)", "Energy Engineering (International program)"]
            }
        ]
    },
    {
        name: "Architecture, Art, and Design",
        department: [
            {
                name: "Interior Architecture",
                curriculum: ["Interior Architecture"]
            }
        ]
    },
    {
        name: "Industrial Education and Technology",
        department: [
            {
                name: "Architectural Education",
                curriculum: ["Architecture", "Interior Architecture", "Industrial Design"]
            }
        ]
    },
    {
        name: "Agricultural Technology",
        department: [
            {
                name: "Agricultural Bussiness Administration",
                curriculum: ["Agricultural Industry", "Management Technology"]
            }
        ]
    },
    {
        name: "Science",
        department: [
            {
                name: "Mathematics and Computer Science",
                curriculum: ["Computer Science"]
            }
        ]
    },
    {
        name: "Food Industry",
        department: [
            {
                name: "Food Industry",
                curriculum: ["Food Process Engineering", "Food Science and Technology"]
            }
        ]
    },
    {
        name: "Information Technology",
        department: [
            {
                name: "Information Technology",
                curriculum: ["Information Technology"]
            }
        ]
    },
    {
        name: "International College",
        department: [
            {
                name: "International College",
                curriculum: ["Software Engineering"]
            }
        ]
    },
    {
        name: "Materials Innovation and Technology",
        department: [
            {
                name: "Nanoscience and Nanotechnology",
                curriculum: ["Nanomaterial Engineering"]
            }
        ]
    },
    {
        name: "Advanced Manufacturing Innovation",
        department: [
            {
                name: "Manufacturing System Technology",
                curriculum: ["Manufacturing System Engineering"]
            }
        ]
    },
    {
        name: "KMITL Business School",
        department: [
            {
                name: "Department of Business",
                curriculum: ["Management Technology"]
            }
        ]
    },
    {
        name: "International Academy of Aviation Industry",
        department: [
            {
                name: "Aeronautical Engineering",
                curriculum: ["Aeronautical Engineering and Commercial Pilot (International program)"]
            }
        ]
    },
    {
        name: "Liberal Art",
        department: [
            {
                name: "Languages",
                curriculum: ["Japanese", "English", "Chinese for Industry", "Business Japanese"]
            }
        ]
    },
    {
        name: "Medicine",
        department: [
            {
                name: "International Medical College",
                curriculum: ["Doctor of Medicine (International program)", "Biomedical Sciences (International program)"]
            }
        ]
    },
    {
        name: "Innovation and Industrial Management",
        department: [
            {
                name: "College of Education Innovation Research",
                curriculum: ["College of Education Innovation Research"]
            }
        ]
    },
    {
        name: "Music Science and Engineering",
        department: [
            {
                name: "Music Engineering and Multimedia",
                curriculum: ["Music Enginering and Multimedia"]
            }
        ]
    },
    {
        name: "Dentistry",
        department: [
            {
                name: "Dentistry",
                curriculum: ["Doctor of Dental Surgery (International program)"]
            }
        ]
    },
    {
        name: "Prince of Chumphon Campus",
        department: [
            {
                name: "Engineering",
                curriculum: ["Mechanical Engineering", "Electronics Engineering"]
            }
        ]
    },
    {
        name: "General Education",
        department: [
            {
                name: "General Education",
                curriculum: ["General Education"]
            }
        ]
    },    
    {
        name: "International Exchange Student",
        department: [
            {
                name: "International Exchange Student",
                curriculum: ["International Exchange Student"]
            }
        ]
    }  
]