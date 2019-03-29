@places.each do |place|
  json.set! place.id do
    json.extract! place, :id, :title, :private, :owner_id, :updated_at, :pages, :owner
  end
end
