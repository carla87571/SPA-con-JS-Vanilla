

const getHash = () => {
  const hash = location.hash.slice(1).toLowerCase().split('/').slice(1).join('/');
  return hash || '/';
};

export default getHash;