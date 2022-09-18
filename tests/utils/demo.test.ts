import { runCallback ,getData} from "utils/demo";
import axios from 'axios'
jest.mock('axios');


describe("runCallback", () => {
    it('callback调用测试', () => {
        const func = jest.fn();
        runCallback(func);
        runCallback(func);
        expect(func).toBeCalled();
        console.log(func.mock);
    })

    // it('测试axios成功发送', async () => {
    //     axios.get.mockResolvedValue({data:"hello"})
    //     await getData().then((data) => {
    //         expect(data).toBe('hello')
    //     })
    // })
})

// mock属性
//  {
//         calls: [ [ 'abc' ], [ 'abc' ] ],
//         instance每次调用的this指向
//         instances: [ undefined, undefined ],
//         invocationCallOrder: [ 1, 2 ],
//         results: [
//           { type: 'return', value: undefined },
//           { type: 'return', value: undefined }
//         ],
//         lastCall: [ 'abc' ]
//  }

//自由的设置返回结果
// func.mockReturnValue('dell')
// func.mockReturnValueOnce('dell')
// func.mockImplementation(()=>{return "dell"})
// func.mockImplementationOnce
// expect是断言