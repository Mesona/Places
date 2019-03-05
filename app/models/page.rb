# == Schema Information
#
# Table name: pages
#
#  id             :bigint(8)        not null, primary key
#  title          :string           not null
#  body           :text
#  private        :boolean          default(FALSE)
#  place_id       :integer          not null
#  parent_page_id :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Page < ApplicationRecord
  validates :title, :place_id, presence: true

  belongs_to :place
  
  has_many :children,
    foreign_key: :parent_page_id,
    class_name: "Page"
  
  belongs_to :parent,
    foreign_key: :parent_page_id,
    class_name: "Page",
    optional: true
end
