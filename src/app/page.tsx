import CoverPage from "@/app/coveropage/page";
import QualificationsPage from "@/app/education/page";
import Skills from "@/app/skills/page";
import Client from '@/app/client/page';
import Business from '@/app/business/page';
import Team from '@/app/team/page';
import Emo from '@/app/emo/page';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
      <CoverPage />
      <QualificationsPage />
      <Business />
      <Skills />
      <Client />
      <Emo />
      <Team />
      <Footer />
    </>
  );
}
