import axios, { AxiosInstance } from 'axios';

class Connector {
    private axiosInstance: AxiosInstance;
    private baseURL: string = 'http://192.168.1.105:3000';//'http://10.140.6.39:3000';
    private token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXRoZXVzLmJ1cmluQHNvdS51bmlqdWkuZWR1LmJyIiwiaWF0IjoxNzMzMzU5MDYzLCJleHAiOjE3MzMzNjI2NjN9.ktZPqb53ibPLQtF-GqlC0GkEh1a1KvPBDMILOtxeX4o';

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        });
    }

    public async getUserNotifications(offset: number): Promise<any[]> {
        return this.axiosInstance.get<any>('/notification/list', { params: {offset} }).then((response) => response.data) as Promise<any[]>;
    }

    public async getNews(offset: number, categoryId: number): Promise<any[]> {
        return this.axiosInstance.get<any>('/news', { params: { offset, categoryId } }).then((response) => response.data) as Promise<any[]>;
    }

    public async getSubscribedCategory(): Promise<any[]> {
        return this.axiosInstance.get<any>('/category/list').then((response) => response.data) as Promise<any[]>;
    }

    public async getMarkedNews(offset: number): Promise<any[]> {
        return this.axiosInstance.get<any>('/marked/list', { params: { offset } }).then((response) => response.data) as Promise<any[]>;
    }


    // Add other methods as needed (put, delete, etc.)
}

export default Connector;