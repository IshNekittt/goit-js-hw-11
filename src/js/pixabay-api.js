const fetchRequest = value => {
  const fetchParams = new URLSearchParams({
    key: '46731058-8e313f89df23f954200132c0b',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${fetchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      return response.json();
    })
    .then(obj => {
      if (!obj.hits.length) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please, try again'
        );
      }
      return obj;
    });
};
export default fetchRequest;
