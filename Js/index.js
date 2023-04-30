const equal = document.getElementById("equal");

import { calculate } from "./calculate.js";
import { clear } from "./clear.js";
import { allowedKeys } from "./allowedKeys.js";
import { copyToClipboard } from "./copyToClipBoard.js";
import { themeSwitcher } from "./themeSwitcher.js";
import { keys } from "./keys.js";

clear();
allowedKeys();
copyToClipboard();
themeSwitcher();
keys();

equal.addEventListener("click", calculate);
