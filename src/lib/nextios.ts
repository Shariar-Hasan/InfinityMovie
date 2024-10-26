export default class Nextios {
    baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    async get(path: string, options: RequestInit = {}) {
        try {
            const res = await fetch(`${this.baseUrl}${path}`, {
                method: 'GET',
                ...options,
            });
            return await res.json();
        } catch (error) {
            return null;
        }
    }
    async post(path: string, body: any, options: any = {}) {
        try {
            const res = await fetch(`${this.baseUrl}${path}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
                ...options,
            });
            return await res.json();
        } catch (error) {
            return null;
        }
    }
    async delete(path: string, body: any, options: RequestInit = {}) {
        try {
            const res = await fetch(`${this.baseUrl}${path}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
                ...options,
            });
            return await res.json();
        } catch (error) {
            return null;
        }
    }
}
