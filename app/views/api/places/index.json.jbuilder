@places.each do |place|
  json.set! place.id do
    json.extract! place, :id, :title, :private, :owner_id
  end
end
