const expect = require('expect');

var {Users} = require('./users.js');

describe('users', () => {
    var users;

    beforeEach(() => {
        users = new Users;
        users.users = [{
            id: '1',
            name: 'Mohammad',
            room: 'Psych'
        }, {
            id: '2',
            name: '1Mohammad',
            room: 'LOTR'
        }, {
            id: '14',
            name: '3Mohammad',
            room: 'Psych'
        }]
    })

    it('should add a user', () => {
        var users = new Users;
        var user = {
            id: 123,
            name: 'Mohammad',
            room: 'Psych'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });
    
    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });
    
    it('should not remove a user', () => {
        var userId = '21';
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);

    });
    
    it('should get user with id 1', () => {
        var gotUser = users.getUser('1');
        
        expect(gotUser).toEqual({
            id: '1',
            name: 'Mohammad',
            room: 'Psych'})
    });
    
    it('should not get user', () => {
        var userId = 1234;
        var user = users.getUser(userId);
        
        expect(user).toBeFalsy();
    })

    it('should get a user of psych', () => {
        var userList = users.getUserList('Psych');

        expect(userList).toEqual(['Mohammad', '3Mohammad']);
    });

    it('should get a user of LOTR', () => {
        var userList = users.getUserList('LOTR');

        expect(userList).toEqual(['1Mohammad']);
    });
});
