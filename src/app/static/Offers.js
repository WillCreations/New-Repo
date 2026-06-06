const Offers = [
  {
    Tag: "Bronze",
    Price: 500,
    Bonus: 40,
    Denomination: "k",
    FeatureTag: "Starter Website",
    Feature: ["1–5 pages", "responsive design", "basic SEO", "contact form"],
    Recommended: false,
  },
  {
    Tag: "Silver",
    Price: 1,
    Bonus: 40,
    Denomination: "m",
    FeatureTag: "Business Website",
    Feature: [
      "6–15 pages",
      "blog integration",
      "on-page SEO",
      "CMS (WordPress/Next.js)",
      "analytics setup",
    ],
    Recommended: true,
  },
  {
    Tag: "Gold",
    Price: 2.5,
    Bonus: 52,
    Denomination: "m",
    FeatureTag: "E-Commerce Website",
    Feature: [
      "Unlimited pages",
      "product catalog",
      "payment integration",
      "shipping setup",
      "basic training",
    ],
    Recommended: false,
  },
  {
    Tag: "Platinum",
    Price: 3,
    Bonus: 0,
    Denomination: "m",
    FeatureTag: "Custom Web App",
    Feature: [
      "Tailor-made solutions",
      "advanced integrations",
      "dashboards",
      "API development",
    ],
    Recommended: false,
  },
];

export default Offers