@pages.each do |page|
  # place_id = page.place.id
  json.set! page.id do
    json.extract! page, :id, :title, :body, :private, :place_id, :parent_page_id, :children
  end
end
