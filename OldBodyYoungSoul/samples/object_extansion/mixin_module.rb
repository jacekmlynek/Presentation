module Printable
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

class Invoice
  include Printable
  attr_accessor :details
end

tv_invoice = Invoice.new
tv_invoice.details = "tv invoice for march equal 120 pln"
tv_invoice.print_to_pdf if tv_invoice.respond_to? 'print_to_pdf' 

mobile_invoice = Invoice.new 
mobile_invoice.details = "mobile invoice for april 89 pln"
mobile_invoice.print_to_csv if mobile_invoice.respond_to? 'print_to_csv'
