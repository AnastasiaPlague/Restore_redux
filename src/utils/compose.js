const compose = (...funcs) => comp => {
	//compose takes all functions(HOC) as arguments and with rest operator turns them into array, which we use to iterate from right to left to call with the result of previous call
	//reduceRight takes two arguments which are wrapped = component we want to wrap with many hocs and function from functions array. we can also specify INITIAL value to initialize iteration, but in this case we do not need it so the first call of reduceRight will take the last function in the array and call it with component, then the next function will take the result of that previous call and will get call with the that result
	return funcs.reduceRight((wrapped, func) => func(wrapped), comp);
};

export default compose;
