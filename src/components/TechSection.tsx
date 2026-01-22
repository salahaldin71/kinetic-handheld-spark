import AppBanner from "./AppBanner";

const apps = [
  {
    title: "HandheldGamingHub Performance",
    subtitle: "Database / FPS",
    description: "Track real-time performance metrics, FPS benchmarks, and database analytics for all your favorite handheld games.",
    icon: "performance" as const,
  },
  {
    title: "Handhelds All You Need!",
    subtitle: "Comparisons / Guides",
    description: "Comprehensive side-by-side comparisons and in-depth guides to help you find your perfect gaming companion.",
    icon: "compare" as const,
  },
  {
    title: "Handheld Matchmaker",
    subtitle: "Questionnaire / Companion",
    description: "Answer a few questions and let our AI-powered matchmaker find the ideal handheld device for your gaming style.",
    icon: "matchmaker" as const,
  },
  {
    title: "What Reviewers Say",
    subtitle: "Review Aggregator",
    description: "Aggregated scores and insights from top tech reviewers, all in one place for quick decision making.",
    icon: "reviews" as const,
  },
];

const TechSection = () => {
  return (
    <section className="min-h-screen bg-background py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* App Banners Grid */}
        <div className="space-y-6">
          {apps.map((app, index) => (
            <AppBanner
              key={app.title}
              title={app.title}
              subtitle={app.subtitle}
              description={app.description}
              icon={app.icon}
              delay={index * 1250}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
