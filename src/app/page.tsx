import PageSpacer from "@/components/Spacer/PageSpacer";
import ListSection from "@/views/ListSection/ListSection";
import Footer from "@/views/Footer/Footer";
import Hero from "@/views/Hero/Hero";
import MailsSubscriptionCard from "@/views/MailsSubscriptionCard/MailsSubscriptionCard";
import Navbar from "@/views/Navbar/Navbar";
import getHomePageContent from "@/services/getHomePageContent";

interface IRecipeCard {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  preparationTime: number;
}

interface ISectionData {
  title: string;
  recipes: IRecipeCard[];
}

export default async function Home() {
  const { data } = await getHomePageContent();

  return (
    <section className="flex flex-col w-full min-h-screen items-center">
      <Navbar />
      <Hero />
      <PageSpacer isHomePage={true}>
        {data &&
          data.map((featuredList: ISectionData) => (
            <ListSection key={featuredList.title} {...featuredList} />
          ))}
        <MailsSubscriptionCard />
      </PageSpacer>
      <Footer />
    </section>
  );
}
