function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(this, args);
      timerId = null;
    }, delay);
  };
}

const search = (query) => {
  console.log(`Searching for ${query}`);
};

const searchWithDebounce = debounce(search, 500);

searchWithDebounce('J')
searchWithDebounce('Ja')
searchWithDebounce('Jav')
searchWithDebounce('Java')
searchWithDebounce('JavaS')
searchWithDebounce('JavaSc')
searchWithDebounce('JavaScr')
searchWithDebounce('JavaScri')
searchWithDebounce('JavaScrip')
searchWithDebounce('JavaScript')
