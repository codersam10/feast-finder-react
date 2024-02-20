import React from "react";
import ReactDOM from "react-dom/client";
const restData = [
  {
    info: {
      id: "94123",
      name: "Domino's Pizza",
      cloudinaryImageId: "092e58460657922e098a8afd5db838fe",
      locality: "Geetanjali Theater Compound",
      areaName: "Tariwada",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.5,
      parentId: "2456",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-19 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "Ratnesh_Badges/free%20del%20icon.png",
            shortDescription: "Free Delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Ratnesh_Badges/free%20del%20icon.png",
                  shortDescription: "Free Delivery",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-geetanjali-theater-compound-tariwada-karwar-94123",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "763749",
      name: "Taj Corner",
      cloudinaryImageId: "17c1cee40b1790a7e5a759bf04cdb357",
      locality: "M G Road",
      areaName: "Tariwada",
      costForTwo: "₹250 for two",
      cuisines: ["Tandoor", "Arabian"],
      avgRating: 4.2,
      parentId: "373757",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-19 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/taj-corner-m-g-road-tariwada-karwar-763749",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "234364",
      name: "Gouvrish Garden Family Restaurant",
      cloudinaryImageId: "jhdgi3cabnaaeh0tlkm0",
      locality: "Mg Road",
      areaName: "Tariwada",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "South Indian", "Biryani"],
      avgRating: 4,
      parentId: "89351",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-19 22:20:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/gouvrish-garden-family-restaurant-mg-road-tariwada-karwar-234364",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "691412",
      name: "Annapoorna Biriyani Paradise",
      cloudinaryImageId: "090731c653e97a1f6edb825801215fde",
      locality: "Dr Pikale Road",
      areaName: "Tariwada",
      costForTwo: "₹400 for two",
      cuisines: [
        "South Indian",
        "Biryani",
        "Chinese",
        "Pizzas",
        "Pastas",
        "Burgers",
        "Fast Food",
        "Juices",
        "Ice Cream",
        "Arabian",
        "Seafood",
      ],
      avgRating: 4.3,
      parentId: "33946",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-19 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/annapoorna-biriyani-paradise-dr-pikale-road-tariwada-karwar-691412",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "235135",
      name: "Moonlight Hotel",
      cloudinaryImageId: "k4qkk4gxnx4hc8qxrdtq",
      locality: "Cutino Road",
      areaName: "Tariwada",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "North Indian", "South Indian", "Biryani"],
      avgRating: 4.4,
      parentId: "139107",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-19 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/moonlight-hotel-cutino-road-tariwada-karwar-235135",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "686121",
      name: "JUSTBAKE - cake and Confectioners",
      cloudinaryImageId: "56e9390efd61be5d938a6ad4784bc8f7",
      locality: "kajubhag",
      areaName: "Tariwada",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Snacks", "Fast Food"],
      avgRating: 4.4,
      parentId: "409035",
      avgRatingString: "4.4",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-19 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/justbake-cake-and-confectioners-kajubhag-tariwada-karwar-686121",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "618190",
      name: "Lassi N Cafe Karwar",
      cloudinaryImageId: "spis8dqm6xctoz13hgha",
      locality: "Cutino Road",
      areaName: "Tariwada",
      costForTwo: "₹230 for two",
      cuisines: ["Beverages", "Snacks", "Pizzas", "Fast Food"],
      avgRating: 4.3,
      parentId: "368534",
      avgRatingString: "4.3",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-19 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/lassi-n-cafe-karwar-cutino-road-tariwada-karwar-618190",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "646933",
      name: "Hotel Poornima",
      cloudinaryImageId: "f34657e4f398eec0e714971b58f8be69",
      locality: "Kodibag Road",
      areaName: "Tariwada",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Chinese", "Tandoor"],
      avgRating: 4.5,
      veg: true,
      parentId: "101107",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-19 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-poornima-kodibag-road-tariwada-karwar-646933",
      type: "WEBLINK",
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F010%2F628%2F614%2Foriginal%2Ffood-order-logo-mobile-food-logo-online-food-delivery-logo-vector.jpg&f=1&nofb=1&ipt=bc02b9661dbdf90c66fd6894150399199ee7a86757f7c890f3a76b73ba1644ba&ipo=images"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Settings</li>
          <li>Order</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { restData } = props;
  const {
    name,
    costForTwo,
    avgRating:ratings,
    cuisines,
    cloudinaryImageId:imageId
  }= restData?.info;
  return (
    <div className="res-card">
      <div className="img-container">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imageId

          }
          alt="restaurant-logo"
          className="res-img"
        />
      </div>

      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <h4>Rating {ratings} star</h4>
      <h4>{cuisines.join(", ")}.</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restData.map((restaurant)=>(
          <RestaurantCard key={restaurant.info.id} restData={restaurant}/>
        ))}
      </div>
    </div>
  );
};

const AppContainer = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);
