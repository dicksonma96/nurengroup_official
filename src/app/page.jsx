import "./style.scss";
import LandingLogo from "@/components/landing_logo";
import AssetPath from "@/app/utils/assetpath";

export default function Home() {
  return (
    <main className="landing row">
      <div className="grid_content">
        <div className="grid_row row">
          <GridImage src={AssetPath("Landing/1.jpg")} />
          <div className="grid_box grey" style={{ flex: 1 }}></div>
          <GridImage src={AssetPath("Landing/2.jpg")} />

          <div className="grid_box yellow" style={{ flex: 2 }}></div>
          <GridImage src={AssetPath("Landing/3.jpg")} />

          <div className="grid_box white" style={{ flex: 1.5 }}></div>
          <GridImage src={AssetPath("Landing/4.jpg")} />
        </div>
        <div className="grid_row row">
          <div className="grid_box grey" style={{ flex: 1 }}></div>
          <div className="grid_box" style={{ flex: 2 }}></div>

          <GridImage
            style={{ flex: 3 }}
            src={AssetPath("Landing/color1.jpg")}
          />
          <GridImage
            style={{ flex: 2 }}
            src={AssetPath("Landing/color2.jpg")}
          />
          <GridImage
            style={{ flex: 2 }}
            src={AssetPath("Landing/color3.jpg")}
          />
          <GridImage src={AssetPath("Landing/5.jpg")} />
        </div>
        <div className="grid_row row">
          <div className="grid_box col" style={{ height: "100%", gap: "1%" }}>
            <GridImage
              style={{ height: "50%" }}
              src="https://media.nurengroup.com/Landing/6.jpg"
            />
            <GridImage
              style={{ height: "50%" }}
              src="https://media.nurengroup.com/Landing/7.jpg"
            />
          </div>
          <div className="grid_box yellow" style={{ flex: 2 }}></div>

          <GridImage style={{ flex: 2 }} src={AssetPath("Landing/8.jpg")} />
          <GridImage
            style={{ flex: 2 }}
            src={AssetPath("Landing/color4.jpg")}
          />
          <GridImage
            style={{ flex: 3 }}
            src={AssetPath("Landing/color5.jpg")}
          />
        </div>
        <div className="grid_row row">
          <div className="grid_box"></div>
          <div className="grid_box video" style={{ flex: 2 }}>
            <iframe
              src="https://www.youtube.com/embed/VKoznKXN-Pk?si=SxUrcEjZvIcvjeAN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <GridImage
            style={{ flex: 2 }}
            src={AssetPath("Landing/color6.jpg")}
          />
          <div className="grid_box rowc" style={{ flex: 3 }}>
            <LandingLogo />
          </div>

          <GridImage src={AssetPath("Landing/9.jpg")} />
        </div>
        <div className="grid_row row">
          <div className="grid_box pink" style={{ flex: 2 }}></div>
          <GridImage style={{ flex: 2 }} src={AssetPath("Landing/10.jpg")} />

          <div className="grid_box green" style={{ flex: 3 }}></div>

          <GridImage src={AssetPath("Landing/11.jpg")} />
        </div>
      </div>
    </main>
  );
}

function GridImage({ src, style }) {
  return (
    <div className="grid_image rowc" style={style}>
      <img className="grayscale" src={src} />
    </div>
  );
}
