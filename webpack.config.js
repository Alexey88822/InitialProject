const path = require("path")

module.exports = (env) => {
    const modules = {
        js: {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                },
            ],
        },
        stylus: {
            test: /\.styl$/,
            use: [
                {
                    loader: "style-loader", // Добавляет теги style в head html разметки
                },
                {
                    loader: "css-loader", // Компилирует CSS в CommonJS
                },
                {
                    loader: "stylus-loader", // Компилирует Stylus в CSS
                    options: {
                        stylusOptions: {
                            import: [ // Тут для Stylus'а можем объявить глобальные переменные или функции, чтобы каждый раз их не импортировать
                                path.resolve(__dirname, 'src/common/styles/variables.styl'),
                            ],
                        }
                    }
                },
            ],
        },
    }

    if (env === 'production') {
        modules.stylus.use.splice(2, 0, { loader: "postcss-loader" })
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: { // Тут тот же момент, что и в tsconfig.json, чтобы Webpack смог понять ссылки на директории
            app: path.resolve(__dirname, 'src/app/'),
            pages: path.resolve(__dirname, 'src/pages/'),
            common: path.resolve(__dirname, 'src/common/')
        },
    }

    return {
        modules,
        resolve,
    }
}