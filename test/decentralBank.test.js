const RWD = artifacts.require('RWD');
const Tether = artifacts.require('Tether');
const DecentralBank = artifacts.require('DecentralBank');

require('chai').use(require('chai-as-promised')).should();

contract('DecentralBank', (accounts) => {
    describe('Mock Tether Deployment', async () => {
        it('matches name successfully', async () => {
            let tether = await Tether.new();
            const name = await tether.name();
            
            assert.equal(name, 'Tether');
        });
    });
});
