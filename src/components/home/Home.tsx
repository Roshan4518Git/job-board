
import FetchApi from "../api/fetchApi";

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center lg:text-start md:text-start p-10">
        Unleash Your Talent Potential <br /> with PowerTech
      </h1>
      <FetchApi />
    </div>
  );
}

export default Home;
