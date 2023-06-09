class Request {
    #baseUrl;
    #path;
    #queryParams;

    constructor(baseUrl, defaultPath) {
        this.#baseUrl = baseUrl;
        this.#path = defaultPath;
        this.#queryParams = new URLSearchParams();
    }

    setPath(newPath){
        if(typeof newPath !== "string") return null;

        this.#path = newPath;

        return this;
    }

    async get(parameter) {
        return await this.#fetch(parameter, "GET");
    }

    async post(parameter, body, contentType) {
        return await this.#fetch(parameter, "POST", {
            'Content-Type': contentType
        }, body);
    }

    async put(parameter, body, contentType) {
        return await this.#fetch(parameter, "PUT", {
            'Content-Type': contentType
        }, body);
    }

    async delete(parameter) {
        return await this.#fetch(parameter, "DELETE");
    }

    async #fetch(parameter, method, headers, body) {
        const queryString = `${this.#baseUrl}${this.#path}?${parameter?.toString()}`;
        console.log(queryString);

        const response = await fetch(queryString, {
            method: method,
            headers: headers,
            body: body
        });

        if(response.ok) return JSON.parse(await response.text());

        throw new Error('User not found (404).')
    }
}

export default Request;