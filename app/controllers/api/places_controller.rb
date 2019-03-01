class Api::PlacesController < ApplicationController

  def index
    @places = Place.all
  end

  def show
    @place = Place.find(params[:id])
    if @place
      render :show
    else
      render json: @place.errors.full_messages, status: 404 
    end
  end

  def edit
    @place = Place.find(params[:id])
    render :edit
  end

  def create
    @place = Place.new(user_params)

    if @place.save
      render :show
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
    if @place
      @place.destroy
      render :show
    end
  end

  private
    def place_params
      params.require(:place).permit(:title, :private)
    end
end
