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

  has_many :pages,
    foreign_key: :parent_page_id,
    class_name: :Page

  belongs_to :place
  
  belongs_to :page,
    foreign_key: :parent_page_id,
    class_name: :Page
end
