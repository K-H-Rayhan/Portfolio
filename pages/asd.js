import React, { useState } from "react";
function asd() {
  const ref = React.useRef(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetchData();
    import("@lottiefiles/lottie-player");
  }, []);
  const fetchData = async () => {
    let petsData = await fetch("https://jsonplaceholder.typicode.com/photos");
    let convertData = await petsData.json();
    setData(convertData);
    console.log(setData);
    setTimeout(function () {
      setLoading(false);
    }, 5000);
  };
  return loading ? (
    <div className=" w-full flex justify-content items-center">
      <main>
        <lottie-player
          ref={ref}
          src="https://assets5.lottiefiles.com/packages/lf20_szlepvdh.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></lottie-player>
      </main>
    </div>
  ) : (
    <div>
      {data.map((event, i) => {
        return (
          <div key={i}>
            <img alt="s" src={event.url} width={200} height={200}></img>
            <h1>
              {i}.{event.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default asd;
