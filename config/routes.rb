Rails.application.routes.draw do
  root 'home_page#index'
  get '*path', to: 'home_page#index'
end
