
export const getPlaces = () => (
  $.ajax({
    method: `GET`,
    url: '/api/places',
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
    method: `POST`,
    url: `/api/user/${place.id}`,
    data: { place }
  })
);

export const deletePlace = id => (
  $.ajax({
    method: `DELETE`,
    url: `/api/places/${id}`,
  })
);