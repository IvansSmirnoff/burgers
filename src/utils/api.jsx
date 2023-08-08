export const getData = (url) => {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка получения данных с бэка');
        }
        return response.json();
      })
      .catch(error => {
        console.error(error);
      });
  };
