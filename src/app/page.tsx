import PageSpacer from "@/components/Spacer/PageSpacer";
import FeaturedSection from "@/views/FeaturedSection/FeaturedSection";
import Footer from "@/views/Footer/Footer";
import Hero from "@/views/Hero/Hero";
import MailsSubscriptionCard from "@/views/MailsSubscriptionCard/MailsSubscriptionCard";
import Navbar from "@/views/Navbar/Navbar";

const featuredLists = [
  {
    title: "Featured Recipes",
    recipes: [
      {
        id: "1",
        name: "Carrot Cake with Cream Cheese Frosting",
        imageSrc: "/cake2.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preparationTime: 10,
      },
      {
        id: "2",
        name: "Chocolate Chip Cookie Dough Brownies",
        imageSrc: "/cake2.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preparationTime: 20,
      },
      {
        id: "3",
        name: "Strawberry Cheesecake Ice Cream",
        imageSrc: "/cake2.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preparationTime: 30,
      },
      {
        id: "4",
        name: "Lemon Blueberry Layer Cake",
        imageSrc: "/cake2.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preparationTime: 40,
      },
    ],
  },
  {
    title: "New recipes",
    recipes: [
      {
        id: "1",
        name: "Carrot Cake with Cream Cheese Frosting",
        imageSrc: "/cake2.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preparationTime: 10,
      },
      {
        id: "2",
        name: "Chocolate Chip Cookie Dough Brownies",
        imageSrc: "/cake2.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preparationTime: 20,
      },
      {
        id: "3",
        name: "Strawberry Cheesecake Ice Cream",
        imageSrc: "/cake2.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preparationTime: 30,
      },
      {
        id: "4",
        name: "Lemon Blueberry Layer Cake",
        imageSrc: "/cake2.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preparationTime: 40,
      },
    ],
  },
  {
    title: "Popular recipes",
    recipes: [
      {
        id: "1",
        name: "Carrot Cake with Cream Cheese Frosting",
        imageSrc: "/cake2.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preparationTime: 10,
      },
      {
        id: "2",
        name: "Chocolate Chip Cookie Dough Brownies",
        imageSrc: "/cake2.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preparationTime: 20,
      },
      {
        id: "3",
        name: "Strawberry Cheesecake Ice Cream",
        imageSrc: "/cake2.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preparationTime: 30,
      },
      {
        id: "4",
        name: "Lemon Blueberry Layer Cake",
        imageSrc: "/cake2.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        preparationTime: 40,
      },
    ],
  },
];

export default function Home() {
  return (
    <section className="flex flex-col w-full min-h-screen items-center">
      <Navbar />
      <Hero />
      <PageSpacer isHomePage={true}>
        {featuredLists.map((featuredList) => (
          <FeaturedSection key={featuredList.title} {...featuredList} />
        ))}
        <MailsSubscriptionCard />
      </PageSpacer>
      <Footer />
    </section>
  );
}
