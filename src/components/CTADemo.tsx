
import { CTASection } from "@/components/ui/cta-section"

export function CTADemo() {
  return (
    <CTASection
      badge={{
        text: "Get started"
      }}
      title="Start building with TechVision"
      description="Get started with TechVision and build your cutting-edge AI solutions"
      action={{
        text: "Get Started",
        href: "#services",
        variant: "default"
      }}
    />
  )
}
