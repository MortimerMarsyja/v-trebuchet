import Logo from "@components/Logo";

const Landing = () => {
  return (
    <div>
      <div className="flex flex-col items-center m-10">
        <Logo backgroundColor="#2b2b2b" size={500} />
      </div>
      <div className="text-2xl w-full flex flex-col text-light m-3">
        <div className="flex text-dark justify-center">
          Trebuchet v<sub>0.0.1</sub>
        </div>
      </div>
    </div>
  );
};

export default Landing;
