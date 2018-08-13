import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  Http, ConnectionBackend, RequestOptions, HttpModule, XHRBackend,
  BaseRequestOptions
} from '../../../../node_modules/@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [AuthService, { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions }]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('logout functionality deletes token and user', inject([AuthService], (authService) => {
    authService.token = '123';
    authService.user = { name: 'pieter', email: 'pieterdesseyn@gmail.com', username: 'test' };

    authService.logout();

    expect(authService.token = null);
    expect(authService.user = null);
  }));

  it('test getting users', inject([AuthService, ConnectionBackend], (authService, mockBackend) => {
    const mockResponse = {
      data: [
        { username: 'piere129', email: 'pieterdesseyn@gmail.com' },
        { username: 'bertje12', email: 'bertdebakker@gmail.com' }
      ]
    };

    const responseOptions = new ResponseOptions();
    responseOptions.body = JSON.stringify(mockResponse);
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(responseOptions));
    });

    authService.getUsers().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users[0].username).toEqual('piere129');
      expect(users[1].username).toEqual('bertje12');
      expect(users[0].email).toEqual('pieterdesseyn@gmail.com');
      expect(users[1].email).toEqual('bertdebakker@gmail.com');
    });
  }));

  it('test isLoggedIn() to return false when authtoken is empty, true when not empty', inject([AuthService], (authService) => {

    const testBeforeLoggedIn = authService.isLoggedIn();
    expect(testBeforeLoggedIn).toEqual(false);
    authService.authToken = '123456';
    const testAfterLoggedIn = authService.isLoggedIn();
    expect(testAfterLoggedIn).toEqual(true);

  }));
});
