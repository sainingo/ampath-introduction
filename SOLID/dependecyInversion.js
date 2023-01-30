// dependency inversion principle
// high-level modules should not depend on low-level modules. Both should depend on abstractions.
// abstractions should not depend on details. Details should depend on abstractions.

// Bad approach
class Fetch {
    constructor() {
        this.fetch = require("node-fetch");
    }
    get(url) {
        return this.fetch(url);
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch();
    }
    get(url) {
        return this.fetch.get(url);
    }
}

const client = new FetchClient();
client.get("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json()).then(json => console.log(json));

// Better approach is to separate them into two classes
class Fetch {
    constructor() {
        this.fetch = require("node-fetch");
    }
    get(url) {
        return this.fetch(url);
    }
}

class FetchClient {
    constructor(fetch) {
        this.fetch = fetch;
    }
    get(url) {
        return this.fetch.get(url);
    }
}

const client = new FetchClient(new Fetch());
client.get("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json()).then(json => console.log(json));
