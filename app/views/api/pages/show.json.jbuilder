json.extract! @page, :id, :title, :body, :private, :place_id, :parent_page_id
json.place_id = @page.place.id
json.key = @page.id