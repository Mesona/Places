
export const getPages = () => (
  $.ajax({
    method: `GET`,
    url: '/api/pages',
  })
);

export const getPage = id => (
  $.ajax({
    method: `GET`,
    url: `/api/pages/${id}`,
  })
);

export const postPage = page => (
  $.ajax({
    method: `POST`,
    url: `/api/pages`,
    data: { page }
  })
);

export const patchPage = page => (
  $.ajax({
    method: `PATCH`,
    url: `/api/pages/${page.id}`,
    data: { page }
  })
);

export const deletePage = id => (
  $.ajax({
    method: `DELETE`,
    url: `/api/pages/${id}`,
  })
);