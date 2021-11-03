
var result = [];


function getMin(arr)
	{
		var minInd = 0;
		for (var i = 1; i < arr.length; i++)
			if (arr[i] < arr[minInd])
				minInd = i;
		return minInd;
	}
    function getMax(arr)
    {
        var maxInd = 0;
        for (var i = 1; i < arr.length; i++)
            if (arr[i] > arr[maxInd])
                maxInd = i;
        return maxInd;
    }

    function minOf2(x , y)
    {
        return (x < y) ? x: y;
    }

    function minCashFlowRec(amount)
    {

        var mxCredit = getMax(amount), mxDebit = getMin(amount);
     
        if (amount[mxCredit] === 0 && amount[mxDebit] === 0)
            return;

        var min = minOf2(-amount[mxDebit], amount[mxCredit]);
        amount[mxCredit] -= min;
        amount[mxDebit] += min;

        var ans = [];  
        ans.push(`Person ${mxDebit + 1} pays ${min} to Person ${mxCredit + 1}`);
        result.push(ans);

        minCashFlowRec(amount);
    }

    export function minCashFlow(graph)
    {
        var len = graph.length;
        var amount=Array.from({length: len}, (_, i) => 0);

        for (var p = 0; p < len; p++)
            for (var i = 0; i < len; i++)
                amount[p] += (graph[i][p] - graph[p][i]);
        result = [];
        minCashFlowRec(amount)
        return result;
    }

export default minCashFlow;
