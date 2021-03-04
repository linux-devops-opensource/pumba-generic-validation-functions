const fs = require('fs')
const chai = require('chai')
const testPackage = 'browser-stdout-1.3.1.tgz'
const genfunc = require('../genericfunctions')

//create sandbox
fs.mkdirSync("./test/testsandbox", { recursive: true })

describe('Delete Package file test', function() {
    it('If the function successfully deletes a file the file should no longer exist in the sandbox', async function() {
        fs.copyFileSync(`./test/testresources/${testPackage}`, `./test/testsandbox/${testPackage}`);
        await genfunc.deletePackagefile(`./test/testsandbox/${testPackage}`)
        let fileExists = fs.existsSync(testPackage)
        chai.expect(fileExists).to.be.false
    });
})