let spreadFunc = (a='error', b, c, ...args) => {
    if (args.length < 2) {
        console.log('error');
        return;
    };
    let arr = `${a}-${b}-${c}`;
    let obj = {...args};
    
    console.log(arr);
    console.log(obj);
};

const data = [undefined, 2, 3, 4, 5, 'sd'];
spreadFunc(...data);