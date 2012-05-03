module Printer
  def print_to_pdf
    puts "Text as pdf: #{self.details}"
  end

  def print_to_html
    puts "Text as html: #{self.details}"
  end

  def print_to_csv
    puts "Text as csv: #{self.details}"
  end
end

class Offer
  attr_accessor :details
end

saving_account_offer = Offer.new
saving_account_offer.extend Printer
saving_account_offer.details = "Nice saving account with intrest rate up to 5.7%"
saving_account_offer.print_to_html if saving_account_offer.respond_to? 'print_to_html'

work_and_travel_offer = Offer.new
work_and_travel_offer.details = "work and travel"
work_and_travel_offer.print_to_html if work_and_travel_offer.respond_to? 'print_to_html'


