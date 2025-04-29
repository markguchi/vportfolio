import { db } from './firebase_config';
import { collection, getDocs, orderBy, Timestamp } from "firebase/firestore";
import pandaliveryLogo from '../images/resume/pandalivery_logo.png'
import asiawiseLogo from '../images/resume/asiawise_logo.png'
import adnuLogo from '../images/resume/adnu_logo.png'
import hahsyLogo from '../images/resume/hahsy_logo.png'
import introductionCertificate from '../images/resume/intro_certification.png'
import cybersecurtityCertificate from '../images/resume/cybersecurity_certification.png'
import { faDesktop, faBriefcase, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
  
  // export const works = [
  //   {
  //     "id": "arluz-logo",
  //     "title": "ArLuz Logo Animation",
  //     "category": "design",
  //     "subtitle": "Commission",
  //     "description": "An animation of ArLuz logo.",
  //     "years": [2023],
  //     "technologies": ["photoshop", "aftereffects"],
  //     "tags": ["AfterEffects", "Graphic design", "Animation", "Photoshop"],
  //     "screens": [
  //         {
  //         "img": arluzlogo1
  //         },
  //         {
  //         "img": arluzlogo2
  //         },
  //         {
  //         "img": arluzlogo3
  //         },
  //         {
  //         "img": arluzlogo4
  //         }
  //     ],
  //     "content": { "type": 'video', "src": arluzlogocontent }
  //   },
  //   {
  //     "id": "arluz",
  //     "title": "Ar.Luz",
  //     "category": "development",
  //     "subtitle": "Commission",
  //     "description": "An Android application that handles the sales and accounting of the medium enterprise ArLuz.",
  //     "years": [2023],
  //     "languages": ["dart"],
  //     "technologies": ["flutter", "firebase", "photoshop"],
  //     "tags": ["Flutter", "Android", "Mobile", "Photoshop"],
  //     "screens": [
  //       {
  //       "img": arluz1,
  //       },
  //       {
  //       "img": arluz2,
  //       },
  //       {
  //       "img": arluz3,
  //       },
  //       {
  //       "img": arluz4,
  //       },
  //       {
  //       "img": arluz5,
  //       },
  //       {
  //       "img": arluz6,
  //       },
  //       {
  //       "img": arluz7,
  //       },
  //       {
  //       "img": arluz8,
  //       },
  //       {
  //       "img": arluz9,
  //       },
  //       {
  //       "img": arluz10,
  //       },
  //       {
  //       "img": arluz11,
  //       },
  //       {
  //       "img": arluz12,
  //       },
  //       {
  //       "img": arluz13,
  //       },
  //     ]
  //   },
  //   {
  //     "id": "woop-admin",
  //     "title": "Woop! Admin",
  //     "category": "development",
  //     "subtitle": "Internship Project",
  //     "description": "Woop! Admin is the web app component of Woop! developed for Pandalivery employees that aids in handling riders, orders, and customer concerns.",
  //     "years": [2023],
  //     "contributions": [
  //         "Spearheaded the documentation process",
  //         "Lead the UI/UX Team",
  //         "Oversaw front-end developers' works",
  //         "Developed the web application",
  //         "Created the assets"
  //     ],
  //     "languages": ["javascript", "html", "css", "python"],
  //     "technologies": ["react", "bootstrap", "font_awesome", "django"],
  //     "tags": ["Web development", "UI design", "Front-end", "Back-end", "Django", "Javascript", "HTML", "CSS", "Bootstrap", "FontAwesome"],
  //     "screens": [
  //         {
  //         "img": woopWeb2,
  //         "desc": "The scheduling page allows admins to approve orders and assign them to riders.",
  //         },
  //         {
  //         "img": woopWeb1,
  //         "desc": "The records page allows admins to review completed, denied, and approved orders.",
  //         },
  //         {
  //         "img": woopWeb3,
  //         "desc": "The establishments page allows admin to add, edit, and remove partner stores.",
  //         }
  //       ]
  //   },
  //   {
  //     "id": "woop-riders",
  //     "title": "Woop! for Riders",
  //     "category": "development",
  //     "subtitle": "Internship Project",
  //     "description": "Woop! for Riders is a mobile component of Woop! where riders can fulfill orders assigned to them.",
  //     "years": [2023],
  //     "contributions": [
  //         "Spearheaded the documentation process",
  //         "Lead the UI/UX Team",
  //         "Oversaw front-end developers' works",
  //         "Developed the UI of the mobile rider application",
  //         "Created the assets"
  //     ],
  //     "languages": ["dart"],
  //     "technologies": ["flutter", "font_awesome"],
  //     "tags": ["Web development", "UI design", "Front-end", "Back-end", "Django", "FontAwesome", "Flutter", "Dart", "Android"],
  //     "screens": [
  //         {
  //         "img": woopRider1,
  //         "desc": "The login screen allows riders to sign in.",
  //         },
  //         {
  //         "img": woopRider2,
  //         "desc": "The protected screen determines the rider's shift schedule.",
  //         },
  //         {
  //         "img": woopRider3,
  //         "desc": "The tasks screen allows riders to see the orders assigned to them.",
  //         },
  //         {
  //         "img": woopRider4,
  //         "desc": "The transaction logs screen allows riders to see errands they've accomplished.",
  //         },
  //         {
  //         "img": woopRider5,
  //         "desc": "The account screen allows riders to see their information and schedule.",
  //         }
  //       ]
  //   },
  //   {
  //     "id": "woop",
  //     "title": "Woop!",
  //     "category": "development",
  //     "subtitle": "Internship Project",
  //     "description": "Woop! is the customer mobile component of Woop! In the application, users can place and pay for orders, and send feedback.",
  //     "years": [2023],
  //     "contributions": [
  //         "Spearheaded the documentation process",
  //         "Lead the UI/UX Team",
  //         "Oversaw front-end developers' works",
  //         "Developed the UI of the mobile rider application",
  //         "Created the assets"
  //     ],
  //     "languages": ["dart"],
  //     "technologies": ["flutter", "font_awesome"],
  //     "tags": ["Web development", "UI design", "Front-end", "Back-end", "Django", "Javascript", "HTML", "CSS", "Bootstrap", "FontAwesome", "Flutter", "Dart", "Android"],
  //     "screens": [
  //         {
  //         "img": woopCustomer1,
  //         "desc": "The registration screen allows customers to sign up for Woop!.",
  //         },
  //         {
  //         "img": woopCustomer2,
  //         "desc": "The login screen allows customers to sign in.",
  //         },
  //         {
  //         "img": woopCustomer3,
  //         "desc": "The home screen allows customers to see promotions and select an errand.",
  //         },
  //         {
  //         "img": woopCustomer4,
  //         "desc": "The pasabuy screen allows customers to ask a rider to buy something for them.",
  //         },
  //         {
  //         "img": woopCustomer5,
  //         "desc": "The parcel delivery screen allows customers to ask a rider to deliver a letter, document, or parcel for them.",
  //         },
  //         {
  //         "img": woopCustomer6,
  //         "desc": "The account screen allows customers to see their information and ask for help.",
  //         },
  //       ]
  //   },
  //   {
  //   "id": "woop-assets",
  //   "title": "Woop! Assets",
  //   "category": "design",
  //   "subtitle": "Internship Project",
  //   "description": "A collection of icons, backgrounds, foregrounds, and placeholders used acrossed the different components of Woop!",
  //   "years": [2023],
  //   "technologies": ["photoshop"],
  //   "tags": ["Photoshop", "Graphic design", "Assets", "Icons"],
  //   "screens": [
  //       {
  //       "img": woopAssetModules,
  //       "desc": "Icons for the main services offered by Woop! From top-left to bottom-right: Parcel Delivery, Bills Payment, Food Delivery, Pasabuy, and Custom",
  //       },
  //       {
  //       "img": woopAssetSubModules,
  //       "desc": "Icons for every subservice of Parcel Delivery and Pasabuy. From top-left to bottom-right: Letter, Document, Parcel, Medicine, and Grocery"
  //       },
  //       {
  //       "img": woopAssetMinis,
  //       "desc": "Icons for the main services offered by Woop! but simplified for better readability.",
  //       },
  //       {
  //       "img": woopAssetFeatures,
  //       "desc": "Banner that displays the different features of Woop!.",
  //       },
  //       {
  //       "img": woopAssetPlaceholders,
  //       "desc": "Set of images used in place of empty establishment photos.",
  //       },
  //       {
  //       "img": woopAssetErrors,
  //       "desc": "Icons used in cases of empty lists or data errors.",
  //       },
  //   ]
  //   },
  //   {
  //   "id": "ims",
  //   "title": "IMS",
  //   "category": "development",
  //   "subtitle": "Capstone Project",
  //   "description": "Senior thesis project: An inventory management system that has warehouse mapping, inventory analytics, barcode auto-generation, and a mobile companion that can scan barcodes.",
  //   "years": [2022, 2023],
  //   "reference": "https://inventoryapp-330808.web.app/",
  //   "contributions": [
  //       "Acted as project leader",
  //       "Spearheaded the documentation process",
  //       "Served as the main front-end developer",
  //       "Oversaw UI/UX design",
  //       "Headed the back-end development",
  //   ],
  //   "languages": ["html", "css", "javascript"],
  //   "technologies": ["react", "firebase", "bootstrap", "font_awesome", "photoshop"],
  //   "tags": ["Web development", "UI design", "Front-end", "Back-end", "Django", "Javascript", "HTML", "CSS", "Bootstrap", "FontAwesome"],
  //   "screens": [
  //       {
  //       "img": capstone1,
  //       "desc": "The login page showcases the system's features and allows the users to sign in to IMS."
  //       },
  //       {
  //       "img": capstone2,
  //       "desc": "The home pages displays the summarized performance of the business in 4 different time periods."
  //       },
  //       {
  //       "img": capstone3,
  //       "desc": "From the home page, users can generate an order of a low/empty stock product via email or text message."
  //       },
  //       {
  //       "img": capstone4,
  //       "desc": "The stockcard page lists down all the products of the business and their respective information, and stats."
  //       },
  //       {
  //       "img": capstone5,
  //       "desc": "The warehouse page lists down all the warehouses and their respective map."
  //       },
  //       {
  //       "img": capstone6,
  //       "desc": "Clicking on a storage displays the storage and products inside of it."
  //       },
  //       {
  //       "img": capstone7,
  //       "desc": "When editing is toggled, a storage's flooring, type, and products can be edited."
  //       },
  //       {
  //       "img": capstone8,
  //       "desc": "Products of a storage can be edited to and fro the stockcard and storage."
  //       },
  //       {
  //       "img": capstone9,
  //       "desc": "The transactions page displays all the transactions of the business. Also, each transaction can be voided."
  //       },
  //       {
  //       "img": capstone10,
  //       "desc": "The suppliers page shows all the suppliers of the business and their respective information and catalogue."
  //       },
  //       {
  //       "img": capstone11,
  //       "desc": "The analytics page presents a chart that creates a trend of individual product movement."
  //       },
  //       {
  //       "img": capstone12,
  //       "desc": "The print codes page lists down all the products and their barcode. The list can be converted to pdf."
  //       },
  //       {
  //       "img": capstone13,
  //       "desc": "The generate reports page generates different reports whose data can be filtered out according to product type and date."
  //       },
  //       {
  //       "img": capstone14
  //       },
  //       {
  //       "img": capstone15,
  //       "desc": "The user management page allows addition, modification, deactivation and deletion of mobile users."
  //       }
  //   ]
  //   },
  //   {
  //   "id": "dengue",
  //   "title": "Dengue Fever Pamphlet",
  //   "category": "design",
  //   "subtitle": "Commission",
  //   "description": "A pamphlet that gives relevant information about Dengue Fever — its causes, symptoms, and treatments.",
  //   "years": [2021],
  //   "technologies": ["photoshop"],
  //   "tags": ["Photoshop", "Graphic design", "Pamphlet"],
  //   "screens": [
  //       {
  //       "img": dengue1
  //       },
  //       {
  //       "img": dengue2
  //       }
  //   ]
  //   },
  //   {
  //   "id": "roll",
  //   "title": "Advanced Roll-a-ball Game",
  //   "category": "development",
  //   "subtitle": "Course Project",
  //   "description": "A roll-a-ball game in the first person point of view. The ball must obtain all the orbs while passing over the obstacles.",
  //   "years": [2020],
  //   "languages": ["c#"],
  //   "technologies": ["unity"],
  //   "tags": ["Unity", "Game development", "Scripting"],
  //   "screens": [
  //       {
  //       "img": roll1
  //       },
  //       {
  //       "img": roll2
  //       },
  //       {
  //       "img": roll3
  //       },
  //       {
  //       "img": roll4
  //       }
  //   ],
  //   "content": { "type": 'youtube', "src": "https://www.youtube.com/embed/Siw9wOZV4Bg?rel=0" }
  //   },
  //   {
  //   "id": "uno",
  //   "title": "Uno Punto Game",
  //   "category": "development",
  //   "subtitle": "Course Project",
  //   "description": "Uno Punto is a vertical scrolling game developed using Unity. It is about the adventure of Uno Punto (0.1), the last known living germ from the tragic Baygon spraying incident that destroyed his home and people. He was away when the incident happened so he refuse to believe that his family are gone. Hoping to reunite with his family again, he travels the sanitized world of the homeowner.",
  //   "years": [2020],
  //   "languages": ["c#"],
  //   "technologies": ["unity"],
  //   "tags": ["Unity", "Game development", "Scripting"],
  //   "screens": [
  //       {
  //       "img": uno1
  //       },
  //       {
  //       "img": uno2
  //       },
  //       {
  //       "img": uno3
  //       },
  //       {
  //       "img": uno4
  //       }
  //   ],
  //   "content": { "type": 'youtube', "src": "https://www.youtube.com/embed/HcJnfMdvg8E?rel=0" }
  //   },
  //   {
  //   "id": "asiawise",
  //   "title": "Asiawise Website",
  //   "category": "development",
  //   "subtitle": "Freelance Project",
  //   "description": "A commisioned website that showcases the background and services offered by Asiawise.",
  //   "years": [2020],
  //   "reference": "https://asiawiseu.com/",
  //   "languages": ["html", "javascript", "css", "ruby"],
  //   "technologies": ["rails", "bootstrap", "font_awesome"],
  //   "tags": ["Web development", "UI design", "Front-end", "Ruby", "Javascript", "HTML", "CSS", "Bootstrap", "FontAwesome"],
  //   "screens": [
  //       {
  //       "img": asiawise1,
  //       "desc": "The home section displays announcements and allows users to enroll in their programs."
  //       },
  //       {
  //       "img": asiawise2,
  //       "desc": "The background of Asiawise is displayed via modal and separated by tabs.",
  //       },
  //       {
  //       "img": asiawise3,
  //       "desc": "The programs and products section shows the different programs offered by Asiawise.",
  //       },
  //       {
  //       "img": asiawise4,
  //       "desc": "Clicking on a program displays its full information in a modal.",
  //       }
  //   ]
  //   },
  //   {
  //   "id": "baet",
  //   "title": "Bait's Kakanin Advertisements",
  //   "category": "design",
  //   "subtitle": "Commission",
  //   "description": "A commisioned set of digital posters as advertisement materials for a food business.",
  //   "years": [2020],
  //   "tags": ["Photoshop", "Graphic design", "Advertising"],
  //   "screens": [
  //       {
  //       "img": baet1
  //       },
  //       {
  //       "img": baet2
  //       }
  //   ]
  //   },
  //   {
  //   "id": "napolcom",
  //   "title": "NAPOLCOM Reviewer Book Cover",
  //   "category": "design",
  //   "subtitle": "Commission",
  //   "description": "A commisioned book cover layout for a NAPOLCOM Reviewer.",
  //   "years": [2020],
  //   "technologies": ["photoshop"],
  //   "tags": ["Photoshop", "Graphic design", "Book Cover"],
  //   "screens": [
  //       {
  //       "img": napolcom1
  //       },
  //       {
  //       "img": napolcom2
  //       }
  //   ]
  //   },
  //   {
  //   "id": "asiawise-manuals",
  //   "title": "Asiawise Math Manuals",
  //   "category": "design",
  //   "subtitle": "Commission",
  //   "description": "A collection of manuals on how to interpret or evaluate math topics.",
  //   "years": [2020],
  //   "tags": ["Photoshop", "Graphic design", "Manual", "Infographic"],
  //   "screens": [
  //       {
  //       "img": asiawiseManual1
  //       },
  //       {
  //       "img": asiawiseManual2
  //       },
  //       {
  //       "img": asiawiseManual3
  //       },
  //       {
  //       "img": asiawiseManual4
  //       },
  //       {
  //       "img": asiawiseManual5
  //       }
  //   ]
  //   },
  //   {
  //   "id": "asiawise-banners",
  //   "title": "Asiawise Google Classroom Covers",
  //   "category": "design",
  //   "subtitle": "Commission",
  //   "description": "A collection of cover photos used on the online classes of Asiawise.",
  //   "years": [2020],
  //   "technologies": ["photoshop"],
  //   "tags": ["Photoshop", "Graphic design", "Cover"],
  //   "screens": [
  //       {
  //       "img": asiawiseBanner1
  //       },
  //       {
  //       "img": asiawiseBanner2
  //       },
  //       {
  //       "img": asiawiseBanner3
  //       },
  //       {
  //       "img": asiawiseBanner4
  //       },
  //       {
  //       "img": asiawiseBanner5
  //       },
  //       {
  //       "img": asiawiseBanner6
  //       },
  //       {
  //       "img": asiawiseBanner7
  //       },
  //   ]
  //   },
  //   {
  //   "id": "brigada",
  //   "title": "Brigada Eskwela '20 Banner",
  //   "category": "design",
  //   "subtitle": "Commission",
  //   "description": "A poster for Carolina National High School donation advisory held during their 2020 Brigada Eskwela.",
  //   "years": [2020],
  //   "technologies": ["photoshop"],
  //   "tags": ["Photoshop", "Graphic design", "Banner"],
  //   "screens": [
  //       {
  //       "img": brigada1
  //       },
  //       {
  //       "img": brigada2
  //       }
  //   ]
  //   },
  //   {
  //   "id": "wallpapers",
  //   "title": "Minimalist Wallpapers",
  //   "category": "design",
  //   "subtitle": "Personal Project",
  //   "description": "A diverse set of wallpapers I made for my former Android phone and old desktop pc.",
  //   "years": [2019, 2020],
  //   "technologies": ["photoshop"],
  //   "tags": ["Photoshop", "Graphic design", "Wallpaper"],
  //   "screens": [
  //       {
  //       "img": wallpaper1
  //       },
  //       {
  //       "img": wallpaper2
  //       },
  //       {
  //       "img": wallpaper3
  //       },
  //       {
  //       "img": wallpaper4
  //       },
  //       {
  //       "img": wallpaper5
  //       },
  //       {
  //       "img": wallpaper6
  //       },
  //       {
  //       "img": wallpaper7
  //       },
  //       {
  //       "img": wallpaper8
  //       },
  //       {
  //       "img": wallpaper9
  //       },
  //       {
  //       "img": wallpaper10
  //       },
  //       {
  //       "img": wallpaper11
  //       }
  //   ]
  //   },
  //   {
  //   "id": "katagalugan",
  //   "title": "Katagalugan Album Covers",
  //   "category": "design",
  //   "subtitle": "Personal Project",
  //   "description": "A set of album covers I made for the imaginary band Katagalugan.",
  //   "years": [2019, 2020],
  //   "technologies": ["photoshop"],
  //   "tags": ["Photoshop", "Graphic design", "Album cover"],
  //   "screens": [
  //       {
  //       "img": katagalugan1
  //       },
  //       {
  //       "img": katagalugan2
  //       },
  //       {
  //       "img": katagalugan3
  //       }
  //   ]
  //   },
  //   {
  //   "id": "india",
  //   "title": "India's Living Treasures Booklet",
  //   "category": "design",
  //   "subtitle": "Course  Project",
  //   "description": "A booklet that features three animals that are unique only to India.",
  //   "years": [2018],
  //   "technologies": ["photoshop"],
  //   "tags": ["Photoshop", "Graphic design", "Booklet"],
  //   "screens": [
  //       {
  //       "img": india1
  //       },
  //       {
  //       "img": india2
  //       },
  //       {
  //       "img": india3
  //       }
  //   ]
  //   },
  //   {
  //   "id": "playlist",
  //   "title": "Playlist Arts",
  //   "category": "design",
  //   "subtitle": "Personal Project",
  //   "description": "A collection of cover arts I made for my music playlist. It is used in BlackPlayer Ex music player.",
  //   "years": [2018],
  //   "technologies": ["photoshop"],
  //   "tags": ["Photoshop", "Graphic design", "Cover art"],
  //   "screens": [
  //       {
  //       "img": playlist1
  //       },
  //       {
  //       "img": playlist2
  //       },
  //       {
  //       "img": playlist3
  //       },
  //       {
  //       "img": playlist4
  //       },
  //       {
  //       "img": playlist5
  //       }
  //   ]
  //   },
  //   {
  //   "id": "boot",
  //   "title": "Custom Boot Animation",
  //   "category": "design",
  //   "subtitle": "Personal Project",
  //   "description": "A customized boot animation I did for my O+ 8.5 Android phone.",
  //   "years": [2016],
  //   "technologies": ["photoshop", "flash"],
  //   "tags": ["Adobe Flash", "Graphic design", "Animation"],
  //   "screens": [
  //       {
  //       "img": boot1
  //       },
  //       {
  //       "img": boot2
  //       },
  //       {
  //       "img": boot3
  //       },
  //       {
  //       "img": boot4
  //       }
  //   ],
  //   "content": { "type": 'video', "src": bootContent }
  //   },
  //   {
  //   "id": "icfp",
  //   "title": "ICFP II Magazine",
  //   "category": "design",
  //   "subtitle": "Course Project",
  //   "description": "A documentation magazine of our outreach program in Casuray, Magarao.",
  //   "years": [2016],
  //   "technologies": ["photoshop"],
  //   "tags": ["Photoshop", "Graphic design", "Magazine"],
  //   "contributions": [
  //       "Lead the documentation team",
  //       "Acted as editor-in-chief",
  //       "Developed the flow of the magazine",
  //       "Conceptualized the layouts of each content",
  //       "Produced hand-drawn graphics",
  //       "Designed the layout of all the pages using Photoshop"
  //   ],
  //   "screens": [
  //       {
  //       "img": icfp1
  //       },
  //       {
  //       "img": icfp2
  //       },
  //       {
  //       "img": icfp3
  //       },
  //       {
  //       "img": icfp4
  //       }
  //   ],
  //   "content": { "type": 'document', "src": icfpContent }
  //   },
  //   {
  //   "id": "miscellaneous",
  //   "title": "Miscellaneous Artworks",
  //   "category": "design",
  //   "subtitle": "Personal Project",
  //   "description": "A collection of diverse artworks I made which I think are worth showcasing.",
  //   "years": [2018, 2019, 2021, 2022],
  //   "technologies": ["photoshop"],
  //   "tags": ["Photoshop", "Graphic design", "Cover art", "Animation", "Infographic", "Manual", "Poster", "Banner"],
  //   "screens": [
  //       {
  //       "img": miscellaneous1,
  //       "desc": "An instruction manual made using Photoshop on how to play Pusoy Dos."
  //       },
  //       {
  //       "img": miscellaneous2,
  //       "desc": "A Photoshop-created poster for an event in AdNU CS department."
  //       },
  //       {
  //       "img": miscellaneous3,
  //       "desc": "An infographic made using Photoshop about the Durkheim Museum."
  //       },
  //       {
  //       "img": miscellaneous4,
  //       "desc": "A Christmas-themed banner for our 2022 family reunion."
  //       },
  //   ],
  //   "content": { "type": 'video', "src": miscellaneousContent }
  //   },
  // ]

  // export const workExperience = [
  //   {
  //     "start_date": Timestamp.fromMillis(1675209600000),
  //     "end_date": Timestamp.fromMillis(1682899200000),
  //     "position": "Junior Software Engineer",
  //     "company": "Pandalivery",
  //     "image": pandaliveryLogo,
  //     "description": [
  //       "Lead the UI/UX team",
  //       "Developed a website",
  //       "Co-developed mobile applications"
  //     ]
  //   },
  //   {
  //     "start_date": Timestamp.fromMillis(1625097600000),
  //     "date": Timestamp.fromMillis(1672531200000),
  //     "position": "Office Staff",
  //     "company": "Hahsy Industries Inc., Naga",
  //     "image": hahsyLogo,
  //     "description": [
  //       "Processed customer orders and requests",
  //       "Scheduled order purchases and delivery errands",
  //       "Handled sales invoice issuance and purchasing duties",
  //       "Generated and compiled summary reports"
  //     ]
  //   },
  //   {
  //     "start_date": Timestamp.fromMillis(1527811200000),
  //     "date": Timestamp.fromMillis(1612137600000),
  //     "position": "Tutor",
  //     "company": "Asiawise Study Center, Inc",
  //     "image": asiawiseLogo,
  //     "description": [
  //       "Worked on classes of great volume",
  //       "Aided in developing and improving student’s school performance",
  //       "Helped students complete school deliverables"
  //     ]
  //   },
  //   {
  //     "start_date": Timestamp.fromMillis(1527811200000),
  //     "end_date": Timestamp.fromMillis(1564617600000),
  //     "position": "Teacher Assistant",
  //     "company": "Ateneo de Naga University",
  //     "image": adnuLogo,
  //     "description": [
  //       "Helped instructors manage classes",
  //       "Corrected students’ mistakes and gave out lectures regarding the subject matter",
  //       "Addressed student concerns and queries"
  //     ]
  //   },
  //   {
  //     "start_date": Timestamp.fromMillis(1470009600000),
  //     "end_date": Timestamp.fromMillis(1483228800000),
  //     "position": "Food Service Worker",
  //     "company": "Chogee and Friends Eatery",
  //     "image": null,
  //     "description": [
  //       "Skillfully addressed guest's service needs",
  //       "Delivered friendly and fast service",
  //       "Managed closing duties, including inventory checking and restocking"
  //     ]
  //   },
  // ]
  // export const certifications = [
  //   {
  //     "date": Timestamp.fromMillis(1655769600000),
  //     "certification": "CCNA Cybersecurity Essentials",
  //     "grantee": "Cisco NetAcad",
  //     "image": cybersecurtityCertificate
  //   },
  //   {
  //     "date": Timestamp.fromMillis(1582832000000),
  //     "certification": "CCNA Routing & Switching: Introduction to Networks",
  //     "grantee": "Cisco NetAcad",
  //     "image": introductionCertificate
  //   }
  // ]

  // export const skillSet = [
  //   {
  //     "set": "Development",
  //     "icon": faDesktop,
  //     "description": "Includes scripting, programming, and database management",
  //     "skills": [
  //       {
  //         "skill": "C++, C#, Java",
  //         "category": "Programming",
  //         "rating": 4
  //       },
  //       {
  //         "skill": "Ruby, Python",
  //         "category": "Programming",
  //         "rating": 4
  //       },
  //       {
  //         "skill": "Dart, Flutter",
  //         "category": "Programming",
  //         "rating": 5
  //       },
  //       {
  //         "skill": "HTML, CSS",
  //         "category": "Scripting",
  //         "rating": 5
  //       },
  //       {
  //         "skill": "JavaScript, ReactJS, NodeJS",
  //         "category": "Scripting",
  //         "rating": 5
  //       },
  //       {
  //         "skill": "SQL",
  //         "category": null,
  //         "rating": 4
  //       },
  //       {
  //         "skill": "Computer assembly",
  //         "category": null,
  //         "rating": 3
  //       }
  //     ]
  //   },
  //   {
  //     "set": "Multimedia",
  //     "icon": faVideoCamera,
  //     "description": "Includes graphic art production and video editing",
  //     "skills": [
  //       {
  //         "skill": "Photoshop",
  //         "category": "Graphic art production",
  //         "rating": 5
  //       },
  //       {
  //         "skill": "LightRoom",
  //         "category": "Graphic art production",
  //         "rating": 5
  //       },
  //       {
  //         "skill": "AfterEffects",
  //         "category": "Video Editing",
  //         "rating": 4
  //       },
  //       {
  //         "skill": "Premiere",
  //         "category": "Video Editing",
  //         "rating": 3
  //       }
  //     ]
  //   },
  //   {
  //     "set": "Others",
  //     "icon": faBriefcase,
  //     "description": "",
  //     "skills": [
  //       {
  //         "skill": "Sales and accounting",
  //         "rating": 3
  //       },
  //       {
  //         "skill": "Classroom instruction",
  //         "rating": 5
  //       }
  //     ]
  //   }
  // ]

  export const developmentBackground = [
    {
      "id": "react",
      "years": 3.0
    },
    {
      "id": "firebase",
      "years": 3.0
    },
    {
      "id": "mysql",
      "years": 2.0,
      "name": "MySql"
    },
    {
      "id": "django",
      "years": 2.0
    },
    {
      "id": "flutter",
      "years": 1.0
    },
    {
      "id": "rails",
      "years": 0.5,
      "name": "Ruby on Rails"
    },
    {
      "id": "codeigniter",
      "years": 0.5,
      "name": "Code Igniter"
    }
  ]

  export const designBackground = [
    {
      "id": "photoshop",
      "years": 9.0
    },
    {
      "id": "flash",
      "years": 4.0
    },
    {
      "id": "aftereffects",
      "years": 3.0,
      "name": "AfterEffects"
    },
    {
      "id": "camtasia",
      "years": 5.0
    },
    {
      "id": "premiere",
      "years": 1.0
    }
  ]

  for (const work of developmentBackground) {
    const docRef = doc(db, "skillsets", work.set);
    const { image, ...rest } = work;
    // const updatedGallery = [];
    // for (const [index, screen] of screens.entries()) {
    //   // Upload each image inside the gallery
    //   const response = await fetch(screen.img);
    //   const blob = await response.blob();
    //   const fileName = screen.img.split('/').pop();  // Extract the file name from the path
    //   const imageRef = ref(str, `works/${fileName}`);
    //   const snapshot = await uploadBytes(imageRef, blob);
    //   const imageUrl = await getDownloadURL(snapshot.ref);

    //   updatedGallery.push({
    //     ...screen,
    //     img: imageUrl,
    //   });
    // }

    // updatedGallery.push({
    //   ...screen,
    //   img: imageUrl,
    // });
    // if (image) {
    //   const response = await fetch(image);
    //   const blob = await response.blob();
    //   const fileName = image.split('/').pop();  // Extract the file name from the path
    //   const imageRef = ref(str, `skillsets/${fileName}`);
    //   const snapshot = await uploadBytes(imageRef, blob);
    //   const imageUrl = await getDownloadURL(snapshot.ref);

    //   await setDoc(docRef, {
    //     ...rest,
    //     image: imageUrl,
    //   });
    // }
    // else {

    //   await setDoc(docRef, {
    //     ...rest,
    //     image: null,
    //   });

    // }

    await setDoc(docRef, work);
  }

  console.log("All nested images uploaded and documents saved!");

