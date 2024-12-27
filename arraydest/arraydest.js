const arr = ["bacon", "pizza", "fries"];

const [bacon, pizza, fries] = arr;

console.log(bacon,pizza,fries);

const [pork, ...rest] = arr;

console.log(rest);


const arr2 = [undefined, "icecream", "chocolate"];

const [chips = "chips", icecream, chocolate] = arr2;

console.log(chips);

const obj = {
    shroom: "mushroom",
    cream: "icecream",
    mocha: "vanillamocha"
};

const {shroom, cream, mocha } = obj;

console.log(shroom);

const obj2 = {
    parent: {
        child: "baby"
    }
};

const { parent: {child} } = obj2;

console.log(child);



let a = "foo";
let b = "bar";

[a, b] = [b, a];