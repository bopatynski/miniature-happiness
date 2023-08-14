const cfbtn = document.querySelector("[wb-data=cfbtn]");

cfbtn.addEventListener("click", (e) => {
  const btntxt = cfbtn.querySelector('[wb-data="txt"]');

  btntxt.textContent = "Copying...";

  const cpy = (e) => {
    e.preventDefault();
    const cjson = cfbtn.querySelector('[wb-data="j"]')
      .textContent;
    e.clipboardData.setData("application/json", cjson);
  };

  document.addEventListener("copy", cpy);
  document.execCommand("copy");
  document.removeEventListener("copy", cpy);

  setTimeout(() => {
    btntxt.textContent = "Copy to Destination";
  }, 1000);
});
