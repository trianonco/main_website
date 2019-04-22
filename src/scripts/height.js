const setAutoHeight = function(){ 

    return new Promise( (resolve, reject) => {

      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
      window.addEventListener("resize", () => {
        const doc = document.documentElement;
        doc.style.setProperty("--app-height", `${window.innerHeight}px`);
      });

      resolve('DONE');

    });
}

export default setAutoHeight;