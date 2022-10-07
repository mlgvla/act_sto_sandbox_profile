Rails.application.routes.draw do
  resources :profiles
  resources :users

  patch "/update_profile_pic", to: "profiles#update_profile_pic"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
