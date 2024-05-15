"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function LogParameter(target, key, parameterIndex) {
    console.log(parameterIndex); //parameterIndex: là chỉ số của tham số trong danh sách tham số của method.
    console.log(key); //key: là tên của method hoặc property được trang trí.
    console.log(target); //target: đây là class mà method được gọi.
    console.log(`Tham số ${parameterIndex} của ${String(key)} trong ${target.constructor.name} đã được trang trí`);
}
class Example {
    greet(message) {
        console.log(message);
    }
}
__decorate([
    __param(0, LogParameter),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Example.prototype, "greet", null);
const example = new Example();
example.greet("Hello, world!");
// Output: Parameter 0 of greet in Example has been decorated
// Hello, world!
