const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../server.js'); // Our app
const sinon = require('sinon');
const githubApi = require('../githubApi');

function mockRepositories() {
    return [
        {
            id: 1,
            name: "appscape/ASDayPicker",
            forks: 18,
            stars: 129,
            owner: "appscape"
        },
        {
            id: 2,
            name: "RxSwiftCommunity/RxASDataSources",
            forks: 23,
            stars: 80,
            owner: "RxSwiftCommunity",
            bookmark: true
        },
        {
            id: 3,
            name: "thecreation/jquery-asDatepicker",
            forks: 8,
            stars: 12,
            owner: "thecreation"
        }
    ];
}

function mockApi() {
    return {
    items: [
        {
            id: 1,
            full_name: "appscape/ASDayPicker",
            forks: 18,
            stargazers_count: 129,
            owner: {
                login:"appscape"
            }
        },
        {
            id: 2,
            full_name: "RxSwiftCommunity/RxASDataSources",
            forks: 23,
            stargazers_count: 80,
            owner: {
                login: "RxSwiftCommunity"
            },
            bookmark: true
        },
        {
            id: 3,
            full_name: "thecreation/jquery-asDatepicker",
            forks: 8,
            stargazers_count: 12,
            owner:{
                login: "thecreation"
            }
        }
    ]
}
}


describe('API endpoint GET /api/repositories/search/:searchTerm', function () {

    it('should return an array of repositories', function () {
        const searchTerm = 'fffa';
        const apiStub = sinon.stub(githubApi, 'get');
        apiStub.returns(Promise.resolve(mockApi()));

        return chai.request(app)
            .get('/api/repositories/search/' + searchTerm)
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('array');
                expect(res.body[0]).has.property('id');
                expect(res.body[0]).has.property('stars');
                expect(res.body[0]).has.property('owner');
                expect(res.body[0]).has.property('forks');
                expect(res.body[0]).has.property('name');
                apiStub.restore();
            });
    });
});


describe('API endpoint PUT /api/bookmarks', function () {

    it('should add a bookmark to a repository', function () {

        app.repositories = mockRepositories();
        const repository_id = 1;
        return chai.request(app)
            .put('/api/bookmarks')
            .send({
                repository_id: repository_id
            })
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                expect(res.body.bookmark).to.be.true;
                expect(res.body.owner).to.be.equal('appscape');
            })
    })
});


describe('API endpoint GET /api/bookmarks', function () {

    it('should return an array of bookmarked repositories', function () {

        app.repositories = mockRepositories();

        return chai.request(app)
            .get('/api/bookmarks')
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('array');
                expect(res.body[0].bookmark).to.be.true;
                expect(res.body[0].name).to.be.equal("RxSwiftCommunity/RxASDataSources");
            })
    })
});


describe('API endpoint DELETE /api/bookmarks', function () {

    it('should delete the bookmark of a repository', function () {

        app.repositories = mockRepositories();
        const repository_id = 2;
        return chai.request(app)
            .delete('/api/bookmarks')
            .send({
                repository_id: repository_id
            })
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                expect(res.body.bookmark).to.be.false;
            })
    })
});

