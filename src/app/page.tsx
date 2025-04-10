import Header from "@/components/Header";

export default function App(): React.JSX.Element {
  return (
    <div className=" flex justify-center items-center bg-[#0A0A0A] h-full w-full p-8 text-[#90A1B9] text-xs">
      <div className="box-border bg-[#0F172B] h-full w-full rounded-md border border-[#314158]">
        <Header />
        <main></main>
        <footer></footer>
      </div>
    </div>
  );
}
