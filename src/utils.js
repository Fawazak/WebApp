import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export const getImageUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href;
}


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
