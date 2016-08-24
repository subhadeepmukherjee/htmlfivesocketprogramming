onmessage = function (event) {
    var sum = 0;
    var currentPercentageComplete = 0;
    var maxLimit = event.data;
        for(var j= 0; j<= maxLimit; j++){
            sum += j;
            newPercentageComplete = Math.round((j / maxLimit) * 100);
            if (newPercentageComplete > currentPercentageComplete) {
                //send message back to main page thread
                postMessage(newPercentageComplete + '% complete');
                //update current percentage complete
                currentPercentageComplete = newPercentageComplete;
            }
        }
        postMessage('Sum = ' + sum);
}