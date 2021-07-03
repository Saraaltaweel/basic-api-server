'use strict';

const logger=require('../src/middleware/logger');

describe('logger middleware',()=>{
    let consoleSpy;
    let req={};
    let res={};
    let next=jest.fn();

beforeEach(()=>{
    consoleSpy=jest.spyOn(console,'log').mockImplementation();

})
})
afterEach(()=>{
    consoleSpy.mockRestore();
})
it('log the output',()=>{
    logger(req,res,next);
    expect(consoleSpy).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
})