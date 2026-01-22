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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            <span className="text-glow-green text-primary">HANDHELD</span> GAMING HUB
          </h1>
          <p className="font-inter text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Four powerful apps. One mission. Elevate your handheld gaming experience.
          </p>
          <div className="w-32 h-1 bg-primary mx-auto mt-6 glow-green" />
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
              delay={index * 1250}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 border border-primary/30 rounded-full px-8 py-4 glow-green">
            <span className="font-orbitron font-bold text-primary animate-pulse-glow">
              EXPLORE ALL APPS
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
