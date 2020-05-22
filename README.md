# Sprintf Formatter

Use [sprintf](https://github.com/alexei/sprintf.js/) for formating vue-i18n translations

## Install

``` bash
yarn add sprintf-formatter
npm i sprintf-formatter
```

``` html
<script src="https://unpkg.com/sprintf-formatter@2.0.1"></script>
```

## Usage

``` js
import VueI18n from "vue-i18n";
import SprintfFormatter from "sprintf-formatter";

const i18n = new VueI18n({
    formatter: new SprintfFormatter(),
    /* ... */
});

new Vue({
    i18n,
    /* ... */
});
```

or with `nuxt-i18n`:

``` js
/* plugins/vue-i18n.js */

import SprintfFormatter from "@/lang/SprintfFormatter";

export default function vueI18n() {
    return {
        formatter: new SprintfFormatter(),
        /* ... */
    };
}
```

``` js
/* nuxt.config.js */

export default {
    modules: [
        [
            "nuxt-i18n",
            {
                vueI18n: "@/plugins/vue-i18n.js",
                /* ... */
            },
        ],
        /* ... */
    ],
    /* ... */
}
```

## License

ISC License
