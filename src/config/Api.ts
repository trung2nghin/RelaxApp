const base_url = 'https://60bf673397295a0017c42ad6.mockapi.io';
const urls = {
  song: base_url + '/Song',
  songByKey: (title: string) => base_url + `/Song?title=${title}`,
};
export default urls;
