import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#ECE6DB] bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}

        <div className="py-16 grid lg:grid-cols-5 gap-10">

          {/* Brand */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="Deepti Art"
                className="w-12 h-12 object-contain"
              />

              <div>
                <h2 className="text-3xl font-serif font-semibold">
                  Deepti Art
                </h2>

                <p className="text-xs text-neutral-500">
                  Handmade • Pure • Original
                </p>
              </div>

            </div>

            <p className="mt-5 text-neutral-600 leading-7 max-w-md">
              Deepti Art is a curated marketplace for original handmade artworks.
              Discover verified artists, explore unique creations, and connect
              directly through inquiries.
            </p>

          </div>

          {/* Marketplace */}

          <div>

            <h3 className="font-semibold text-lg mb-4">
              Marketplace
            </h3>

            <ul className="space-y-3 text-neutral-600">

              <li>Explore Artworks</li>
              <li>Collections</li>
              <li>Trending Artists</li>
              <li>Featured Art</li>

            </ul>

          </div>

          {/* Artists */}

          <div>

            <h3 className="font-semibold text-lg mb-4">
              Artists
            </h3>

            <ul className="space-y-3 text-neutral-600">

              <li>Artist Directory</li>
              <li>Apply as Artist</li>
              <li>Artist Dashboard</li>
              <li>Artist Guidelines</li>

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="font-semibold text-lg mb-4">
              Support
            </h3>

            <ul className="space-y-3 text-neutral-600">

              <li>Contact Us</li>
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Shipping Policy</li>

            </ul>

          </div>

        </div>

         

        <div className="border-t border-[#ECE6DB] py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-sm text-neutral-500">
            © 2026 Deepti Art. All Rights Reserved.
          </div>

          <div className="flex gap-8 text-sm text-neutral-500">

            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">Refund Policy</a>

          </div>

        </div>

      </div>
    </footer>
  );
}