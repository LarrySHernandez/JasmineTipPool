describe('testing functionality for submitPaymentInfo', function(){
    beforeEach(function(){
        document.getElementById('billAmt').value = 144;
        document.getElementById('tipAmt').value = 20;
        submitPaymentInfo();
    });
    it('should reset the value for billAmt and tipAmt back to empty', function(){
        expect(document.getElementById('billAmt').value).toBe('');
        expect(document.getElementById('tipAmt').value).toBe('');
    });

    afterEach(function(){
        document.getElementById('billAmt').value = '';
        document.getElementById('tipAmt').value = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPaymets = {};
        paymentTbody.innerText = '';

    });

});

describe('testing functionality for createCurPayment', function(){
    it('should return an object with the correct figures', function(){
        document.getElementById('billAmt').value = 444;
        document.getElementById('tipAmt').value = 40;
        expect(createCurPayment()).toEqual({billAmt: '444', tipAmt: '40', tipPercent: 9});
        document.getElementById('billAmt').value = 144;
        document.getElementById('tipAmt').value = 20;
        expect(createCurPayment()).toEqual({billAmt: '144', tipAmt: '20', tipPercent: 14});
    });
    afterEach(function(){
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentTbody.innerText = '';

    });


});


describe('testing for functionality for appendPaymentTable', function(){
    beforeEach(function(){
        document.getElementById('billAmt').value = 400;
        document.getElementById('tipAmt').value = 50;    
        submitPaymentInfo();
    });
    it('should display the proper values onto the paymentTbody', function(){

        let TbodyValues = Array.from(paymentTbody.innerText).reduce((acc, val) => {
            if('0123456789'.indexOf(val) !== -1){
                acc = acc + val;
            }
            return acc;
        }, '');
        
        expect(TbodyValues).toBe(`4005013`);

    });
    afterEach(function(){
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentTbody.innerText = '';
        allPayments = {};
    });



});



describe('testing functionality for updateSummary', function(){
    beforeEach(function(){
        document.getElementById('billAmt').value = 400;
        document.getElementById('tipAmt').value = 50;    
        submitPaymentInfo();
    });
    it('should add the proper values to the summaryTds', function(){
        let summaryValues = Array.from(paymentTbody.innerText).reduce((acc, val) => {
            if('0123456789'.indexOf(val) !== -1){
                acc = acc + val;
            }
            return acc;
        }, '');
        expect(summaryValues).toBe('4005013');
    });
    afterEach(function(){
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentTbody.innerText = '';
        
    });


});