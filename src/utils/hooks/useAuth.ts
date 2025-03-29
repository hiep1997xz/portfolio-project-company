import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { KEY_QUERY } from '../keyQuery';

const fetchMe = async () => {
  try {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (!token) return null;
    const { data } = await axios.get(`${process.env.REACT_APP_API_DOMAIN}me/`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return data;
  } catch (error) {
    console.error('Lỗi khi gọi API:', error);
  }
};

export const useAuth = () => {
  return useQuery({
    queryKey: [KEY_QUERY.ME],
    queryFn: fetchMe,
    enabled: typeof window !== 'undefined' && !!localStorage.getItem('token'),
    retry: false
  });
};
