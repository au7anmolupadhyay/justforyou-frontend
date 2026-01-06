import {
  Truck,
  RefreshCcw,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20">
      
      {/* TOP FEATURES BAR */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <Feature
            icon={<Truck />}
            title="Free Shipping"
            desc="On orders above ₹999"
          />
          <Feature
            icon={<RefreshCcw />}
            title="Easy Returns"
            desc="30 day return policy"
          />
          <Feature
            icon={<ShieldCheck />}
            title="Secure Payment"
            desc="100% secure checkout"
          />
          <Feature
            icon={<Headphones />}
            title="24/7 Support"
            desc="Dedicated support"
          />
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold text-brand mb-3">
              JustForYou
            </h2>
            <p className="text-sm text-gray-600">
              Your one-stop destination for fashion and lifestyle.
              Discover the latest trends from top brands.
            </p>
          </div>

          {/* SHOP */}
          <FooterColumn
            title="Shop"
            items={["Men", "Women", "Kids", "Beauty", "Home"]}
          />

          {/* CUSTOMER SERVICE */}
          <FooterColumn
            title="Customer Service"
            items={[
              "Contact Us",
              "FAQs",
              "Shipping Info",
              "Returns",
              "Size Guide",
            ]}
          />

          {/* COMPANY */}
          <FooterColumn
            title="Company"
            items={[
              "About Us",
              "Careers",
              "Press",
              "Sustainability",
            ]}
          />
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-300">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
            <p>© 2026 JustForYou. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <span>Privacy Policy</span>
              <span>Terms</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Feature = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="flex items-center gap-4">
    <div className="h-10 w-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
      {icon}
    </div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  </div>
);

const FooterColumn = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div>
    <h3 className="font-semibold mb-3">{title}</h3>
    <ul className="space-y-2 text-sm text-gray-600">
      {items.map((item) => (
        <li
          key={item}
          className="hover:text-brand cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
