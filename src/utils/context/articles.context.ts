import { Article } from "@/components/layouts/Default";
import { createContext } from "react";

export const ArticleContext = createContext<Array<Article>>(new Array())