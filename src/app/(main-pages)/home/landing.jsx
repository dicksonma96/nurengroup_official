import "./style.scss";
import LandingLogo from "@/components/landing_logo";
import AssetPath from "@/app/utils/assetpath";

export default function Landing() {
  return (
    <section className="landing row">
      <div className="grid_content">
        <div className="grid_row row">
          <GridImage src={AssetPath("Landing/1.jpg")} />
          <GridBox color="grey" style={{ flex: 1 }} />
          <GridImage src={AssetPath("Landing/2.jpg")} />

          <GridBox color=" yellow" style={{ flex: 2 }} />
          <GridImage src={AssetPath("Landing/3.jpg")} />

          <GridBox color="white" style={{ flex: 1.5 }} />
          <GridImage src={AssetPath("Landing/4.jpg")} />
        </div>
        <div className="grid_row row">
          <GridBox color="grey" style={{ flex: 1 }} />
          <GridBox color="white" style={{ flex: 2 }} />

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
          <GridImage src="https://media.nurengroup.com/Landing/7.jpg" />
          <GridBox color="yellow" style={{ flex: 2 }} />

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
          <GridBox color="white" style={{ flex: 1 }} />
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
          <div className="grid_box rowc landing_logo" style={{ flex: 3 }}>
            <LandingLogo />
          </div>

          <GridImage className="mobile_hide" src={AssetPath("Landing/9.jpg")} />
        </div>
        <div className="grid_row row">
          <GridBox color="pink" style={{ flex: 2 }} />
          <GridImage style={{ flex: 2 }} src={AssetPath("Landing/10.jpg")} />
          <GridBox color="green" style={{ flex: 3 }} />
          <GridImage src={AssetPath("Landing/11.jpg")} />
        </div>
      </div>
    </section>
  );
}

function GetRandomSpeed() {
  const speed = [0, 0.2, 0.4, 0.6, 0.8];

  return speed[Math.floor(Math.random() * speed.length)];
}

function GridImage({ src, style, className = "" }) {
  return (
    <div
      className={`grid_image rowc ${className}`}
      style={{ ...style, animationDelay: `${GetRandomSpeed()}s` }}
    >
      <img className="grayscale" src={src} />
    </div>
  );
}

function GridBox({ style, color }) {
  return (
    <div
      className={`grid_box ${color}`}
      style={{ ...style, animationDelay: `${GetRandomSpeed()}s` }}
    ></div>
  );
}
