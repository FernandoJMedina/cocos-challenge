import { atom } from "jotai";
import type { Portfolio } from "../api/models/portfolio";

export const portfolioAtom = atom<Portfolio | null>(null);
