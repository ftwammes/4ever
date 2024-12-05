import axios, { AxiosInstance } from 'axios';

class Connector {
    private axiosInstance: AxiosInstance;
    private baseURL: string = 'http://10.140.6.39:3000';
    private token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXRoZXVzLmJ1cmluQHNvdS51bmlqdWkuZWR1LmJyIiwiaWF0IjoxNzMzMzU5MDYzLCJleHAiOjE3MzMzNjI2NjN9.ktZPqb53ibPLQtF-GqlC0GkEh1a1KvPBDMILOtxeX4o';

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        });
    }

    public get<T>(url: string, params?: any): Promise<T> {
        return this.axiosInstance.get<T>(url, { params }).then((response) => response.data);
    }

    public post<T>(url: string, data?: any): Promise<T> {
        return this.axiosInstance.post<T>(url, data).then((response) => response.data);
    }

    public async getUserNotifications(offset: number): Promise<Notification[]> {
        return this.axiosInstance.get<any>('/notification/list', { params: {offset} }).then((response) => response.data) as Promise<Notification[]>;
    }


    // Add other methods as needed (put, delete, etc.)
}

export default Connector;