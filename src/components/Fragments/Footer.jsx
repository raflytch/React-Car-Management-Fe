import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Stay Updated!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Subscribe to get the latest news and updates.
          </p>
          <form className="mt-4 flex justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-xs rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Web Development
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">About</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
            <div className="mt-4 flex justify-center gap-4 sm:justify-start">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition"
                aria-label="GitHub"
              >
                <img
                  src="https://api.iconify.design/mdi/github.svg"
                  alt="GitHub"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
