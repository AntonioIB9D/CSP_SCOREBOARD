import "./App.css";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src="/satelite-svgrepo-com.svg" alt="CSP LOGO" width={350} />
        <h1 className="text-6xl font-medium">CSP PRESS SCOREBOARD</h1>
      </div>
      <div className="flex gap-4">
        <div className="bg-[#121214] p-4 rounded-2xl flex gap-6">
          <div className="flex justify-center items-center">
            <i className="bi bi-upc-scan text-4xl"></i>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-medium text-center text-[#D57F43]">
              SMC ID
            </h1>
            <p>Get the SMC ID in real time</p>
          </div>
        </div>
        <div className="bg-[#121214] p-4 rounded-2xl flex gap-6">
          <div className="flex justify-center items-center">
            <i className="bi bi-person-vcard text-4xl"></i>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-medium text-center text-[#D57F43]">
              VENDOR NAME
            </h1>
            <p>
              Get the SMC vendor name <br></br>located in the station
            </p>
          </div>
        </div>
        <div className="bg-[#121214] p-4 rounded-2xl flex gap-6">
          <div className="flex justify-center items-center">
            <i className="bi bi-truck text-4xl"></i>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-medium text-center text-[#D57F43]">
              LOAD TIME
            </h1>
            <p className="text-center">
              Get the SMC load time <br></br> in the station
            </p>
          </div>
        </div>
        <div className="bg-[#121214] p-4 rounded-2xl flex gap-6">
          <div className="flex justify-center items-center">
            <i className="bi bi-calculator text-4xl"></i>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-medium text-center text-[#D57F43]">
              VANWERT/GRABILL COUNT
            </h1>
            <p className="text-center">
              Get the SMC vanwert/grabill count <br></br> in all the shift
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
