import getSearchObj from "utils/getSearchObject";

describe("getSearchObj",() => {
    it("可以获取当前网址的查询参数对象", () => {
        // 使用全局暴露的JsDom

        // global.jsdom.reconfigure({
        //     url:"https://www.baidu.com?a=1&b=2"
        // })

        // window.location.href = "https://www.baidu.com?a=1&b=2";
        window.location.assign('https://www.baidu.com?a=1&b=2');
        expect(window.location.search).toEqual("?a=1&b=2");
        expect(getSearchObj()).toEqual({
            a:"1",
            b:"2",
        });
    });

    it("空参数返回",() => {

        // global.jsdom.reconfigure({
        //     url:"https://baidu.com"
        // })
        // window.location.href = "https://www.baidu.com";
        // expect(window.location.search).toEqual("");
        window.location.assign('https://www.baidu.com');
        expect(getSearchObj()).toEqual({});
    })
})