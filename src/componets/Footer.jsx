import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">GameHub</h2>
          <p className="text-sm">
            Explore the latest games, connect with developers, and dive into the
            world of gaming. Built for players, powered by passion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/games" className="hover:text-white">
                Games
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/faq" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="/help" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div className="">
          <h3 className="text-xl font-semibold text-white mb-4">
            Join Our Community
          </h3>
          <p className="text-sm mb-4">Subscribe for updates and giveaways!</p>
          <form className="flex flex-col sm:flex-row gap-2 w-">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-md border-2 w-full text-white focus:outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-md">
              Subscribe
            </button>
          </form>

          <div className="flex gap-4 mt-6 text-2xl">
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-white">
              <FaDiscord />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} GameHub. All rights reserved.</p>
        <p className="text-gray-500 mt-1">Powered by Forkit.dev</p>
      </div>
    </footer>
  );
};

export default Footer;
