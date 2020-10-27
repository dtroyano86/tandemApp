class CreateHighScores < ActiveRecord::Migration[6.0]
  def change
    create_table :high_scores do |t|
      t.string :name, null: false
      t.integer :score, null: false
      t.timestamps
    end
  end
end
