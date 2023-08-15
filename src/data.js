export const drawProducts = (setIsLoading) => {
return new Promise((resolve, reject) => {
const ERR = false;
setIsLoading(true);
setTimeout(() => {
if (ERR) {
reject("Ha ocurrido un error");
alert("Ha ocurrido un error");
} else {
resolve(products);
setIsLoading(false);
 }
 }, 1000);
});
};

//DATA DETAIL

//export const detailItem = (setIsLoading, id) => {
// return new Promise((resolve, reject) => {
// setIsLoading(true);
//setTimeout(() => {
//resolve(products.find((alimento) => alimento.id === id));
//setIsLoading(false);
//}, 2000);
//});
//};
