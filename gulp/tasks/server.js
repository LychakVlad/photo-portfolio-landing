import { notify } from "browser-sync"

export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.docs.html}`
        },
        notify: false,
        port: 3000,
    });
}