import Foo from '../src/foo.js';

describe('ES6 Foo', function () {

    let foo;

    beforeEach(()=>{
        foo = new Foo();
    });

    it('should return Do Something when calling doSomething', ()=>{
        expect(foo.doSomething()).toEqual('Do Something');
    });

    it('should not work', ()=>{
        expect(foo.doSomethingElse()).toEqual('bar');
    });
});
