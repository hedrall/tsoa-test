import { Controller, Get, OperationId, Query, Route, Security, Request } from 'tsoa';
import express from 'express';

class MyUser {
  constructor (public id: number, public name: string) {}
}

@Route('user')
export class UserController extends Controller {
  constructor() {
    super();
  }

  @Get('')
  @Security('security-name')
  @OperationId('get-user')
  public async get(@Request() request: express.Request, @Query() id: string): Promise<MyUser> {
    console.log('受け取ったID', id);
    return new MyUser(10000000, 'テストユーザ名');
  }
}
