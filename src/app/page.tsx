import Image from "next/image"
import logo from '../../public/logo.svg'
import heroImage from '../../public/image-web-3-desktop.jpg'
import imagePc from '../../public/image-retro-pcs.jpg'
import topLaptops from '../../public/image-top-laptops.jpg'
import gamingGrowth from '../../public/image-gaming-growth.jpg'

export default function Home () {
  return (
    <div className="w-screen flex items-center
     flex-col mt-24">
      <div className="top-content flex gap-[611px] mb-[60px]">
        <Image src={logo} alt="logo" width={70} height={30}/>
        <nav>
          <ul className="flex justify-between w-[440px] text-[#b9b6bd] font-semibold">
            <li><a href="" className="hover:text-[#cb918d]">Home</a></li>
            <li><a href="" className="hover:text-[#cb918d]">New</a></li>
            <li><a href="" className="hover:text-[#cb918d]">Popular</a></li>
            <li><a href="" className="hover:text-[#cb918d]">Trending</a></li>
            <li><a href="" className="hover:text-[#cb918d]">Categories</a></li>
          </ul>
        </nav>
      </div>
      <div className="main-content flex gap-9">
        <div className="left-side w-[730px] h-[515px]">
          <Image src={heroImage} alt="Hero Image" className="mb-10"/>
          <div className="flex gap-[100px]">
            <h1 className="text-5xl text-[#00001c] font-extrabold w-[800px]">The Bright Future of Web 3.0?</h1>
            <div>
              <p className="text-[#726f7a] mb-[40px]">We dive into next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button className="w-48 h-14 bg-[#f15d51] text-white text-center text-sm uppercase font-bold tracking-[3px] hover:bg-[#060525] hover:text-white">Read More</button>
            </div>
          </div>
        </div>
        <div className="right-side bg-[#060525] w-[350px] p-5">
          <h1 className="text-[#e9ae50] font-bold text-4xl mb-10">New</h1>
          <div className="text-white border-b border-[#cfd0e5] mb-[15px]">
            <div className="title font-bold mb-[10px] text-[20px] hover:text-[#e5ac5d]">Hydrogen VS Eletric Cars</div>
            <div className="resume mb-[38px] text-[#cfd0e5]">Will hydrogen-fueled cars ever catch up to EVs?</div>
          </div>
          <div className="text-white border-b border-[#cfd0e5] mb-[15px]">
            <div className="title font-bold mb-[10px] text-[20px] hover:text-[#e5ac5d]">The Downsides of AI Artistry</div>
            <div className="resume mb-[38px] text-[#cfd0e5]">What are the possible adverse effects of on-demand AI image generation?</div>
          </div>
          <div className="text-white">
            <div className="title font-bold mb-[10px] text-[20px] hover:text-[#e5ac5d]">Is VC Funding Drying Up?</div>
            <div className="resume mb-[38px] text-[#cfd0e5]">Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
          </div>
        </div>
      </div>
      <div className="bottom-content flex  gap-9 mt-[50px]">
        <div className="flex w-[350px]">
          <Image src={imagePc} alt="Pc Retro Image" className="w-[100px] mr-[26px]"/>
          <div>
            <h1 className="text-4xl text-[#c8c7cd] font-bold">01</h1>
            <h2 className="text-sm font-semibold text-[#000015] my-3 hover:text-[#da605b]">Reviving Retro PCs</h2>
            <p className="text-[#5b5861]">What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="flex w-[350px]">
          <Image src={topLaptops} alt="Pc Retro Image" className="w-[100px] mr-[26px]"/>
          <div>
            <h1 className="text-4xl text-[#c8c7cd] font-bold">02</h1>
            <h2 className="text-sm font-semibold text-[#000015] my-3 hover:text-[#da605b]">Top 10 Laptops of 2022</h2>
            <p className="text-[#5b5861]">Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="flex w-[350px]">
          <Image src={gamingGrowth} alt="Pc Retro Image" className="w-[100px] mr-[26px]"/>
          <div>
            <h1 className="text-4xl text-[#c8c7cd] font-bold">03</h1>
            <h2 className="text-sm font-semibold text-[#000015] my-3 hover:text-[#da605b]">The Growth of Gaming</h2>
            <p className="text-[#5b5861]">How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}