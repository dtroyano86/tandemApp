Rails.application.routes.draw do
  namespace :api do
    resources :high_scores, only: [:index, :create, :destroy]
  end
  root 'home_page#index'
  get '*path', to: 'home_page#index'
end
