describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic

    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    allServers = {};
    serverTbody.innerHTML = ''; 
  });
});




describe('testing functionality for submitServerInfo', function(){
  beforeEach(function(){
    serverNameInput.value = 'Jacob'
    submitServerInfo();
    serverNameInput.value = 'Alex'
    submitServerInfo();
    serverNameInput.value = 'Jose'
    submitServerInfo();
  });

  it('should have only unique server Id for each server', function(){
      let values = Object.keys(allServers);
      let testResult = values.some((value1)=>{
        let valuesCopy = values;
        delete valuesCopy.splice(valuesCopy.indexOf(value1), 1)
        return valuesCopy.some((value2)=> value1 !== value2)});
      expect(testResult).toBe(true);
  });

  afterEach(function(){
    allServers = {};
    serverTbody.innerHTML = '';
  });
});


describe('Testing functionality of updateServerTable', function(){
  beforeEach(function(){
    serverNameInput.value = 'Jacob'
    submitServerInfo();
    serverNameInput.value = 'Alex'
    submitServerInfo();
    serverNameInput.value = 'Jose'
    submitServerInfo();
    serverNameInput.value = 'Valerie'
    submitServerInfo();
  });

    it('should have the same amount of tr as the amount of servers in allServers object', function(){
      let values = Object.keys(allServers);
      let allTr = Array.from(document.getElementsByTagName('tr'));
      let allTrFiltered = allTr.filter((tr) => { 
        if(typeof tr.getAttribute('id') === 'string'){
            return 'server'.indexOf(tr.getAttribute('id').slice(0, 5)) !== -1;
        };
      });
      expect(allTrFiltered.length).toBe(values.length);
    });


  afterEach(function(){
    allServers = {};
    serverTbody.innerHTML = ''; 
  });
});