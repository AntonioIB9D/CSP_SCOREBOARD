import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchSmcData } from "../services/scmService";

export type ContainersLayoutProps = {
  pressNumber: number;
};

export default function ContainersLayout({
  pressNumber,
}: ContainersLayoutProps) {
  const [time, setTime] = useState(new Date());

  const getShift = (date: Date): string => {
    const minutes = date.getHours() * 60 + date.getMinutes();

    // Definimos los límites en minutos
    const shift1Start = 23 * 60 + 45; // 23:45
    const shift1End = 6 * 60 + 5; // 06:05
    const shift2End = 15 * 60 + 35; // 15:35
    const shift3End = 23 * 60 + 45; // 23:45

    if (minutes >= shift1Start || minutes < shift1End) {
      return "-";
    } else if (minutes >= shift1End && minutes < shift2End) {
      return "2";
    } else if (minutes >= shift2End && minutes < shift3End) {
      return "3";
    } else {
      return "-";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // actualiza cada segundo

    return () => clearInterval(interval); // limpia el intervalo al desmontar
  }, []);

  //useQuery
  const { data: smcPressDataResult } = useQuery({
    queryKey: ["smcPresData", pressNumber],
    queryFn: () => fetchSmcData(Number(pressNumber)),
    refetchInterval: 10000,
    refetchIntervalInBackground: true,
  });

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl text-[#FF791B]">Press #{pressNumber}</h1>
        <p className="text-2xl">
          The information displayed here is the current station information
        </p>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-4 w-[38%]">
          <div className="bg-[#121214] p-4 rounded-2xl flex gap-4">
            <div className="bg-[#000000] p-8 rounded-2xl flex flex-col gap-4 justify-center items-center">
              <h1 className="text-7xl text-[#778995] font-medium">Shift</h1>
              <h1 className="text-9xl text-[#D57F43]">{getShift(time)}</h1>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-[#000000] p-4 rounded-2xl flex flex-col gap-4 justify-center items-center">
                <h1 className="text-6xl text-[#778995] font-medium">
                  SMC Vanwert
                </h1>
                <h1 className="text-9xl text-[#D57F43]">
                  {smcPressDataResult?.VanwertCount ?? "-"}
                </h1>
              </div>
              <div className="bg-[#000000] p-4 rounded-2xl flex flex-col gap-4 justify-center items-center">
                <h1 className="text-6xl text-[#778995] font-medium">
                  SMC Grabill
                </h1>
                <h1 className="text-9xl text-[#D57F43]">
                  {smcPressDataResult?.GrabillCount ?? "-"}
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-[#121214] p-4 rounded-2xl flex gap-4 items-center">
            <i className="bi bi-wifi text-[#13CB6C] text-2xl"></i> Station
            information is synchronized in real time
          </div>
        </div>
        <div className="bg-[#121214] p-4 rounded-2xl w-[62%] flex flex-col gap-4">
          <div className="w-full flex justify-end gap-2">
            <div className="rounded-full w-4 h-4 bg-[#FA7A6A]"></div>
            <div className="rounded-full w-4 h-4 bg-[#432E4E]"></div>
            <div className="rounded-full w-4 h-4 bg-[#FDC96F]"></div>
          </div>
          <h1 className="text-2xl font-medium">Station Information</h1>
          <div className="w-full grid grid-cols-3 gap-4">
            <div className="bg-[#000000] p-4 rounded-2xl flex flex-col gap-4 justify-center items-center">
              <h2 className="text-4xl text-[#778995] font-medium">SMC A</h2>
              <i className="bi bi-upc-scan text-6xl"></i>
              <p className="text-4xl text-[#D57F43] font-medium">
                {smcPressDataResult?.data[0]?.serie ?? "No scan data"}
              </p>
            </div>
            <div className="bg-[#000000] p-4 rounded-2xl flex flex-col gap-4 justify-center items-center">
              <h2 className="text-4xl text-[#778995] font-medium">Vendor A</h2>
              <i className="bi bi-person-vcard text-6xl"></i>
              <p className="text-4xl text-[#D57F43] font-medium">
                {smcPressDataResult?.data[0]?.supplierName ?? "No scan data"}
              </p>
            </div>
            <div className="bg-[#000000] p-4 rounded-2xl flex flex-col gap-4 justify-center items-center">
              <i className="bi bi-truck text-6xl"></i>
              <h2 className="text-4xl text-[#778995] font-medium">
                Load Time A
              </h2>
              <p className="text-4xl text-[#D57F43] font-medium">
                {smcPressDataResult?.data[0]?.fecha_hora.split(" ")[1] ??
                  "No scan data"}
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gap-4">
            <div className="bg-[#000000] p-4 rounded-2xl flex flex-col gap-4 justify-center items-center">
              <h2 className="text-4xl text-[#778995] font-medium">SMC B</h2>
              <i className="bi bi-upc-scan text-6xl"></i>
              <p className="text-4xl text-[#D57F43] font-medium">
                {smcPressDataResult?.data[1]?.serie ?? "No scan data"}
              </p>
            </div>
            <div className="bg-[#000000] p-4 rounded-2xl flex flex-col gap-4 justify-center items-center">
              <h2 className="text-4xl text-[#778995] font-medium">Vendor B</h2>
              <i className="bi bi-person-vcard text-6xl"></i>
              <p className="text-4xl text-[#D57F43] font-medium">
                {smcPressDataResult?.data[1]?.supplierName ?? "No scan data"}
              </p>
            </div>
            <div className="bg-[#000000] p-4 rounded-2xl flex flex-col gap-4 justify-center items-center">
              <i className="bi bi-truck text-6xl"></i>
              <h2 className="text-4xl text-[#778995] font-medium">
                Load Time B
              </h2>
              <p className="text-4xl text-[#D57F43] font-medium">
                {smcPressDataResult?.data[1]?.fecha_hora.split(" ")[1] ??
                  "No scan data"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
