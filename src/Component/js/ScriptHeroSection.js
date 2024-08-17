import React, { useState, useEffect, useRef } from "react";

export const EfekMengetik = ({ teks }) => {
  const [teksDitampilkan, setTeksDitampilkan] = useState("");
  const kecepatanMengetik = 50;
  const kataRef = useRef(null);

  useEffect(() => {
    let indeks = 0;
    setTeksDitampilkan("");

    const interval = setInterval(() => {
      setTeksDitampilkan((sebelumnya) => sebelumnya + teks[indeks]);
      indeks += 1;
      if (indeks >= teks.length) {
        clearInterval(interval);
      }
    }, kecepatanMengetik);

    return () => clearInterval(interval);
  }, [teks]);

  useEffect(() => {
    function pisahkanKataKeHuruf() {
      if (kataRef.current) {
        const kata = kataRef.current;
        const huruf = kata.textContent
          .split("")
          .map((huruf) => `<span class="huruf">${huruf}</span>`)
          .join("");
        kata.innerHTML = huruf;
      }
    }

    pisahkanKataKeHuruf();

    if (kataRef.current) {
      const kata = kataRef.current;
      const huruf = kata.querySelectorAll(".huruf");
      huruf.forEach((huruf, indeks) => {
        huruf.style.animation = `munculHuruf 0.1s forwards`;
        huruf.style.animationDelay = `${indeks * 0.1}s`;
      });

      const durasiAnimasi = teks.length * 0.1 * 1000;
      const elemenTransisi = document.getElementById("kata");
      if (elemenTransisi) {
        const transisiTimeout = setTimeout(() => {
          elemenTransisi.classList.add("transisi-ke-biru");
        }, durasiAnimasi);

        return () => clearTimeout(transisiTimeout);
      }
    }
  }, [teks]);

  return (
    <h2
      ref={kataRef}
      className="mt-6 text-lg leading-8 text-gray-600 jargon"
    >
      {teksDitampilkan}
    </h2>
  );
};

export const DownloadButton = () => {
  const downloadButtonRef = useRef(null);

  useEffect(() => {
    const downloadButton = downloadButtonRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            downloadButton.classList.remove("w-0");
            downloadButton.classList.add("w-full", "sm:w-auto");
          } else {
            downloadButton.classList.remove("w-full", "sm:w-auto");
            downloadButton.classList.add("w-0");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (downloadButton) {
      observer.observe(downloadButton);
    }

    return () => {
      if (downloadButton) {
        observer.unobserve(downloadButton);
      }
    };
  }, []);

  const handleClick = () => {
    window.open('https://drive.google.com/file/d/1mPyQM6mpKJJiPcy8-nDPhfLhqxDzTNw7/view?usp=drive_link', '_blank');
  };

  return (
    <button
      ref={downloadButtonRef}
      id="downloadButton"
      className="download-button transform active:scale-95 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-bold tracking-widest transition-all duration-500 overflow-hidden w-0"
      onClick={handleClick}
    >
      <div className="flex justify-center items-center relative p-3">
        <div className="svg-container">
          <svg
            className="download-icon"
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="download-arrow"
              d="M13 9L9 13M9 13L5 9M9 13V1"
              stroke="#F2F2F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
              stroke="#F2F2F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="button-copy pl-2 leading-none uppercase">Download My CV</div>
      </div>
    </button>
  );
};

export function ScriptHeroSection() {
  return (
    <div>
      <EfekMengetik teks="Teks yang akan ditampilkan" />
      <DownloadButton />
    </div>
  );
}
