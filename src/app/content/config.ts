/**
 * CONTENT CONFIGURATION
 * 
 * Edit this file to change text content across the site.
 * After editing, commit to GitHub and the site will automatically rebuild.
 */

export const siteContent = {
  // META & SEO
  meta: {
    title: "H₂OP – Das Hopfenwasser | Premium Alcohol-Free Hop Water from Germany",
    description: "Join the revolution. H₂OP brings you fizzy, refreshing hop water with 0% alcohol, zero gluten, and zero calories. Made in Germany with 20+ years of brewing expertise.",
    url: "https://h2op.com", // Update with your actual domain
    ogImage: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=1200&h=630&fit=crop", // Update with your branded image
  },

  // NAVIGATION
  navigation: {
    logo: "H₂OP",
    links: [
      { label: "Revolution", href: "#hero" },
      { label: "Why H₂OP", href: "#features" },
      { label: "Our Story", href: "#story" },
      { label: "Lifestyle", href: "#lifestyle" },
    ],
    ctaButton: "Join Now",
  },

  // HERO SECTION
  hero: {
    eyebrow: "Das Hopfenwasser",
    headline: "Join the Revolution",
    subheadline: "The fizzy, hoppy refreshment you've been waiting for. Zero alcohol. Zero compromise.",
    description: "Crafted in Germany with over 20 years of brewing heritage. H₂OP is the premium alcohol-free alternative for the modern lifestyle.",
    primaryCTA: "Discover H₂OP",
    secondaryCTA: "Our Story",
    stats: [
      { value: "0%", label: "Alcohol" },
      { value: "0", label: "Calories" },
      { value: "0", label: "Gluten" },
      { value: "20+", label: "Years Brewing" },
    ],
  },

  // FEATURES SECTION
  features: {
    sectionTitle: "Why H₂OP",
    sectionSubtitle: "Pure. Refreshing. Revolutionary.",
    items: [
      {
        title: "0% Alcohol",
        description: "All the flavor, none of the alcohol. Perfect for any time of day.",
        icon: "Droplet",
      },
      {
        title: "No Gluten",
        description: "Brewed with care for everyone. Naturally gluten-free refreshment.",
        icon: "ShieldCheck",
      },
      {
        title: "Zero Calories",
        description: "Guilt-free indulgence. Enjoy without counting.",
        icon: "Zap",
      },
      {
        title: "Made in Germany",
        description: "20+ years of brewing expertise in every bottle.",
        icon: "Award",
      },
    ],
  },

  // STORY SECTION
  story: {
    sectionTitle: "Our Story",
    sectionSubtitle: "Where German Brewing Meets Modern Lifestyle",
    paragraphs: [
      "For over two decades, we've mastered the art of brewing. Now, we're bringing that expertise to a new generation of refreshment.",
      "H₂OP was born from a simple idea: what if you could enjoy the crisp, hoppy flavor of craft brewing without the alcohol? What if there was a drink that fit your active, mindful lifestyle?",
      "We combined our German brewing heritage with innovative thinking to create something entirely new. Not a beer. Not sparkling water. Something revolutionary.",
    ],
    cta: "Learn More",
  },

  // LIFESTYLE SECTION
  lifestyle: {
    sectionTitle: "Your Lifestyle. Elevated.",
    sectionSubtitle: "From solo sips to social moments",
    moments: [
      {
        title: "Solo Refresh",
        description: "Your midday reset. Your evening unwind.",
        imageQuery: "person drinking refreshing beverage outdoors",
      },
      {
        title: "Brunch Vibes",
        description: "Elevate your weekend mornings with friends.",
        imageQuery: "modern brunch table beverages",
      },
      {
        title: "Happy Hour, Redefined",
        description: "Socialize without compromise. Cheers to clarity.",
        imageQuery: "friends toasting drinks outdoor patio",
      },
    ],
  },

  // CTA SECTION
  cta: {
    headline: "Ready to Join the Revolution?",
    subheadline: "Experience the future of refreshment. Zero alcohol. Infinite possibilities.",
    buttonText: "Get H₂OP Now",
    buttonLink: "#", // Update with your shop/order link
    secondaryText: "Available in select retailers across Germany",
  },

  // FOOTER
  footer: {
    companyName: "H₂OP – Das Hopfenwasser",
    tagline: "Brewed in Germany. Made for the world.",
    year: new Date().getFullYear(),
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
    social: [
      { platform: "Instagram", url: "https://instagram.com/h2op" },
      { platform: "Facebook", url: "https://facebook.com/h2op" },
    ],
  },
};

// THEME COLORS (referenced in components)
export const brandColors = {
  primary: {
    green: "#10b981", // Tropical green
    yellow: "#fbbf24", // Citrus yellow
    aqua: "#06b6d4", // Aqua accent
  },
  neutral: {
    white: "#ffffff",
    sand: "#faf9f6",
    charcoal: "#374151",
    deepGreen: "#065f46",
  },
};
