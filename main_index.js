const a = document.querySelector("[wb-data=copy-button]");
a.addEventListener("click", (e) => {
    const b = a.querySelector('[wb-data="text"]');
    b.textContent = "Copying...";
    const c = (e) => {
        e.preventDefault();
        const d = a.querySelector('[wb-data="json"]').textContent;
        e.clipboardData.setData("application/json", d);
    };
    document.addEventListener("copy", c);
    document.execCommand("copy");
    document.removeEventListener("copy", c);
    setTimeout(() => {
        b.textContent = "Copy to Webflow";
    }, 1000);
});
