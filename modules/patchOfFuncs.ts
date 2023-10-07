import { promisify } from "util";
import { readFile as readfile_ } from "fs";

// export const Patched = {
//   readFile: Promised.readFile,
// };

export const readFile = promisify(readfile_);
