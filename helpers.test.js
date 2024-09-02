describe('testing functionality for sumPaymentTotal', function(){
    beforeEach(function(){
        document.getElementById('billAmt').value = 500;
        document.getElementById('tipAmt').value = 40;
        submitPaymentInfo();
        document.getElementById('billAmt').value = 300;
        document.getElementById('tipAmt').value = 209;
        submitPaymentInfo();
    });

    it('should add every tipPercent in the allPayments object', function(){
        expect(sumPaymentTotal('tipPercent')).toBe(78);
    });

    afterEach(function(){
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentTbody.innerText = '';
        allPayments = {};
    });

});

describe('testing functionality for calculateTipPercent', function(){
    it('should calculate the correct tip percent amount and round to the nearest percent', function(){
        expect(calculateTipPercent(500, 33.33)).toBe(7);
    });
    afterEach(function(){
        paymentTbody.innerHTML = '';
    });
});

describe('testing functionality for appendTd', function(){
    beforeEach(function(){
        appendPaymentTable({billAmt: 400, tipAmt: 50, tipPercent: 40});
    });
    it('shoudld add the billAmt, tipAmt and tipPercent to the Tr', function(){
        let arr = Array.from(document.querySelector('#paymentTable tbody tr').innerText);
        let arrFiltered = arr.reduce((acc, val) => {
            if(val.length < 2 && val !== '\t'){
                acc = acc + val;
            };
            return acc
        }, '');
        expect(arrFiltered).toBe('$400$5040%');
    })
    afterEach(function(){
        paymentTbody.innerHTML = '';
        allPayments = {};
    });
});