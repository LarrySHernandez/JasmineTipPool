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




describe('testing function for submitServerInfo', function(){
  beforeEach(function(){
    serverNameInput.value = 'Jacob'
    submitServerInfo();
    serverNameInput.value = 'Alex'
    submitServerInfo();
    serverNameInput.value = 'Jose'
    submitServerInfo();
  });
  it('should store the name inputed', function(){
      expect();
  });
  it('should have only unique server Id', function(){
      expect();
  });
  afterEach(function(){
    allServers = {};
  });
});