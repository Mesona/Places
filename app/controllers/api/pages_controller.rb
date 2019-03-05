class Api::PagesController < ApplicationController

  def index
    @place = Place.find(params[:place_id])
    @pages = @place.pages

    # render `/api/places/`
  end

  def show
    @page = Page.find(params[:id])
    if @page
      render json: @page;
    else
      render json: @page.errors.full_messages, status: 404 
    end
  end

  def edit
    @page = Page.find(params[:id])
    render json: @page;
  end

  def create
    @page = Page.new(page_params)

    if @page.save!
      render json: @page;
    else
      render json: @page.errors.full_messages, status: 401
    end
  end

  def update
    @page= Page.find(params[:id])
    if @page.update(page_params)
      render :show
    else
      render json: @page.errors.full_messages, status: 422
    end
  end

  def destroy
    @page = Page.find(params[:id])
    if @page && (current_user.id = @page.place.owner_id)
      @page.destroy
      render :show
    else
      render json: @page.errors.full_messages, status: 422
    end
  end

  private
    def page_params
      params.require(:page).permit(:title, :body, :place_id)
    end
end

