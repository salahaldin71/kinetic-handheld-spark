import AppBanner from "./AppBanner";

const apps = [
  {
    title: "HandheldGamingHub Performance",
    subtitle: "Database / FPS",
    description: "Community-driven FPS database for handheld gaming devices and performance database for all your favorite handheld games.",
    icon: "compare" as const,
    href: "https://fps.handheldgaminghub.com",
  },
  {
    title: "Handhelds All You Need!",
    subtitle: "Comparisons / Guides",
    description: "Comprehensive side-by-side comparisons and in-depth guides to help you find your perfect gaming companion.",
    icon: "performance" as const,
    href: "https://app.handheldgaminghub.com",
  },
  {
    title: "Handheld Matchmaker",
    subtitle: "Questionnaire / Companion",
    description: "Answer a few questions and let our matchmaker find the ideal handheld device for your gaming style.",
    icon: "matchmaker" as const,
    href: "https://match.handheldgaminghub.com",
  },
  {
    title: "What Reviewers Say",
    subtitle: "Review Aggregator",
    description: "Aggregated scores and insights from top tech reviewers, all in one place for quick decision making.",
    icon: "reviews" as const,
    href: "https://wrs.handheldgaminghub.com",
  },
];

const TechSection = () => {
  return (
    <section className="min-h-screen bg-background py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your Tool
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from our suite of handheld gaming apps to find exactly what you need
          </p>
        </div>
        
        {/* App Banners Grid */}
        <div className="space-y-6">
          {apps.map((app, index) => (
            <AppBanner
              key={app.title}
              title={app.title}
              subtitle={app.subtitle}
              description={app.description}
              icon={app.icon}
              href={app.href}
              delay={index * 1250}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
