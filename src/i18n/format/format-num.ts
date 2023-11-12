export const formatNum = Intl.NumberFormat("en-US", {
  currency: "IDR",
  notation: "compact",
});

const n = formatNum.format(1_222_222);

console.log(n);
