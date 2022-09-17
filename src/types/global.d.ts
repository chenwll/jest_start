// src/types/global.d.ts
// 解决less引入报错问题
declare module "*.less" {
  const content: any;
  export default content;
}