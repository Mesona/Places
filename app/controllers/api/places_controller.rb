class Api::PlacesController < ApplicationController

  def index
    @places = Place.all
  end

  def show
    @place = Place.find(params[:id])
    if @place
      render json: @place;
    else
      render json: @place.errors.full_messages, status: 404 
    end
  end

  def edit
    @place = Place.find(params[:id])
    render json: @place;
  end

  def create
    @place = Place.new(place_params)

    if @place.save!
      render json: @place;
    else
      render json: @place.errors.full_messages, status: 401
    end
  end

  def update
    @place = Place.find(params[:id])
    if @place.update(place_params)
      render :show
    else
      render json: @place.errors.full_messages, status: 422
    end
  end

  def destroy
    @place = Place.find(params[:id])
    if @place && (current_user.id = @place.owner_id)
      @place.destroy
      render :show
    else
      render json: @place.errors.full_messages, status: 422
    end
  end

  private
    def place_params
      params.require(:place).permit(:title, :private, :owner_id, :pages)
    end
end
