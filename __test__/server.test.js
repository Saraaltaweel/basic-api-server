const supertest=require('supertest');
const server=require('../src/server');
const req=supertest(server.app);
let id;

describe('test server',()=>{
it('create record',async()=>{
    const res=await (await req.get('/food/')).send({
        name:'pizza',

    })
    expect(res.status).toEqual(201);
    expect(res.body.record.name).toEqual('pizza');
    id=res.body.id
});

it('get one record based on id record',async()=>{
    const res=await (await req.get('/food/1'))
        expect(res.status).toEqual(200);

    })

it('update record based on id',async()=>{
        const res=await req.put('/food').send({
            name:'chicken'
        })
        expect(res.status).toEqual(200);
    })
it('delete record',async()=>{
    const res=await req.delete('/food/1');
    expect(res.status).toEqual(202);

})  

})
