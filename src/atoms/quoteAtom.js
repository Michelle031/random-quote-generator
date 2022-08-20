import { atom } from "recoil";

export const randomQuote = atom({
    key: "randomQuote",
    default: null,
});

export const authorState = atom({
    key: "authorState",
    default: null,
});

export const loadingRandom = atom({
    key: "loadingRandom",
    default: false,
});

export const loadingAuthor = atom({
    key: "loadingAuthor",
    default: false,
});

