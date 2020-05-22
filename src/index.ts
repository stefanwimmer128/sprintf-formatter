import {
    isArray,
} from "lodash";
import {
    Formatter,
} from "vue-i18n";
import {
    sprintf,
    vsprintf,
} from "sprintf-js";

/**
 * Sprintf Formatter - use sprintf for formating vue-i18n translations
 */
export default class SprintfFormatter implements Formatter {
    interpolate(message: string, values: any[] | Record<string, any> | undefined) {
        return [isArray(values) ? vsprintf(message, values) : values ? sprintf(message, values) : message];
    }
}
