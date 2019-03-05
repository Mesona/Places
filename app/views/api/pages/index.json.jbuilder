@pages.each do |page|
  json.set! page.id do
    json.extract! page, :id, :title, :body, :private, :place_id, :parent_page_id
  end
end
