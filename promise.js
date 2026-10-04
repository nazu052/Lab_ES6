const randomPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const value = Math.random();
    if (value > 0.5) resolve(`Амжилттай! (${value.toFixed(2)})`);
    else reject(`Алдаа гарлаа (${value.toFixed(2)})`);
  }, 2000);
});
 
randomPromise
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));
