import http from '@/services/http-common';  // Import the default export of the http-common module
import type { Saintseiya, SaintseiyaEditAdd } from '@/types/seintseiya-type';

export default{
    getAll(){
        return http.get<Saintseiya[]>('/santosDorados');
    },
    getById(id: number){
        return http.get<Saintseiya>(`/santosDorados/${id}`);
    },
    create(payload: SaintseiyaEditAdd){
        return http.post('/santosDorados', payload);
    },
    update(id: number, payload: SaintseiyaEditAdd){
        return http.put(`/santosDorados/${id}`, payload);
    },
    delete(id: number){
        return http.delete(`/santosDorados/${id}`);
    }
}