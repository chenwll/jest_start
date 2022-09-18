// src/types/global.d.ts

import { AntAnchor } from "antd/lib/anchor/Anchor";

// 解决less引入报错问题
declare module "*.less" {
  const content: any;
  export default content;
}

// declare namespace globalThis {
//   var jsdom: any;
// }