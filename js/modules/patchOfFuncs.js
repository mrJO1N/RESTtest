import { promisify } from "util";
import { readFile as readfile_, readFileSync as readFileSync_ } from "fs";
export const readFile = promisify(readfile_);
export const readFileSync = readFileSync_;
