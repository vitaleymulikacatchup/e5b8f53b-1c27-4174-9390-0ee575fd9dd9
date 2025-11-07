import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-apple-light-gray py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Disclaimer text */}
        <div className="text-xs text-apple-secondary mb-8 leading-relaxed">
          <p className="mb-4">
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse, cancel, or limit quantity of any trade-in transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
          </p>
          <p className="mb-4">
            To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
          </p>
          <p className="mb-4">
            Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
          </p>
          <p className="mb-4">
            If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
          </p>
          <p className="mb-4">
            Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218
          </p>
          <p className="mb-4">
            A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV.
          </p>
          <p>
            Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
          </p>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-apple-text mb-4">Shop and Learn</h3>
            <ul className="space-y-2 text-sm text-apple-secondary">
              <li><a href="#" className="hover:underline">Store</a></li>
              <li><a href="#" className="hover:underline">Mac</a></li>
              <li><a href="#" className="hover:underline">iPad</a></li>
              <li><a href="#" className="hover:underline">iPhone</a></li>
              <li><a href="#" className="hover:underline">Watch</a></li>
              <li><a href="#" className="hover:underline">Vision</a></li>
              <li><a href="#" className="hover:underline">AirPods</a></li>
              <li><a href="#" className="hover:underline">TV & Home</a></li>
              <li><a href="#" className="hover:underline">AirTag</a></li>
              <li><a href="#" className="hover:underline">Accessories</a></li>
              <li><a href="#" className="hover:underline">Gift Cards</a></li>
            </ul>
            <h3 className="font-semibold text-apple-text mb-4 mt-8">Apple Wallet</h3>
            <ul className="space-y-2 text-sm text-apple-secondary">
              <li><a href="#" className="hover:underline">Wallet</a></li>
              <li><a href="#" className="hover:underline">Apple Card</a></li>
              <li><a href="#" className="hover:underline">Apple Pay</a></li>
              <li><a href="#" className="hover:underline">Apple Cash</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-apple-text mb-4">Account</h3>
            <ul className="space-y-2 text-sm text-apple-secondary">
              <li><a href="#" className="hover:underline">Manage Your Apple Account</a></li>
              <li><a href="#" className="hover:underline">Apple Store Account</a></li>
              <li><a href="#" className="hover:underline">iCloud.com</a></li>
            </ul>
            <h3 className="font-semibold text-apple-text mb-4 mt-8">Entertainment</h3>
            <ul className="space-y-2 text-sm text-apple-secondary">
              <li><a href="#" className="hover:underline">Apple One</a></li>
              <li><a href="#" className="hover:underline">Apple TV</a></li>
              <li><a href="#" className="hover:underline">Apple Music</a></li>
              <li><a href="#" className="hover:underline">Apple Arcade</a></li>
              <li><a href="#" className="hover:underline">Apple Fitness+</a></li>
              <li><a href="#" className="hover:underline">Apple News+</a></li>
              <li><a href="#" className="hover:underline">Apple Podcasts</a></li>
              <li><a href="#" className="hover:underline">Apple Books</a></li>
              <li><a href="#" className="hover:underline">App Store</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-apple-text mb-4">Apple Store</h3>
            <ul className="space-y-2 text-sm text-apple-secondary">
              <li><a href="#" className="hover:underline">Find a Store</a></li>
              <li><a href="#" className="hover:underline">Genius Bar</a></li>
              <li><a href="#" className="hover:underline">Today at Apple</a></li>
              <li><a href="#" className="hover:underline">Group Reservations</a></li>
              <li><a href="#" className="hover:underline">Apple Camp</a></li>
              <li><a href="#" className="hover:underline">Apple Store App</a></li>
              <li><a href="#" className="hover:underline">Certified Refurbished</a></li>
              <li><a href="#" className="hover:underline">Apple Trade In</a></li>
              <li><a href="#" className="hover:underline">Financing</a></li>
              <li><a href="#" className="hover:underline">Carrier Deals at Apple</a></li>
              <li><a href="#" className="hover:underline">Order Status</a></li>
              <li><a href="#" className="hover:underline">Shopping Help</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-apple-text mb-4">For Business</h3>
            <ul className="space-y-2 text-sm text-apple-secondary">
              <li><a href="#" className="hover:underline">Apple and Business</a></li>
              <li><a href="#" className="hover:underline">Shop for Business</a></li>
            </ul>
            <h3 className="font-semibold text-apple-text mb-4 mt-8">For Education</h3>
            <ul className="space-y-2 text-sm text-apple-secondary">
              <li><a href="#" className="hover:underline">Apple and Education</a></li>
              <li><a href="#" className="hover:underline">Shop for K-12</a></li>
              <li><a href="#" className="hover:underline">Shop for College</a></li>
            </ul>
            <h3 className="font-semibold text-apple-text mb-4 mt-8">For Healthcare</h3>
            <ul className="space-y-2 text-sm text-apple-secondary">
              <li><a href="#" className="hover:underline">Apple and Healthcare</a></li>
            </ul>
            <h3 className="font-semibold text-apple-text mb-4 mt-8">For Government</h3>
            <ul className="space-y-2 text-sm text-apple-secondary">
              <li><a href="#" className="hover:underline">Apple and Government</a></li>
              <li><a href="#" className="hover:underline">Shop for Veterans and Military</a></li>
              <li><a href="#" className="hover:underline">Shop for State and Local Employees</a></li>
              <li><a href="#" className="hover:underline">Shop for Federal Employees</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-apple-text mb-4">Apple Values</h3>
            <ul className="space-y-2 text-sm text-apple-secondary">
              <li><a href="#" className="hover:underline">Accessibility</a></li>
              <li><a href="#" className="hover:underline">Education</a></li>
              <li><a href="#" className="hover:underline">Environment</a></li>
              <li><a href="#" className="hover:underline">Inclusion and Diversity</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Racial Equity and Justice</a></li>
              <li><a href="#" className="hover:underline">Supply Chain Innovation</a></li>
            </ul>
            <h3 className="font-semibold text-apple-text mb-4 mt-8">About Apple</h3>
            <ul className="space-y-2 text-sm text-apple-secondary">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Apple Leadership</a></li>
              <li><a href="#" className="hover:underline">Career Opportunities</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Ethics & Compliance</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Contact Apple</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 pt-4">
          <p className="text-sm text-apple-secondary mb-4">
            More ways to shop: <a href="#" className="text-apple-blue hover:underline">Find an Apple Store</a> or <a href="#" className="text-apple-blue hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE (1-800-692-7753).
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-wrap items-center text-sm text-apple-secondary mb-4 md:mb-0">
              <span>Copyright © 2025 Apple Inc. All rights reserved.</span>
              <span className="mx-2 hidden md:inline">|</span>
              <a href="#" className="hover:underline mr-2">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:underline mr-2">Terms of Use</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:underline mr-2">Sales and Refunds</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:underline mr-2">Legal</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
            
            <div className="text-sm text-apple-secondary">
              United States
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;