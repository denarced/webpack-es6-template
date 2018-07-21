var htmlWebpackPlugin = require("html-webpack-plugin"),
    path = require("path");

module.exports = {
    entry: path.join(__dirname, "src", "app.jsx"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle-[hash].js"
    },

    module: {
        rules: [{
                exclude: /node_modules/,
                loader: "babel-loader",
                test: /\.(js|jsx)$/
            },
            {
                exclude: /node_modules/,
                include: /src\/*.html/,
                loader: "raw-loader",
                test: /\.html$/
            },
            {
                exclude: /node_modules/,
                test: /\.scss$/,
                use: ["style-loader", "css-loader?modules", "sass-loader"]
            }//,
            // {
            //     enforce: "pre",
            //     exclude: /node_modules/,
            //     test: /\.(js|jsx)$/,
            //     use: [{
            //         loader: "jshint-loader",
            //         options: {
            //             failOnHint: true
            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
            minify: false,
            xhtml: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "src"),
        hot: false,
        inline: true,
        noInfo: false,
        port: 9000,
        proxy: {
            "/api": "http://localhost:8080"
        }
    }
};
