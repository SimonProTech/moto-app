import Header from "@/app/components/header/Header";
import Wrapper from "@/app/components/Wrapper";
import FiltersAndDataWrapper from "@/app/trasy/components/FiltersAndDataWrapper";

const Page = async ({ searchParams }: { searchParams: any }) => {
  const params = await searchParams;
  const page = Number(params?.page ?? 1);
  return (
    <section className="relative">
      <Header />
      <div className="bg-black rounded-b-[70px] h-[340px]">
        <div className="text-center lg:px-0 px-10 lg:pt-42 pt-32">
          <h1 className="text-5xl text-ring font-bold">Wszystkie trasy</h1>
          <p className="text-gray-200 md:text-xl text-lg mt-8">
            Odkrywaj trasy w całej Polsce i filtruj je według swoich
            preferencji.
          </p>
        </div>
      </div>
      <Wrapper>
        <FiltersAndDataWrapper page={page} params={params} />
      </Wrapper>
    </section>
  );
};

export default Page;
