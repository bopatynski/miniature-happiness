const copyButton = document.querySelector("[wb-data=copy-button]");
copyButton.addEventListener("click", (event) => {
  const buttonText = copyButton.querySelector('[wb-data="text"]');
  buttonText.textContent = "Copying...";
  const copyJson = (event) => {
    event.preventDefault();
    const componentJson = copyButton.querySelector('[wb-data="json"]')
      .textContent;
    event.clipboardData.setData("application/json", componentJson);
  };
  document.addEventListener("copy", copyJson);
  document.execCommand("copy");
  document.removeEventListener("copy", copyJson);
  setTimeout(() => {
    buttonText.textContent = "Copy to Webflow";
  }, 1000);
});
