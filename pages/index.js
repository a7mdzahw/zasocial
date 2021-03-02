import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className=" d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="m-2 text-warning display-4">
          Social App For Easy Communication
        </h1>
        <i class="bi bi-slack display-1"></i>
      </div>
    </>
  );
}
