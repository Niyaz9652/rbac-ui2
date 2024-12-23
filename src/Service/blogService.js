export const fetchBlogPosts = async () => {
  // Simulate an API call to get blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Tips for First-Time Homebuyers',
      content: 'Buying your first home can be overwhelming. Learn the top 10 tips to make the process easier and more enjoyable.',
      image: '../Images/h1.avif',
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Real Estate Investing',
      content: 'Discover how to get started with real estate investing and build a profitable portfolio.',
      image: '../Images/h2.avif',
    },
    {
      id: 3,
      title: '5 Mistakes to Avoid When Selling Your Home',
      content: 'Selling your home? Avoid these common mistakes to ensure a smooth and profitable sale.',
      image: '../Images/h3.avif',
    },
    {
      id: 4,
      title: 'Understanding Property Taxes: What Every Buyer Should Know',
      content: 'Learn how property taxes work and what to expect when purchasing a property.',
      image: '../Images/m1.avif',
    },
    {
      id: 5,
      title: 'How to Stage Your Home to Sell Faster',
      content: 'A well-staged home can attract more buyers and sell faster. Learn how to stage your home effectively.',
      image: '../Images/m2.avif',
    },
    {
      id: 6,
      title: 'Eco-Friendly Home Upgrades That Increase Property Value',
      content: 'Discover sustainable upgrades that not only help the planet but also boost your home’s value.',
      image: '../Images/m3.avif',
    },
  ];

  return blogPosts;
};
