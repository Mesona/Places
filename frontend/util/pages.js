
export const getPages = () => (
  $.ajax({
    method: `GET`,
    url: '/api/pes',
  })
);

export const getPlace = id => (
  $.ajax({
    method: `GET`,
    url: `/api/places/${id}`,
  })
);

export const postPlace = place => (
  $.ajax({
    method: `POST`,
    url: `/api/places`,
    data: { place }
  })
);

export const patchPlace = place => (
  $.ajax({
    method: `PATCH`,
    url: `/api/places/${place.id}`,
    data: { place }
  })
);

export const deletePlace = id => (
  $.ajax({
    method: `DELETE`,
    url: `/api/places/${id}`,
  })
);