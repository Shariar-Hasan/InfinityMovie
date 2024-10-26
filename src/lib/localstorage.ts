import { isBrowser } from '@/constants/browser';

export class LocalStorage {
    name: string;
    constructor(name: string) {
        this.name = name;
        if (isBrowser && !localStorage.getItem(name)) {
            localStorage.setItem(name, '[]');
        }
    }
    set(value: any) {
        if (typeof value === 'object') {
            localStorage.setItem(this.name, JSON.stringify(value));
        } else {
            localStorage.setItem(this.name, value);
        }
    }
    get() {
        const value = localStorage.getItem(this.name);
        try {
            return JSON.parse(value || '');
        } catch (error) {
            return value;
        }
    }
    remove() {
        localStorage.removeItem(this.name);
    }
    clear() {
        localStorage.clear();
    }
}
