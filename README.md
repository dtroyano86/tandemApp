# README

Welcome to Daniel Troyano's Trivia application. It's built with Rails and React and uses a Postgres database to persist scores.

## How to get it up and running
This Application uses Ruby 2.7.0. The entry point for the front end React code is `client/packs/index.jsx`.

Once you've cloned the code onto your computer, run `bundle install` and `yarn install --check-files` to install all the dependencies. I used a Postgres database to persist scores, and used the Figaro gem to store the username and password to the database in environment variables. So you'll have to create a `config/application.yml` and add your local username and password as entries.
```yml
DB_USER: YOUR_USERNAME
DB_PASSWORD: YOUR_PASSWORD
```
Replace `YOUR_USERNAME` with your username and `YOUR_PASSWORD` with your password.

Now that that initial setup is done, you will need to run `rails db:create` and `rails db:migrate` to set up the database.

That takes care of all the setup. Now just run `rails s` to run the server and go to http://localhost:3000.

## How it works
Follow the prompts to start the trivia questions.

The application randomly selects 10 questions to ask you, and randomizes the order that the multiple choice options are displayed.

Select an answer and hit submit, and you'll see if you got the answer correct, and if you didn't, it will show you the correct answer. When you've answered 10 questions you'll see your final score and any questions you got wrong.

You'll also be prompted to enter your name and upload your score to the tracker. However, if you change your mind later you can always delete a score by hitting the red x.

If you want to change the questions being asked, change what the `trivia` import is pointing at in `client/packs/components/questionPage.jsx`.

## Thanks
