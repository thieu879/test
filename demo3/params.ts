function LogParameter(target: any, key: string | symbol, parameterIndex: number) {
    console.log(parameterIndex); //parameterIndex: là chỉ số của tham số trong danh sách tham số của method.
    console.log(key); //key: là tên của method hoặc property được trang trí.
    console.log(target); //target: đây là class mà method được gọi.
    console.log(`Tham số ${parameterIndex} của ${String(key)} trong ${target.constructor.name} đã được trang trí`);
}

class Example {
    greet(@LogParameter message: string): void {
        console.log(message);
    }
}

const example = new Example();
example.greet("Hello, world!");
// Output: Parameter 0 of greet in Example has been decorated
// Hello, world!
