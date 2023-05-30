while (!text('立即购买').exists() && !text('立即预订').exists()) {};
if (text('立即购买').exists()) {
    console.log(pickup(text('立即购买'), 'p1', 'click')); 
}
if (text('立即预订').exists()) {
    console.log(pickup(text('立即预订'), 'p1', 'click')); 
}

// page for time
while (!text('2023-06-19 周一 19:30').exists()) {};
console.log(pickup(text('2023-06-19 周一 19:30'), 'p4', 'click'));
console.log(pickup(text('看台355元'), 'p4', 'click')); 
// let btn_add = id('img_jia');
// console.log(btn_add.click());
// console.log(btn_add.click());
// console.log(btn_add.click());
console.log(pickup(text('确定'), 'p1', 'click')); 

// page for people
// while (!text('130************024').exists()) {};
// console.log(pickup(text('130************024'), 's3', 'click'));
// console.log(pickup(text('230************454'), 's3', 'click')); 
// console.log(pickup(text('330************029'), 's3', 'click')); 
// console.log(pickup(text('330************319'), 's3', 'click')); 
while (!text('提交订单').exists()) {};
let btn_upload = text('提交订单').findOnce();
console.log(btn_upload.click());