import Logo from "@components/Logo";
import useFetch from "04-hooks/use-fetcher";
import useSWR from "swr";

const Landing = () => {
  const { fetcher } = useFetch();
  const { data } = useSWR(
    `https://restcountries.com/v3.1/all
    `,
    fetcher
  );

  return (
    <div>
      <div className="flex flex-col items-center my-10 ">
        <Logo backgroundColor="#2b2b2b" size={500} />
      </div>
      <div className="text-2xl w-full flex flex-col text-light my-3">
        <div className="flex text-dark dark:text-light justify-center">
          Trebuchet v<sub>0.0.1</sub>
        </div>
        <div className=" flex text-dark dark:text-light justify-center">
          {data?.length}
        </div>
      </div>
    </div>
  );
};

export default Landing;
