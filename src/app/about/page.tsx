import CenteredSectionHeading from "@/components/CenteredSectionHeading/CenteredSectionHeading";
import Footer from "@/views/Footer/Footer";
import Navbar from "@/views/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center">
      <Navbar />
      <section className="flex flex-col w-full py-16  items-center">
        <main className="flex flex-col w-full max-w-3xl gap-5">
          <CenteredSectionHeading title="About" />
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/cake2.png"
              alt="cake"
              width={500}
              height={500}
              className="w-full h-auto "
            />
          </div>
          <div className="w-full flex flex-col items-center p-10 gap-10 rounded-3xl bg-dark-secondary drop-shadow-2xl">
            <p className="text-body-text text-center">
              Hi there! I'm [Chef's Name], and I'm the creator and curator of
              this recipe haven. As a chef with [number] years of experience in
              [areas of expertise], I'm passionate about sharing my culinary
              knowledge and love for food with everyone. This platform is where
              I share my favorite recipes, both classic and innovative, with
              detailed instructions and helpful tips to guide you on your
              culinary adventures. Let's embark on a delicious journey together!
            </p>
            <Link href="/">
              <button className="w-fit btn btn-primary text-gray-200">
                Discover recipes
              </button>
            </Link>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
