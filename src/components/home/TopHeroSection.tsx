const TopHeroSection = () => {
  return (
    // bg-white ensures the text is always readable. py-16 adds space above and below.
    <section className="w-full bg-white py-12 md:py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Trusted Agricultural <br /> 
            <span className="text-black">Equipment Supplier</span>
          </h1>

          <div className="space-y-4">
            <p className="text-gray-600 text-xl font-medium">
              3DH Trading Pvt Ltd is a trusted importer and distributor providing high-quality equipment.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              We connect global manufacturers with local markets, delivering reliable products 
              that help farmers and businesses improve productivity and efficiency.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: IMAGE DESIGN */}
        <div className="relative">
          {/* Main Image with rounded corners as seen in screenshot */}
          <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="/images/farming-hero.png" 
              alt="Farmer working"
              className=" object-contain"
            />
          </div>

          

         
        </div>
      </div>
    </section>
  );
};

export default TopHeroSection;