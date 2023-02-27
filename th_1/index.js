var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};
var is_shop_open = true;
//     let order = (fruit_name, call_production) =>{
//         call_production();
//       };
//     let production = () =>{
//         setTimeout(()=>{
//             console.log("production has started")
//             setTimeout(()=>{
//               console.log("The fruit has been chopped")
//               setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
//                 setTimeout(()=>{
//                   console.log("start the machine")
//                   setTimeout(()=>{
//                     console.log(`Ice cream placed on ${stocks.holder[1]}`)
//                     setTimeout(()=>{
//                       console.log(`${stocks.toppings[0]} as toppings`)
//                       setTimeout(()=>{
//                         console.log("serve Ice cream")
//                       },2000)
//                     },3000)
//                   },2000)
//                 },1000)
//               },1000)
//             },2000)
//           },0)
//         };
//     order("", production);
// ----------------------------------------------------------------Promise
// 
// let order = (time: number, work: any) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         // work is getting done here
//         resolve(work())
//         // Setting time here for 1 work
//       }, time)
//     }
//     else {
//       reject(console.log("Our shop is closed"))
//     }
//   })
// };
// // step 1
// order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
// // step 2
// .then(()=>{
//   return order(0,()=>console.log('production has started'));
// })
// // step 3
// .then(()=>{
//   return order(2000, ()=>console.log("Fruit has been chopped"))
// })
// // step 4
// .then(()=>{
//   return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
// })
// // step 5
// .then(()=>{
//   return order(1000, ()=>console.log("start the machine"))
// })
// // step 6
// .then(()=>{
//   return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
// })
// // step 7
// .then(()=>{
//   return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
// })
// // Step 8
// .then(()=>{
//   return order(2000, ()=>console.log("Serve Ice Cream"))
// })
//  ---------------------------------------------------------------- Async
function Time(time) {
    return new Promise(function (resolve, reject) {
        if (is_shop_open) {
            resolve(time);
        }
        reject("shop is closed");
    });
}
function production() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, Time(2000)];
                case 1:
                    _a.sent();
                    console.log("".concat(stocks.Fruits[0], " was selected"));
                    return [4 /*yield*/, Time(1000)];
                case 2:
                    _a.sent();
                    console.log("food was added");
                    return [4 /*yield*/, Time(2000)];
                case 3:
                    _a.sent();
                    console.log("Serve Ice Cream");
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
production();
