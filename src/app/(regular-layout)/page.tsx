import PresentationSection from '@/components/organisms/Landing/PresentationSection';
import FirstSection from '@/components/organisms/Landing/FirstSection';
import EventsSection from '@/components/organisms/Landing/EventsSection';
import OrganizersSection from '@/components/organisms/Landing/OrganizersSection';
import PresenterSection from '@/components/organisms/Landing/PresenterSection';

export default function Home() {
  return (
    <>
      <PresentationSection />

      <FirstSection />
      {/* @ts-expect-error Async Server Component */}
      <EventsSection />

      <PresenterSection />

      <OrganizersSection />
    </>
  )
}
