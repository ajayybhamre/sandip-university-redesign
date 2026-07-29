import { useState } from "react";

import SocialSidebar from "./SocialSidebar";
import SocialGallery from "./SocialGallery";
import FloatingCards from "./FloatingCards.jsx";

export default function SocialMedia() {

const [active,setActive]=useState("Instagram");

return(

<section className="relative py-24 overflow-hidden">

<div className="max-w-[1600px] mx-auto px-6">

<div className="text-center mb-20">

<p className="uppercase tracking-[5px] text-black">

DIGITAL CAMPUS

</p>

<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold    mt-4">

Connect With Our Campus

</h2>

<p className="text-gray-600 mt-5">

Explore every moment happening across the university.

</p>

</div>

<div className="grid lg:grid-cols-4 gap-10">

<SocialSidebar
active={active}
setActive={setActive}
/>

<div className="lg:col-span-3 relative">

<FloatingCards/>

<SocialGallery
active={active}
/>

</div>

</div>

</div>

</section>

)

}