import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { VALIDATIONS } from "../data/validation";

const Carousel = (Slider as any).default ? (Slider as any).default : Slider;

export default function AgriStories() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [people, setPeople] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5&nat=us,gb,ca")
      .then((res) => res.json())
      .then((data) => {
        const formattedPeople = data.results.map((user: any, index: number) => ({
          id: user.login.uuid,
          image: user.picture.large,
          quote: index === 0 
            ? "The solar pump system didn't just save energy; it provided uninterrupted water for our remote assets during the dry season."
            : "Exceptional durability. We've operated these machines in the harshest terrains without a single failure.",
          author: `${user.name.first} ${user.name.last}`,
          role: index % 2 === 0 ? "FARM OWNER" : "ESTATE MANAGER",
        }));
        setPeople(formattedPeople);
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#E91E63">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  return (
    <div className="bg-[#F6F6F6] min-h-screen pt-20 text-left font-sans">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-[65vh] flex items-center overflow-hidden bg-gray-900">
        <img 
          src="/images/industrial_hero.jpg" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60" 
          alt="Agri Success Hero" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 w-full text-white z-10">
          <p className="text-sm uppercase tracking-[0.3em] font-bold text-[#E91E63] mb-4">
            Agri Stories
          </p>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight drop-shadow-xl">
            Farmer Success <br /> 
            <span className="text-[#E91E63]">Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl font-medium leading-relaxed">
            Watch how our products perform in real conditions. No gloss, just grit. 
            Documented across the toughest farming environments.
          </p>
        </div>
      </section>

      {/* --- 2. FIELD PERFORMANCE --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight text-left">Field Performance</h2>
          <div className="h-1.5 w-16 bg-[#E91E63] mt-3" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {VALIDATIONS.map((item) => {
            const videoId = item.videoUrl.split('/').pop()?.split('?')[0];
            const ytThumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

            return (
              <div key={item.id} className="group cursor-pointer" onClick={() => setActiveVideo(item.videoUrl)}>
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-lg bg-gray-100">
                  <img 
                    src={ytThumb} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    alt={item.customerName}
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transition group-hover:scale-110">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-[#E91E63] border-b-[10px] border-b-transparent ml-1" />
                     </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2 leading-tight">{item.customerName}</h3>
                <p className="text-gray-600 italic text-sm">"{item.description}"</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- 3. BENTO GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-black rounded-3xl p-10 flex flex-col justify-end min-h-[500px] relative overflow-hidden group">
            <img 
              src="/images/validation_hero_image.png" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
              alt="Facilities" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            <div className="relative z-10">
              <div className="w-12 h-1 bg-[#E91E63] mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Engineering for Resilience</h2>
              <p className="text-white/90 leading-relaxed font-medium">
                Our testing facilities subject every machine to 500+ hours of continuous operation before market release.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm min-h-[220px]">
              <img src="/images/uptime_stat.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-white bg-black/50 backdrop-blur-sm p-2 rounded-lg">
                  Consistent performance verified across all pump systems.
                </p>
              </div>
            </div>

            <div className="relative bg-[#1A1A1A] rounded-3xl overflow-hidden min-h-[220px]">
              <img src="/images/global_map.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
              <div className="absolute top-4 left-4">
                <p className="text-xs font-bold tracking-widest text-gray-300 uppercase bg-black/50 backdrop-blur-sm p-2 rounded-lg">
                  Global Operations
                </p>
              </div>
            </div>

            <div className="md:col-span-2 bg-[#F1F1F1] rounded-3xl p-8 min-h-[250px] flex items-center">
              {people.length > 0 ? (
                <Carousel {...sliderSettings} className="w-full">
                  {people.map((t) => (
                    <div key={t.id} className="outline-none">
                      <div className="flex flex-col md:flex-row items-center gap-8 px-4 text-left">
                        <img 
                          src={t.image} 
                          className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-xl flex-shrink-0 grayscale" 
                          alt={t.author} 
                        />
                        <div>
                          <p className="text-xl text-gray-800 font-medium italic mb-4">"{t.quote}"</p>
                          <p className="text-xs font-black tracking-widest text-gray-900 uppercase">
                            {t.author}, <span className="text-[#E91E63] font-bold">{t.role}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              ) : (
                <div className="w-full text-center text-gray-400 font-bold uppercase tracking-widest">
                  Loading Agri Stories...
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- VIDEO POPUP --- */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white font-bold tracking-widest hover:text-[#E91E63]" onClick={() => setActiveVideo(null)}>× CLOSE VIDEO</button>
            <iframe src={`${activeVideo}?autoplay=1`} className="w-full h-full rounded-2xl shadow-2xl border-2 border-white/10" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
}