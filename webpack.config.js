const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.tsx",
  },
  module: {
    rules: [
      // 解析 TypeScript
      {
        test: /\.(tsx?|jsx?)$/,
        use: "ts-loader",
        exclude: /(node_modules|tests)/,
      },
      //解析css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      //解析less
      {
        test: /\.less$/i,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: (resourcePath) => {
                  if (/pure.css$/i.test(resourcePath)) {
                    return "pure";
                  }
                  if (/global.css$/i.test(resourcePath)) {
                    return "global";
                  }
                  return "local";
                },
              },
            },
          },
          { loader: "less-loader" },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".less", "css"],
    // 设置别名
    alias: {
      utils: path.join(__dirname, "src/utils/"),
      components: path.join(__dirname, "src/components/"),
      apis: path.join(__dirname, "src/apis/"),
      hooks: path.join(__dirname, "src/hooks/"),
      store: path.join(__dirname, "src/store/"),
    },
  },
  devtool: "inline-source-map",
  // 3000 端口打开网页
  devServer: {
    static: "./dist",
    port: 3000,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    clean: true,
  },
  // 指定模板 html
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
