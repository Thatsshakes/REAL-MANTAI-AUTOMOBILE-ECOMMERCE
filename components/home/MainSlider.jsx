//CENTER MAIN CAROUSEL OF JUMIA PAGE
// components/home/MainSlider.js
export default function MainSlider() {
  return (
    <div className="w-full h-full relative cursor-pointer group bg-neutral-900">
      <img 
        src="https://unsplash.com" 
        alt="Main Promo Campaign"
        className="w-full h-full object-cover object-center" 
      />
      
      {/* Slider dots indicators matching our v4 variable */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        <button className="w-2 h-2 rounded-full bg-brand-primary shadow"></button>
        <button className="w-2 h-2 rounded-full bg-white/60 hover:bg-white"></button>
        <button className="w-2 h-2 rounded-full bg-white/60 hover:bg-white"></button>
      </div>
    </div>
  );
}
