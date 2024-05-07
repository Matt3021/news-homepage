import Image from "next/image"
import logo from '../../public/logo.svg'
import heroImage from '../../public/image-web-3-desktop.jpg'
import imagePc from '../../public/image-retro-pcs.jpg'
import topLaptops from '../../public/image-top-laptops.jpg'
import gamingGrowth from '../../public/image-gaming-growth.jpg'

export default function Home () {
  return (
    <div>
      <div className="top-content">
        <Image src={logo} alt="logo"/>
        <nav>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="left-side">
          <Image src={heroImage} alt="Hero Image"/>
          <div>
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div>
            <p>We dive into next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button>Read More</button>
          </div>
        </div>
        <div className="right-side">
          <h1>New</h1>
          <div>
            <div className="title">Hydrogen VS Eletric Cars</div>
            <div className="resume">Will hydrogen-fueled cars ever catch up to EVs?</div>
          </div>
          <div>
            <div className="title">The Downsides of AI Artistry</div>
            <div className="resume">What are the possible adverse effects of on-demand AI image generation?</div>
          </div>
          <div>
            <div className="title">Is VC Funding Drying Up?</div>
            <div className="resume">Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
          </div>
        </div>
      </div>
      <div className="bottom-content">
        <div>
          <Image src={imagePc} alt="Pc Retro Image"/>
          <div>
            <h1>01</h1>
            <h2>Reviving Retro PCs</h2>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div>
          <Image src={topLaptops} alt="Pc Retro Image"/>
          <div>
            <h1>02</h1>
            <h2>Top 10 Laptops of 2022</h2>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div>
          <Image src={gamingGrowth} alt="Pc Retro Image"/>
          <div>
            <h1>03</h1>
            <h2>The Growth of Gaming</h2>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}