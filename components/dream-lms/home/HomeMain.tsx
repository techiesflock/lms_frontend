import { BenefitSection } from "./sections/BenefitSection";
import { BrandStripSection } from "./sections/BrandStripSection";
import { ClientInstitutionsSection } from "./sections/ClientInstitutionsSection";
import { CommunityLearnSection } from "./sections/CommunityLearnSection";
import { FaqHomeSection } from "./sections/FaqHomeSection";
import { FeaturedCoursesSection } from "./sections/FeaturedCoursesSection";
import { FeaturedInstructorsHomeSection } from "./sections/FeaturedInstructorsHomeSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { LatestBlogSection } from "./sections/LatestBlogSection";
import { TestimonialsHomeSection } from "./sections/TestimonialsHomeSection";
import { TopCategoriesSection } from "./sections/TopCategoriesSection";
import { TrustVideoSection } from "./sections/TrustVideoSection";

export function HomeMain() {
  return (
    <>
      <BenefitSection />
      <ClientInstitutionsSection />
      <TopCategoriesSection />
      <TrustVideoSection />
      <FeaturedCoursesSection />
      <CommunityLearnSection />
      <BrandStripSection />
      <HowItWorksSection />
      <FeaturedInstructorsHomeSection />
      <TestimonialsHomeSection />
      <FaqHomeSection />
      <LatestBlogSection />
    </>
  );
}
