import { Routes, Route } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import 'bootstrap/dist/css/bootstrap.css'

import Resume from './pages/Resume';
import Works from './pages/Works';
import { Home } from './pages/Home';
import View from './pages/View';
import ListByTag from './pages/ListByTag';
import ListByYear from './pages/ListByYear';
import ListBySubtitle from './pages/ListBySubtitle';
import ListByCategory from './pages/ListByCategory';

import mbgLogo from './images/logo.png'
import mbgLogoShadowed from './images/logo_shadowed.png'
import woopWeb1 from './images/works/woop_web_1.jpg'
import woopWeb2 from './images/works/woop_web_2.jpg'
import woopWeb3 from './images/works/woop_web_3.jpg'
import woopRider1 from './images/works/woop_rider_1.jpg'
import woopRider2 from './images/works/woop_rider_2.jpg'
import woopRider3 from './images/works/woop_rider_3.jpg'
import woopRider4 from './images/works/woop_rider_4.jpg'
import woopRider5 from './images/works/woop_rider_5.jpg'
import woopCustomer1 from './images/works/woop_customer_1.jpg'
import woopCustomer2 from './images/works/woop_customer_2.jpg'
import woopCustomer3 from './images/works/woop_customer_3.jpg'
import woopCustomer4 from './images/works/woop_customer_4.jpg'
import woopCustomer5 from './images/works/woop_customer_5.jpg'
import woopCustomer6 from './images/works/woop_customer_6.jpg'
import woopAssetModules from './images/works/woop_assets_modules.png'
import woopAssetSubModules from './images/works/woop_assets_submodules.png'
import woopAssetMinis from './images/works/woop_assets_mini.png'
import woopAssetFeatures from './images/works/woop_assets_featuresbackground.png'
import woopAssetPlaceholders from './images/works/woop_assets_placeholders.jpg'
import woopAssetErrors from './images/works/woop_assets_error.png'
import asiawise1 from './images/works/asiawise_1.jpg'
import asiawise2 from './images/works/asiawise_2.jpg'
import asiawise3 from './images/works/asiawise_3.jpg'
import asiawise4 from './images/works/asiawise_4.jpg'
import capstone1 from './images/works/capstone_1.jpg'
import capstone2 from './images/works/capstone_2.jpg'
import capstone3 from './images/works/capstone_3.jpg'
import capstone4 from './images/works/capstone_4.jpg'
import capstone5 from './images/works/capstone_5.jpg'
import capstone6 from './images/works/capstone_6.jpg'
import capstone7 from './images/works/capstone_7.jpg'
import capstone8 from './images/works/capstone_8.jpg'
import capstone9 from './images/works/capstone_9.jpg'
import capstone10 from './images/works/capstone_10.jpg'
import capstone11 from './images/works/capstone_11.jpg'
import capstone12 from './images/works/capstone_12.jpg'
import capstone13 from './images/works/capstone_13.jpg'
import capstone14 from './images/works/capstone_14.jpg'
import capstone15 from './images/works/capstone_15.jpg'
import baet1 from './images/works/baet_1.jpg'
import baet2 from './images/works/baet_2.jpg'
import napolcom1 from './images/works/napolcom_1.jpg'
import napolcom2 from './images/works/napolcom_2.jpg'
import icfp1 from './images/works/icfp_1.jpg'
import icfp2 from './images/works/icfp_2.jpg'
import icfp3 from './images/works/icfp_3.jpg'
import icfp4 from './images/works/icfp_4.jpg'
import icfpContent from './images/works/icfp_content.pdf'
import asiawiseManual1 from './images/works/asiawise_math_1.jpg'
import asiawiseManual2 from './images/works/asiawise_math_2.jpg'
import asiawiseManual3 from './images/works/asiawise_math_3.jpg'
import asiawiseManual4 from './images/works/asiawise_math_4.jpg'
import asiawiseManual5 from './images/works/asiawise_math_5.jpg'
import asiawiseBanner1 from './images/works/asiawise_banner_1.jpg'
import asiawiseBanner2 from './images/works/asiawise_banner_2.jpg'
import asiawiseBanner3 from './images/works/asiawise_banner_3.jpg'
import asiawiseBanner4 from './images/works/asiawise_banner_4.jpg'
import asiawiseBanner5 from './images/works/asiawise_banner_5.jpg'
import asiawiseBanner6 from './images/works/asiawise_banner_6.jpg'
import asiawiseBanner7 from './images/works/asiawise_banner_7.jpg'
import boot1 from './images/works/boot_1.jpg'
import boot2 from './images/works/boot_2.jpg'
import boot3 from './images/works/boot_3.jpg'
import boot4 from './images/works/boot_4.jpg'
import bootContent from './images/works/boot_content.mp4'
import wallpaper1 from './images/works/wallpaper_1.jpg'
import wallpaper2 from './images/works/wallpaper_2.jpg'
import wallpaper3 from './images/works/wallpaper_3.jpg'
import wallpaper4 from './images/works/wallpaper_4.jpg'
import wallpaper5 from './images/works/wallpaper_5.jpg'
import wallpaper6 from './images/works/wallpaper_6.jpg'
import wallpaper7 from './images/works/wallpaper_7.jpg'
import wallpaper8 from './images/works/wallpaper_8.jpg'
import wallpaper9 from './images/works/wallpaper_9.jpg'
import wallpaper10 from './images/works/wallpaper_10.jpg'
import wallpaper11 from './images/works/wallpaper_11.jpg'
import katagalugan1 from './images/works/katagalugan_1.jpg'
import katagalugan2 from './images/works/katagalugan_2.jpg'
import katagalugan3 from './images/works/katagalugan_3.jpg'
import playlist1 from './images/works/playlist_1.jpg'
import playlist2 from './images/works/playlist_2.jpg'
import playlist3 from './images/works/playlist_3.jpg'
import playlist4 from './images/works/playlist_4.jpg'
import playlist5 from './images/works/playlist_5.jpg'
import brigada1 from './images/works/brigada_1.jpg'
import brigada2 from './images/works/brigada_2.jpg'
import dengue1 from './images/works/dengue_1.jpg'
import dengue2 from './images/works/dengue_2.jpg'
import india1 from './images/works/india_1.jpg'
import india2 from './images/works/india_2.jpg'
import india3 from './images/works/india_3.jpg'
import miscellaneous1 from './images/works/miscellaneous_1.jpg'
import miscellaneous2 from './images/works/miscellaneous_2.jpg'
import miscellaneous3 from './images/works/miscellaneous_3.jpg'
import miscellaneous4 from './images/works/miscellaneous_4.jpg'
import miscellaneousContent from './images/works/miscellaneous_content.mp4'
import uno1 from './images/works/uno_1.jpg'
import uno2 from './images/works/uno_2.jpg'
import uno3 from './images/works/uno_3.jpg'
import uno4 from './images/works/uno_4.jpg'
import roll1 from './images/works/roll_1.jpg'
import roll2 from './images/works/roll_2.jpg'
import roll3 from './images/works/roll_3.jpg'
import roll4 from './images/works/roll_4.jpg'
import arluz1 from './images/works/arluz_status.jpg'
import arluz2 from './images/works/arluz_home.jpg'
import arluz3 from './images/works/arluz_employee.jpg'
import arluz4 from './images/works/arluz_new_order.jpg'
import arluz5 from './images/works/arluz_new_purchase.jpg'
import arluz6 from './images/works/arluz_strict.jpg'

import pandaliveryLogo from './images/resume/pandalivery_logo.png'
import asiawiseLogo from './images/resume/asiawise_logo.png'
import adnuLogo from './images/resume/adnu_logo.png'
import hahsyLogo from './images/resume/hahsy_logo.png'
import introductionCertificate from './images/resume/intro_certification.png'
import cybersecurtityCertificate from './images/resume/cybersecurity_certification.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faBriefcase, faVideoCamera } from '@fortawesome/free-solid-svg-icons';

function App() {
  const works = [
    {
      "id": "arluz",
      "title": "Ar.Luz",
      "category": "development",
      "subtitle": "Commisioned Work",
      "description": "An Android application that handles the sales and accounting of the medium enterprise ArLuz.",
      "years": [2023],
      "languages": ["dart"],
      "technologies": ["flutter", "firebase", "photoshop"],
      "tags": ["Flutter", "Android", "Mobile", "Photoshhop"],
      "screens": [
          {
          "img": arluz1,
          "desc": "Icons for the main services offered by Woop! From top-left to bottom-right: Parcel Delivery, Bills Payment, Food Delivery, Pasabuy, and Custom",
          },
          {
          "img": arluz6,
          "desc": "Icons for every subservice of Parcel Delivery and Pasabuy. From top-left to bottom-right: Letter, Document, Parcel, Medicine, and Grocery"
          },
          {
          "img": arluz2,
          "desc": "Icons for the main services offered by Woop! but simplified for better readability.",
          },
          {
          "img": arluz3,
          "desc": "Banner that displays the different features of Woop!.",
          },
          {
          "img": arluz4,
          "desc": "Set of images used in place of empty establishment photos.",
          },
          {
          "img": arluz5,
          "desc": "Icons used in cases of empty lists or data errors.",
          },
      ]
      },
      {
        "id": "woop-admin",
        "title": "Woop! Admin",
        "category": "development",
        "subtitle": "Internship Project",
        "description": "Woop! Admin a web app component of Woop! developed for the employees of Pandalivery to handle riders, orders, and customer concerns.",
        "years": [2023],
        "contributions": [
            "Spearheaded the documentation process",
            "Lead the UI/UX Team",
            "Oversaw front-end developers' works",
            "Developed the web application",
            "Created the assets"
        ],
        "languages": ["javascript", "html", "css", "python"],
        "technologies": ["react", "bootstrap", "font_awesome", "django"],
        "tags": ["Web development", "UI design", "Front-end", "Back-end", "Django", "Javascript", "HTML", "CSS", "Bootstrap", "FontAwesome"],
        "screens": [
            {
            "img": woopWeb2,
            "desc": "The scheduling page allows admins to approve orders and assign them with riders.",
            },
            {
            "img": woopWeb1,
            "desc": "The records page allows admins to review completed, denied, and approved orders.",
            },
            {
            "img": woopWeb3,
            "desc": "The establishments page allows admin to add, edit, and remove partner stores.",
            }
          ]
      },
      {
        "id": "woop-riders",
        "title": "Woop! for Riders",
        "category": "development",
        "subtitle": "Internship Project",
        "description": "Woop! for Riders is a mobile component of Woop! where riders can fulfill the orders assigned to them.",
        "years": [2023],
        "contributions": [
            "Spearheaded the documentation process",
            "Lead the UI/UX Team",
            "Oversaw front-end developers' works",
            "Developed the UI of the mobile rider application",
            "Created the assets"
        ],
        "languages": ["dart"],
        "technologies": ["flutter", "font_awesome"],
        "tags": ["Web development", "UI design", "Front-end", "Back-end", "Django", "FontAwesome", "Flutter", "Dart", "Android"],
        "screens": [
            {
            "img": woopRider1,
            "desc": "The login screen allows riders to sign in.",
            },
            {
            "img": woopRider2,
            "desc": "The protected screen determines the rider's shift schedule.",
            },
            {
            "img": woopRider3,
            "desc": "The tasks screen allows riders to see the orders assigned to them.",
            },
            {
            "img": woopRider4,
            "desc": "The transaction logs screen allows riders to see errands they've accomplished.",
            },
            {
            "img": woopRider5,
            "desc": "The account screen allows riders to see their information and schedule.",
            }
          ]
      },
      {
        "id": "woop",
        "title": "Woop!",
        "category": "development",
        "subtitle": "Internship Project",
        "description": "Woop! is the customer mobile component of Woop! In the application, users can place and pay for orders, and send feedback.",
        "years": [2023],
        "contributions": [
            "Spearheaded the documentation process",
            "Lead the UI/UX Team",
            "Oversaw front-end developers' works",
            "Developed the UI of the mobile rider application",
            "Created the assets"
        ],
        "languages": ["dart"],
        "technologies": ["flutter", "font_awesome"],
        "tags": ["Web development", "UI design", "Front-end", "Back-end", "Django", "Javascript", "HTML", "CSS", "Bootstrap", "FontAwesome", "Flutter", "Dart", "Android"],
        "screens": [
            {
            "img": woopCustomer1,
            "desc": "The registration screen allows customers to sign up for Woop!.",
            },
            {
            "img": woopCustomer2,
            "desc": "The login screen allows customers to sign in.",
            },
            {
            "img": woopCustomer3,
            "desc": "The home screen allows customers to see promotions and select an errand.",
            },
            {
            "img": woopCustomer4,
            "desc": "The pasabuy screen allows customers to ask a rider to buy something for them.",
            },
            {
            "img": woopCustomer5,
            "desc": "The parcel delivery screen allows customers to ask a rider to deliver a letter, document, or parcel for them.",
            },
            {
            "img": woopCustomer6,
            "desc": "The account screen allows customers to see their information and ask for help.",
            },
          ]
      },
      {
      "id": "woop-assets",
      "title": "Woop! Assets",
      "category": "design",
      "subtitle": "Internship Project",
      "description": "A collection of icons, backgrounds, foregrounds, and placeholders used acrossed the different components of Woop!",
      "years": [2023],
      "technologies": ["photoshop"],
      "tags": ["Photoshop", "Graphic design", "Assets", "Icons"],
      "screens": [
          {
          "img": woopAssetModules,
          "desc": "Icons for the main services offered by Woop! From top-left to bottom-right: Parcel Delivery, Bills Payment, Food Delivery, Pasabuy, and Custom",
          },
          {
          "img": woopAssetSubModules,
          "desc": "Icons for every subservice of Parcel Delivery and Pasabuy. From top-left to bottom-right: Letter, Document, Parcel, Medicine, and Grocery"
          },
          {
          "img": woopAssetMinis,
          "desc": "Icons for the main services offered by Woop! but simplified for better readability.",
          },
          {
          "img": woopAssetFeatures,
          "desc": "Banner that displays the different features of Woop!.",
          },
          {
          "img": woopAssetPlaceholders,
          "desc": "Set of images used in place of empty establishment photos.",
          },
          {
          "img": woopAssetErrors,
          "desc": "Icons used in cases of empty lists or data errors.",
          },
      ]
      },
      {
      "id": "ims",
      "title": "IMS",
      "category": "development",
      "subtitle": "Capstone Project",
      "description": "Senior thesis project: An inventory management system that has warehouse mapping, inventory analytics, barcode auto-generation, and a mobile companion that can scan barcodes.",
      "years": [2022, 2023],
      "reference": "https://inventoryapp-330808.web.app/",
      "contributions": [
          "Acted as project leader",
          "Spearheaded the documentation process",
          "Served as the main front-end developer",
          "Oversaw UI/UX design",
          "Headed the back-end development",
      ],
      "languages": ["html", "css", "javascript"],
      "technologies": ["react", "firebase", "bootstrap", "font_awesome", "photoshop"],
      "tags": ["Web development", "UI design", "Front-end", "Back-end", "Django", "Javascript", "HTML", "CSS", "Bootstrap", "FontAwesome"],
      "screens": [
          {
          "img": capstone1,
          "desc": "The login page showcases the system's features and allows the users to sign in to IMS."
          },
          {
          "img": capstone2,
          "desc": "The home pages displays the summarized performance of the business in 4 different time periods."
          },
          {
          "img": capstone3,
          "desc": "From the home page, users can generate an order of a low/empty stock product via email or text message."
          },
          {
          "img": capstone4,
          "desc": "The stockcard page lists down all the products of the business and their respective information, and stats."
          },
          {
          "img": capstone5,
          "desc": "The warehouse page lists down all the warehouses and their respective map."
          },
          {
          "img": capstone6,
          "desc": "Clicking on a storage displays the storage and products inside of it."
          },
          {
          "img": capstone7,
          "desc": "When editing is toggled, a storage's flooring, type, and products can be edited."
          },
          {
          "img": capstone8,
          "desc": "Products of a storage can be edited to and fro the stockcard and storage."
          },
          {
          "img": capstone9,
          "desc": "The transactions page displays all the transactions of the business. Also, each transaction can be voided."
          },
          {
          "img": capstone10,
          "desc": "The suppliers page shows all the suppliers of the business and their respective information and catalogue."
          },
          {
          "img": capstone11,
          "desc": "The analytics page presents a chart that creates a trend of individual product movement."
          },
          {
          "img": capstone12,
          "desc": "The print codes page lists down all the products and their barcode. The list can be converted to pdf."
          },
          {
          "img": capstone13,
          "desc": "The generate reports page generates different reports whose data can be filtered out according to product type and date."
          },
          {
          "img": capstone14
          },
          {
          "img": capstone15,
          "desc": "The user management page allows addition, modification, deactivation and deletion of mobile users."
          }
      ]
      },
      {
      "id": "dengue",
      "title": "Dengue Fever Pamphlet",
      "category": "design",
      "subtitle": "Commisioned Work",
      "description": "A pamphlet made that gives relevant information about Dengue Fever — it's causes, symptoms, and treatments.",
      "years": [2021],
      "technologies": ["photoshop"],
      "tags": ["Photoshop", "Graphic design", "Pamphlet"],
      "screens": [
          {
          "img": dengue1
          },
          {
          "img": dengue2
          }
      ]
      },
      {
      "id": "roll",
      "title": "Advanced Roll-a-ball Game",
      "category": "development",
      "subtitle": "Course Project",
      "description": "A roll-a-ball game in the first person point of view. The ball must obtain all the orbs while passing over the obstacles.",
      "years": [2020],
      "languages": ["c#"],
      "technologies": ["unity"],
      "tags": ["Unity", "Game development", "Scripting"],
      "screens": [
          {
          "img": roll1
          },
          {
          "img": roll2
          },
          {
          "img": roll3
          },
          {
          "img": roll4
          }
      ],
      "content": { "type": 'youtube', "src": "https://www.youtube.com/embed/Siw9wOZV4Bg?rel=0" }
      },
      {
      "id": "uno",
      "title": "Uno Punto Game",
      "category": "development",
      "subtitle": "Course Project",
      "description": "Uno Punto is a vertical scrolling game developed using Unity. It is about the adventure of Uno Punto (0.1), the last known living germ from the tragic Baygon spraying incident that destroyed his home and people. He was away when the incident happened so he refuse to believe that his family are gone. Hoping to reunite with his family again, he travels the sanitized world of the homeowner.",
      "years": [2020],
      "languages": ["c#"],
      "technologies": ["unity"],
      "tags": ["Unity", "Game development", "Scripting"],
      "screens": [
          {
          "img": uno1
          },
          {
          "img": uno2
          },
          {
          "img": uno3
          },
          {
          "img": uno4
          }
      ],
      "content": { "type": 'youtube', "src": "https://www.youtube.com/embed/HcJnfMdvg8E?rel=0" }
      },
      {
      "id": "asiawise",
      "title": "Asiawise Website",
      "category": "development",
      "subtitle": "Freelance Project",
      "description": "A commisioned website that showcases the background and services offered by Asiawise.",
      "years": [2020],
      "reference": "https://asiawiseu.com/",
      "languages": ["html", "javascript", "css", "ruby"],
      "technologies": ["rails", "bootstrap", "font_awesome"],
      "tags": ["Web development", "UI design", "Front-end", "Ruby", "Javascript", "HTML", "CSS", "Bootstrap", "FontAwesome"],
      "screens": [
          {
          "img": asiawise1,
          "desc": "The home section displays announcements and allows users to enroll in their programs."
          },
          {
          "img": asiawise2,
          "desc": "The background of Asiawise is displayed via modal and separated by tabs.",
          },
          {
          "img": asiawise3,
          "desc": "The programs and products section shows the different programs offered by Asiawise.",
          },
          {
          "img": asiawise4,
          "desc": "Clicking on a program displays its full information in a modal.",
          }
      ]
      },
      {
      "id": "baet",
      "title": "Bait's Kakanin Advertisements",
      "category": "design",
      "subtitle": "Commisioned Work",
      "description": "A commisioned set of digital posters as advertisement materials for a food business.",
      "years": [2020],
      "tags": ["Photoshop", "Graphic design", "Advertising"],
      "screens": [
          {
          "img": baet1
          },
          {
          "img": baet2
          }
      ]
      },
      {
      "id": "napolcom",
      "title": "NAPOLCOM Reviewer Book Cover",
      "category": "design",
      "subtitle": "Commisioned Work",
      "description": "A commisioned book cover layout for a NAPOLCOM Reviewer.",
      "years": [2020],
      "tags": ["Photoshop", "Graphic design", "Book Cover"],
      "screens": [
          {
          "img": napolcom1
          },
          {
          "img": napolcom2
          }
      ]
      },
      {
      "id": "asiawise-manuals",
      "title": "Asiawise Math Manuals",
      "category": "design",
      "subtitle": "Commisioned Work",
      "description": "A collection of manuals on how to interpret or evaluate math topics.",
      "years": [2020],
      "tags": ["Photoshop", "Graphic design", "Manual", "Infographic"],
      "screens": [
          {
          "img": asiawiseManual1
          },
          {
          "img": asiawiseManual2
          },
          {
          "img": asiawiseManual3
          },
          {
          "img": asiawiseManual4
          },
          {
          "img": asiawiseManual5
          }
      ]
      },
      {
      "id": "asiawise-banners",
      "title": "Asiawise Google Classroom Covers",
      "category": "design",
      "subtitle": "Commisioned Work",
      "description": "A collection of cover photos used on the online classes of Asiawise.",
      "years": [2020],
      "technologies": ["photoshop"],
      "tags": ["Photoshop", "Graphic design", "Cover"],
      "screens": [
          {
          "img": asiawiseBanner1
          },
          {
          "img": asiawiseBanner2
          },
          {
          "img": asiawiseBanner3
          },
          {
          "img": asiawiseBanner4
          },
          {
          "img": asiawiseBanner5
          },
          {
          "img": asiawiseBanner6
          },
          {
          "img": asiawiseBanner7
          },
      ]
      },
      {
      "id": "brigada",
      "title": "Brigada Eskwela '20 Banner",
      "category": "design",
      "subtitle": "Commisioned Work",
      "description": "A poster for Carolina National High School donation advisory held during their 2020 Brigada Eskwela.",
      "years": [2020],
      "technologies": ["photoshop"],
      "tags": ["Photoshop", "Graphic design", "Banner"],
      "screens": [
          {
          "img": brigada1
          },
          {
          "img": brigada2
          }
      ]
      },
      {
      "id": "wallpapers",
      "title": "Minimalist Wallpapers",
      "category": "design",
      "subtitle": "Personal Project",
      "description": "A diverse set of wallpapers I made for my former Android phone and old desktop pc.",
      "years": [2019, 2020],
      "technologies": ["photoshop"],
      "tags": ["Photoshop", "Graphic design", "Wallpaper"],
      "screens": [
          {
          "img": wallpaper1
          },
          {
          "img": wallpaper2
          },
          {
          "img": wallpaper3
          },
          {
          "img": wallpaper4
          },
          {
          "img": wallpaper5
          },
          {
          "img": wallpaper6
          },
          {
          "img": wallpaper7
          },
          {
          "img": wallpaper8
          },
          {
          "img": wallpaper9
          },
          {
          "img": wallpaper10
          },
          {
          "img": wallpaper11
          }
      ]
      },
      {
      "id": "katagalugan",
      "title": "Katagalugan Album Covers",
      "category": "design",
      "subtitle": "Personal Project",
      "description": "A set of album covers I made for the imaginary band Katagalugan.",
      "years": [2019, 2020],
      "technologies": ["photoshop"],
      "tags": ["Photoshop", "Graphic design", "Album cover"],
      "screens": [
          {
          "img": katagalugan1
          },
          {
          "img": katagalugan2
          },
          {
          "img": katagalugan3
          }
      ]
      },
      {
      "id": "india",
      "title": "India's Living Treasures Booklet",
      "category": "design",
      "subtitle": "Course  Project",
      "description": "A booklet that features three animals that are unique only to India.",
      "years": [2018],
      "technologies": ["photoshop"],
      "tags": ["Photoshop", "Graphic design", "Booklet"],
      "screens": [
          {
          "img": india1
          },
          {
          "img": india2
          },
          {
          "img": india3
          }
      ]
      },
      {
      "id": "playlist",
      "title": "Playlist Arts",
      "category": "design",
      "subtitle": "Personal Project",
      "description": "A collection of cover arts I made for my music playlist. It is used in BlackPlayer Ex music player.",
      "years": [2018],
      "technologies": ["photoshop"],
      "tags": ["Photoshop", "Graphic design", "Cover art"],
      "screens": [
          {
          "img": playlist1
          },
          {
          "img": playlist2
          },
          {
          "img": playlist3
          },
          {
          "img": playlist4
          },
          {
          "img": playlist5
          }
      ]
      },
      {
      "id": "boot",
      "title": "Custom Boot Animation",
      "category": "design",
      "subtitle": "Personal Project",
      "description": "A customized boot animation I did for my O+ 8.5 Android phone.",
      "years": [2016],
      "technologies": ["photoshop", "flash"],
      "tags": ["Adobe Flash", "Graphic design", "Animation"],
      "screens": [
          {
          "img": boot1
          },
          {
          "img": boot2
          },
          {
          "img": boot3
          },
          {
          "img": boot4
          }
      ],
      "content": { "type": 'video', "src": bootContent }
      },
      {
      "id": "icfp",
      "title": "ICFP II Magazine",
      "category": "design",
      "subtitle": "Course Project",
      "description": "A documentation magazine of our outreach program in Casuray, Magarao.",
      "years": [2016],
      "technologies": ["photoshop"],
      "tags": ["Photoshop", "Graphic design", "Magazine"],
      "contributions": [
          "Lead the documentation team",
          "Acted as editor-in-chief",
          "Developed the flow of the magazine",
          "Conceptualized the layouts of each content",
          "Produced hand-drawn graphics",
          "Designed the layout of all the pages using Photoshop"
      ],
      "screens": [
          {
          "img": icfp1
          },
          {
          "img": icfp2
          },
          {
          "img": icfp3
          },
          {
          "img": icfp4
          }
      ],
      "content": { "type": 'document', "src": icfpContent }
      },
      {
      "id": "miscellaneous",
      "title": "Miscellaneous Artworks",
      "category": "design",
      "subtitle": "Personal Project",
      "description": "A collection of diverse artworks I made which I think are worth showcasing.",
      "years": [2018, 2019, 2021, 2022],
      "technologies": ["photoshop"],
      "tags": ["Photoshop", "Graphic design", "Cover art", "Animation", "Infographic", "Manual", "Poster", "Banner"],
      "screens": [
          {
          "img": miscellaneous1,
          "desc": "An instruction manual made using Photoshop on how to play Pusoy Dos."
          },
          {
          "img": miscellaneous2,
          "desc": "A Photoshop-created poster for an event in AdNU CS department."
          },
          {
          "img": miscellaneous3,
          "desc": "An infographic made using Photoshop about the Durkheim Museum."
          },
          {
          "img": miscellaneous4,
          "desc": "A Christmas-themed banner for our 2022 family reunion."
          },
      ],
      "content": { "type": 'video', "src": miscellaneousContent }
      },
  ]

  const workExperience = [
    {
      "date": "Feb 2023 - May 2023",
      "position": "Junior Software Engineer",
      "company": "Pandalivery",
      "image": pandaliveryLogo,
      "description": [
        "Lead the UI/UX team",
        "Developed a website",
        "Co-developed mobile applications"
      ]
    },
    {
      "date": "Jul 2021 - Jan 2023",
      "position": "Office Staff",
      "company": "Hahsy Industries Inc., Naga",
      "image": hahsyLogo,
      "description": [
        "Processed customer orders and requests",
        "Scheduled order purchases and delivery errands",
        "Handled sales invoice issuance and purchasing duties",
        "Generated and compiled summary reports"
      ]
    },
    {
      "date": "Jun 2018 - Feb 2021",
      "position": "Tutor",
      "company": "Asiawise Study Center, Inc",
      "image": asiawiseLogo,
      "description": [
        "Worked on classes of great volume",
        "Aided in developing and improving student’s school performance",
        "Helped students complete school deliverables"
      ]
    },
    {
      "date": "Jun 2018 - Aug 2019",
      "position": "Teacher Assistant",
      "company": "Ateneo de Naga University",
      "image": adnuLogo,
      "description": [
        "Helped instructors manage classes",
        "Corrected students’ mistakes and gave out lectures regarding the subject matter",
        "Addressed student concerns and queries"
      ]
    },
    {
      "date": "Aug 2016 - Jan 2017",
      "position": "Food Service Worker",
      "company": "Chogee and Friends Eatery",
      "image": null,
      "description": [
        "Skillfully addressed guest's service needs",
        "Delivered friendly and fast service",
        "Managed closing duties, including inventory checking and restocking"
      ]
    },
  ]

  const certifications = [
    {
      "date": "Jun 21 2022",
      "certification": "CCNA Cybersecurity Essentials",
      "grantee": "Cisco NetAcad",
      "image": cybersecurtityCertificate
    },
    {
      "date": "Feb 29 2020",
      "certification": "CCNA Routing & Switching: Introduction to Networks",
      "grantee": "Cisco NetAcad",
      "image": introductionCertificate
    }
  ]

  const skillSet = [
    {
      "set": "Development",
      "icon": faDesktop,
      "description": "Includes scripting, programming, and database management",
      "skills": [
        {
          "skill": "C++, C#, Java",
          "category": "Programming",
          "rating": 4
        },
        {
          "skill": "Ruby, Python",
          "category": "Programming",
          "rating": 4
        },
        {
          "skill": "Dart, Flutter",
          "category": "Programming",
          "rating": 5
        },
        {
          "skill": "HTML, CSS",
          "category": "Scripting",
          "rating": 5
        },
        {
          "skill": "JavaScript, ReactJS",
          "category": "Scripting",
          "rating": 5
        },
        {
          "skill": "SQL",
          "category": null,
          "rating": 4
        },
        {
          "skill": "Computer assembly",
          "category": null,
          "rating": 3
        }
      ]
    },
    {
      "set": "Multimedia",
      "icon": faVideoCamera,
      "description": "Includes graphic art production and video editing",
      "skills": [
        {
          "skill": "Photoshop",
          "category": "Graphic art production",
          "rating": 5
        },
        {
          "skill": "LightRoom",
          "category": "Graphic art production",
          "rating": 5
        },
        {
          "skill": "AfterEffects",
          "category": "Video Editing",
          "rating": 4
        },
        {
          "skill": "Premiere",
          "category": "Video Editing",
          "rating": 3
        }
      ]
    },
    {
      "set": "Others",
      "icon": faBriefcase,
      "description": "",
      "skills": [
        {
          "skill": "Sales and accounting",
          "rating": 3
        },
        {
          "skill": "Classroom instruction",
          "rating": 5
        }
      ]
    }
  ]

  const developmentBackground = [
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

  const designBackground = [
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

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-gray-50 bg-blur p-0 sticky-none sticky-md-top">
        <div className="container-fluid align-items-center p-1">
          <ul className="w-100 navbar-nav align-items-center justify-content-start justify-content-md-center flex-row ps-2 ps-md-0" style={{gap: "1em"}}>
              <LinkContainer to="/works">
                <a className="nav-link py-0 p-lg-2 d-none d-md-inline-block">
                  Works 
                </a>
              </LinkContainer>
              <LinkContainer to="/">
                <a className="nav-link py-0 p-lg-2 align-self-start align-self-lg-center">
                  <div id="logo">
                    <img className="d-inline-block d-md-none" src={mbgLogo}/>
                    <img className="d-none d-md-inline-block" src={mbgLogoShadowed}/>
                  </div>
                </a>
              </LinkContainer>
              <LinkContainer to="/works">
                <a className="nav-link py-0 p-lg-2 d-inline-block d-md-none">
                  Works 
                </a>
              </LinkContainer>
              <LinkContainer to="/resume">
                <a className="nav-link py-0 p-lg-2">
                  Resume
                </a>
              </LinkContainer>
              <div id="nav-socials-container">
                <div id="nav-socials" className="h-100">
                  <div className="h-100 d-flex align-items-center pe-2">
                    <a className="social-link mx-1 mx-lg-2" href="https://www.facebook.com/JunathanAchuete/" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a className="social-link mx-1 mx-lg-2" href="https://www.linkedin.com/in/mark-gutierrez-303653205" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a className="social-link mx-1 mx-lg-2" href="https://github.com/markguchi/"  target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                  </div>
                </div>
            </div>
            </ul>
        </div>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
          <Home
            recentWorks={[works[0], works[1]]}
            developmentBackground={developmentBackground}
            designBackground={designBackground}
          />}  
        />
        <Route
          path="/resume"
          element={
          <Resume
            workExperience={workExperience}
            certifications={certifications}
            skillSet={skillSet}
          />}  
        />
        <Route
          path="/works"
          element={
          <Works
            works={works}
            isCategoryVisible={true}
          />}
        />
       <Route 
         path="/view"
         element={
           <View
           />}
       />
       <Route 
         path="/listbyyear"
         element={
           <ListByYear
             data={works}
           />}
       />
       <Route 
         path="/listbytag"
         element={
           <ListByTag
             data={works}
           />}
       />
       <Route 
         path="/listbytype"
         element={
           <ListBySubtitle
             data={works}
        />}
       />
       <Route 
         path="/listbycategory"
         element={
           <ListByCategory
             data={works}
        />}
       />
       {works.map((work) => {
         return(
           <Route 
             key={work.id}
             path={"/view-work/" + work.id}
             element={
               <View
                 data={work}
               />
             }
           />
         )
       })}
      </Routes>
    </div>
  ); 
}

export default App;
