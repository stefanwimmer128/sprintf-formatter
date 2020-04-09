import {
    Formatter,
} from "vue-i18n";
import {
    sprintf,
    vsprintf,
} from "sprintf-js";

export default class SprintfFormatter implements Formatter {
    interpolate(message: string, values: any[] | Record<string, any> | undefined) {
        return [Array.isArray(values) ? vsprintf(message, values) : values ? sprintf(message, values) : message];
    }
}
