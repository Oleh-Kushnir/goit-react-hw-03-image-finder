import axios from 'axios';

export const getAllPosts = () => {
  return axios.get(
    'https://pixabay.com/api/?q=cat&page=1&key=34448080-08ea3992a6669e170b3456efa&image_type=photo&orientation=horizontal&per_page=12'
  );
};
