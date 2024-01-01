import React from "react";
import MailLetterSubscriptionInput from "@/components/MailLetterSubscriptionInput/MailLetterSubscriptionInput";

const MailsSubscriptionCard = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-dark-secondary drop-shadow-md rounded-2xl">
      <img
        src="/mails-subscription.png"
        className="w-full h-full object-cover rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl"
      />
      <div className="flex flex-col justify-center gap-5 p-10 sm:p-32 md:p-20 lg:p-28 xl:p-32">
        <h2 className="text-3xl sm:text-4xl text-primary">
          Subscribe to our newsletter
        </h2>
        <p className="text-sm sm:text-base text-card-text">
          If you're a foodie looking for delicious and easy-to-make recipes,
          subscribing to our mail letters is the perfect way to stay up-to-date
          with all our latest creations.
        </p>
        <MailLetterSubscriptionInput />
        <button type="submit" className="btn btn-primary rounded-full inline-block text-white">Subscribe</button>
      </div>
    </div>
  );
};

export default MailsSubscriptionCard;
