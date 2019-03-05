Rails.application.routes.draw do
  root to: 'static_pages#root' 
  namespace :api, defaults: { format: :json } do
    resources :users
    resources :places
    resources :places do
      resources :pages, only: [:index]
    end

    resources :pages, except: :index
    # resources :pages

    resource :session, only: [:new, :create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
