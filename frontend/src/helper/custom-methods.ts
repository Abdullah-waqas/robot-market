import { RobotI } from "../models/RobotList";

export function formatDateDDMMYYYY(rawDate: string) {
  let date = new Date(rawDate);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

export function formatDatePriceInThai(price: number) {
  let formattedPrice = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  return `฿ ${formattedPrice}`;
}

export function getTotalSum(items: RobotI[] = []) {
  if (items.length) {
    const totalSum = (items || [])
      .map((o) => Number(o.price))
      .reduce((a, c) => a + c);
    return formatDatePriceInThai(totalSum);
  }
  return formatDatePriceInThai(0);
}

export function checkCartLimit(itemList: RobotI[]) {
  let distinctItem = new Set();
  for (const i in itemList) {
    distinctItem.add(itemList[i].name);
  }
  return distinctItem.size;
}

export const debounce = <F extends (...args: any) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: number = 0;

  const debounced = (...args: any) => {
    clearTimeout(timeout);
    setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
